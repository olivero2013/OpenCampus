import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  decodeAccessToken,
  evaluatePermissionGrants,
  installAuthInterceptors,
  login as loginRequest,
  logout as logoutRequest,
  logoutAll as logoutAllRequest,
  refresh as refreshRequest,
  type AccessTokenClaims,
  type AuthResponseDto,
  type AuthSessionSnapshot,
  type AuthenticatedUser,
  type LoginDto,
  type PermissionGrant,
  type PermissionAction,
} from './api';

const AUTH_STORAGE_KEY = 'opencampus.auth.session';
const REFRESH_MARGIN_MS = 30_000;

type AuthContextValue = {
  accessToken: string | null;
  user: AuthenticatedUser | null;
  isAuthenticated: boolean;
  isRestoring: boolean;
  isRefreshing: boolean;
  isClientReady: boolean;
  error: string | null;
  login: (credentials: LoginDto) => Promise<void>;
  logout: () => Promise<void>;
  logoutAll: () => Promise<void>;
  hasPermission: (action: PermissionAction, resourcePath: string) => boolean;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [user, setUser] = useState<AuthenticatedUser | null>(null);
  const [permissionGrants, setPermissionGrants] = useState<PermissionGrant[]>([]);
  const [isRestoring, setIsRestoring] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isClientReady, setIsClientReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tokenExpiresAt, setTokenExpiresAt] = useState<number | null>(null);
  const restoreStartedRef = useRef(false);
  const refreshPromiseRef = useRef<Promise<AuthResponseDto | null> | null>(null);

  const readSnapshot = useCallback((): AuthSessionSnapshot | null => {
    if (typeof window === 'undefined') {
      return null;
    }

    const rawSnapshot = window.sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (!rawSnapshot) {
      return null;
    }

    try {
      return JSON.parse(rawSnapshot) as AuthSessionSnapshot;
    } catch {
      window.sessionStorage.removeItem(AUTH_STORAGE_KEY);
      return null;
    }
  }, []);

  const persistSnapshot = useCallback((snapshot: AuthSessionSnapshot) => {
    if (typeof window === 'undefined') {
      return;
    }

    window.sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(snapshot));
  }, []);

  const clearSession = useCallback(() => {
    setAccessToken(null);
    setUser(null);
    setPermissionGrants([]);
    setTokenExpiresAt(null);
    setIsRefreshing(false);
    setIsClientReady(false);
    setError(null);

    if (typeof window !== 'undefined') {
      window.sessionStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, []);

  const applyAuthResponse = useCallback(
    (
      response: AuthResponseDto,
      username: string,
      nextPermissionGrants: PermissionGrant[],
      existingClaims?: AccessTokenClaims,
    ) => {
      const claims = existingClaims ?? decodeAccessToken(response.accessToken);
      const nextUser: AuthenticatedUser = {
        id: claims.sub,
        username,
        tokenVersion: claims.tokenVersion,
        sessionId: claims.sid,
      };

      setAccessToken(response.accessToken);
      setUser(nextUser);
      setPermissionGrants(nextPermissionGrants);
      setTokenExpiresAt(Date.now() + response.expiresIn * 1000);
      setError(null);
      persistSnapshot({
        user: nextUser,
        refreshToken: response.refreshToken,
        expiresIn: response.expiresIn,
      });
    },
    [persistSnapshot],
  );

  const restoreSession = useCallback(async () => {
    if (restoreStartedRef.current) {
      return;
    }

    restoreStartedRef.current = true;
    const snapshot = readSnapshot();
    if (!snapshot) {
      setIsRestoring(false);
      return;
    }

    try {
      setIsRefreshing(true);
      const response = await refreshRequest({
        sessionId: snapshot.user.sessionId,
        refreshToken: snapshot.refreshToken,
      });
      const claims = decodeAccessToken(response.accessToken);
      applyAuthResponse(response, snapshot.user.username, permissionGrants, claims);
    } catch {
      clearSession();
    } finally {
      setIsRefreshing(false);
      setIsRestoring(false);
    }
  }, [applyAuthResponse, clearSession, permissionGrants, readSnapshot]);

  useEffect(() => {
    void restoreSession();
  }, [restoreSession]);

  const refreshSession = useCallback(async (): Promise<AuthResponseDto | null> => {
    if (refreshPromiseRef.current) {
      return refreshPromiseRef.current;
    }

    const snapshot = readSnapshot();
    if (!snapshot) {
      return null;
    }

    const refreshPromise = (async () => {
      try {
        setIsRefreshing(true);
        const response = await refreshRequest({
          sessionId: snapshot.user.sessionId,
          refreshToken: snapshot.refreshToken,
        });
        const claims = decodeAccessToken(response.accessToken);
        applyAuthResponse(response, snapshot.user.username, permissionGrants, claims);
        return response;
      } catch {
        clearSession();
        return null;
      } finally {
        setIsRefreshing(false);
        refreshPromiseRef.current = null;
      }
    })();

    refreshPromiseRef.current = refreshPromise;
    return refreshPromise;
  }, [applyAuthResponse, clearSession, permissionGrants, readSnapshot]);

  const login = useCallback(
    async (credentials: LoginDto) => {
      setError(null);
      const response = await loginRequest(credentials);
      const claims = decodeAccessToken(response.accessToken);
      applyAuthResponse(response, credentials.username, [], claims);
    },
    [applyAuthResponse],
  );

  const logout = useCallback(async () => {
    const snapshot = readSnapshot();
    try {
      if (snapshot) {
        await logoutRequest();
      }
    } finally {
      clearSession();
    }
  }, [clearSession, readSnapshot]);

  const logoutAll = useCallback(async () => {
    try {
      await logoutAllRequest();
    } finally {
      clearSession();
    }
  }, [clearSession]);

  useEffect(() => {
    if (!accessToken || !tokenExpiresAt) {
      return undefined;
    }

    const refreshAt = Math.max(tokenExpiresAt - Date.now() - REFRESH_MARGIN_MS, 0);
    const timeoutId = window.setTimeout(() => {
      void refreshSession();
    }, refreshAt);

    return () => window.clearTimeout(timeoutId);
  }, [accessToken, refreshSession, tokenExpiresAt]);

  useLayoutEffect(
    () =>
      installAuthInterceptors({
        getAccessToken: () => accessToken,
        refreshSession,
        onRefreshFailure: clearSession,
      }),
    [accessToken, clearSession, refreshSession],
  );

  useEffect(() => {
    setIsClientReady(true);
  }, []);

  const hasPermission = useCallback(
    (action: PermissionAction, resourcePath: string) => {
      if (!user) {
        return false;
      }

      return evaluatePermissionGrants(permissionGrants, action, resourcePath);
    },
    [permissionGrants, user],
  );

  const value = useMemo<AuthContextValue>(
    () => ({
      accessToken,
      user,
      isAuthenticated: Boolean(accessToken && user),
      isRestoring,
      isRefreshing,
      isClientReady,
      error,
      login,
      logout,
      logoutAll,
      hasPermission,
    }),
    [accessToken, error, hasPermission, isClientReady, isRefreshing, isRestoring, login, logout, logoutAll, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
