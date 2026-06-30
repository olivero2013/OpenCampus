import axios, { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000';

export const permissionActions = [
  'ALL',
  'READ',
  'CREATE',
  'UPDATE',
  'DELETE',
  'TAKE_ATTENDANCE',
  'ENTER_GRADES',
  'APPROVE_GRADES',
  'VIEW_CONTACTS',
  'EDIT_CONTACTS',
  'ENROLL_STUDENT',
  'WITHDRAW_STUDENT',
  'VIEW_REPORTS',
  'GENERATE_REPORTS',
  'MANAGE_USERS',
  'MANAGE_PERMISSIONS',
] as const;

export type PermissionAction = (typeof permissionActions)[number];

export interface LoginDto {
  username: string;
  password: string;
}

export interface RefreshDto {
  sessionId: number;
  refreshToken: string;
}

export interface AuthResponseDto {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface PermissionGrant {
  action: string;
  resourcePath: string;
  allow: boolean;
}

export interface AuthenticatedUser {
  id: number;
  username: string;
  tokenVersion: number;
  sessionId: number;
}

export interface AccessTokenClaims {
  sub: number;
  sid: number;
  tokenVersion: number;
  iat?: number;
  exp?: number;
}

export interface AuthSessionSnapshot {
  user: AuthenticatedUser;
  refreshToken: string;
  expiresIn: number;
}

export interface AuthInterceptorHandlers {
  getAccessToken: () => string | null;
  refreshSession: () => Promise<AuthResponseDto | null>;
  onRefreshFailure: () => void;
}

export const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

const AUTH_ROUTE_MATCHERS = ['/auth/login', '/auth/refresh', '/auth/logout', '/auth/logout-all'];

export function login(dto: LoginDto): Promise<AuthResponseDto> {
  return api.post<AuthResponseDto>('/auth/login', dto).then((response) => response.data);
}

export function refresh(dto: RefreshDto): Promise<AuthResponseDto> {
  return api.post<AuthResponseDto>('/auth/refresh', dto).then((response) => response.data);
}

export function logout(): Promise<void> {
  return api.post('/auth/logout').then(() => undefined);
}

export function logoutAll(): Promise<void> {
  return api.post('/auth/logout-all').then(() => undefined);
}

export function installAuthInterceptors(handlers: AuthInterceptorHandlers): () => void {
  const requestInterceptorId = api.interceptors.request.use((config) => {
    const accessToken = handlers.getAccessToken();
    if (accessToken) {
      config.headers = config.headers ?? {};
      (config.headers as Record<string, string>).Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  const responseInterceptorId = api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as (InternalAxiosRequestConfig & { _retry?: boolean }) | undefined;

      if (
        !originalRequest ||
        error.response?.status !== 401 ||
        originalRequest._retry ||
        isAuthRoute(originalRequest.url)
      ) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        const refreshed = await handlers.refreshSession();
        if (!refreshed) {
          handlers.onRefreshFailure();
          return Promise.reject(error);
        }

        const accessToken = handlers.getAccessToken();
        if (accessToken) {
          originalRequest.headers = originalRequest.headers ?? {};
          (originalRequest.headers as Record<string, string>).Authorization = `Bearer ${accessToken}`;
        }

        return api.request(originalRequest);
      } catch (refreshError) {
        handlers.onRefreshFailure();
        return Promise.reject(refreshError);
      }
    },
  );

  return () => {
    api.interceptors.request.eject(requestInterceptorId);
    api.interceptors.response.eject(responseInterceptorId);
  };
}

export function decodeAccessToken(accessToken: string): AccessTokenClaims {
  const payload = accessToken.split('.')[1];
  if (!payload) {
    throw new Error('Invalid access token');
  }

  const normalizedPayload = payload.replace(/-/g, '+').replace(/_/g, '/');
  const paddedPayload = normalizedPayload.padEnd(
    normalizedPayload.length + ((4 - (normalizedPayload.length % 4)) % 4),
    '=',
  );

  return JSON.parse(atob(paddedPayload)) as AccessTokenClaims;
}

export function normalizeResourcePath(resourcePath: string): string {
  return resourcePath.trim().replace(/\/+/g, '/').replace(/\/$/, '');
}

export function splitResourcePath(resourcePath: string): string[] {
  return normalizeResourcePath(resourcePath).split('/').filter(Boolean);
}

export function matchesResourcePath(pattern: string, target: string): boolean {
  const patternSegments = splitResourcePath(pattern);
  const targetSegments = splitResourcePath(target);

  for (let index = 0; index < patternSegments.length; index += 1) {
    const patternSegment = patternSegments[index];

    if (patternSegment === '*') {
      return targetSegments.length > index;
    }

    const targetSegment = targetSegments[index];
    if (!targetSegment || patternSegment !== targetSegment) {
      return false;
    }
  }

  return patternSegments.length === targetSegments.length;
}

export function evaluatePermissionGrants(
  grants: PermissionGrant[],
  action: PermissionAction,
  resourcePath: string,
): boolean {
  const normalizedResourcePath = normalizeResourcePath(resourcePath);
  const matchingGrants = grants.filter((grant) => grantMatches(grant, action, normalizedResourcePath));

  if (matchingGrants.length === 0) {
    return false;
  }

  const bestDepth = Math.max(...matchingGrants.map((grant) => splitResourcePath(grant.resourcePath).length));
  const bestGrants = matchingGrants.filter(
    (grant) => splitResourcePath(grant.resourcePath).length === bestDepth,
  );

  return !bestGrants.some((grant) => grant.allow === false);
}

function grantMatches(grant: PermissionGrant, action: PermissionAction, resourcePath: string): boolean {
  const grantAction = grant.action.toUpperCase();
  const actionMatches = grantAction === 'ALL' || grantAction === '*' || grantAction === action;
  if (!actionMatches) {
    return false;
  }

  return matchesResourcePath(grant.resourcePath, resourcePath);
}

function isAuthRoute(url?: string): boolean {
  if (!url) {
    return false;
  }

  return AUTH_ROUTE_MATCHERS.some((matcher) => url.includes(matcher));
}
