import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Request, Response } from 'express';
import { AuditService } from './audit.service';
import { AuditAction, AuditStatus } from './audit.enums';

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  constructor(private readonly auditService: AuditService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const user = (request as any).user as { id?: number } | undefined;

    const route = request.route?.path ?? request.originalUrl ?? request.url;
    const auditAction = this.getAuditAction(request.method);
    const entityType = this.extractEntityType(route);
    const entityId = this.extractEntityId(request.params);
    const metadata = {
      params: Object.keys(request.params || {}),
      query: this.extractQueryKeys(request.query),
      bodyKeys: this.extractBodyKeys(request.body),
      statusCode: response.statusCode,
    };
    const requestAny = request as Request & { auditFailureLogged?: boolean };

    return next.handle().pipe(
      tap({
        next: () => {
          void this.auditService
            .log({
              userId: user?.id ?? null,
              action: auditAction,
              entityType,
              entityId,
              route,
              method: request.method,
              ipAddress: this.getIpAddress(request),
              userAgent: request.headers['user-agent']?.toString() ?? null,
              description: `HTTP ${request.method} ${route}`,
              status: AuditStatus.SUCCESS,
              resultCode: response.statusCode,
              metadata,
            })
            .catch(() => undefined);
        },
        error: () => {
          if (requestAny.auditFailureLogged) {
            return;
          }
          void this.auditService
            .log({
              userId: user?.id ?? null,
              action: auditAction,
              entityType,
              entityId,
              route,
              method: request.method,
              ipAddress: this.getIpAddress(request),
              userAgent: request.headers['user-agent']?.toString() ?? null,
              description: `HTTP ${request.method} ${route} failed`,
              status: AuditStatus.FAILED,
              resultCode: response.statusCode || 500,
              metadata: { ...metadata, error: true },
            })
            .catch(() => undefined);
        },
      }),
    );
  }

  private getAuditAction(method: string): AuditAction {
    switch (method.toUpperCase()) {
      case 'POST':
        return AuditAction.CREATE;
      case 'PUT':
      case 'PATCH':
        return AuditAction.UPDATE;
      case 'DELETE':
        return AuditAction.DELETE;
      case 'GET':
      case 'HEAD':
      case 'OPTIONS':
      default:
        return AuditAction.READ;
    }
  }

  private extractEntityType(route: string | undefined): string | null {
    if (!route) return null;
    const segments = route.split('/').filter(segment => segment && !segment.startsWith(':'));
    return segments.length > 0 ? segments[0].toUpperCase() : null;
  }

  private extractEntityId(params: Record<string, unknown> | undefined): string | null {
    if (!params) return null;
    const idKeys = ['id', 'studentId', 'schoolId', 'contactId', 'userId', 'sessionId'];
    for (const key of idKeys) {
      const value = params[key];
      if (value !== undefined && value !== null) {
        return String(value);
      }
    }
    return null;
  }

  private extractBodyKeys(body: unknown): string[] {
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return [];
    }
    return Object.keys(body as Record<string, unknown>);
  }

  private extractQueryKeys(query: unknown): string[] {
    if (!query || typeof query !== 'object' || Array.isArray(query)) {
      return [];
    }
    return Object.keys(query as Record<string, unknown>);
  }

  private getIpAddress(request: Request): string | null {
    const forwarded = request.headers['x-forwarded-for'];
    if (typeof forwarded === 'string' && forwarded.length) {
      return forwarded.split(',')[0].trim();
    }
    if (Array.isArray(forwarded) && forwarded.length) {
      return String(forwarded[0]).split(',')[0].trim();
    }
    return request.ip || request.socket?.remoteAddress || null;
  }
}
