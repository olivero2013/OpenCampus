import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { AuthenticatedUser } from 'src/auth/types/authenticated-user';
import { AuditService } from 'src/audit/audit.service';
import { AuditAction } from 'src/audit/audit.enums';
import {
  REQUIRED_PERMISSION_KEY,
  RequiredPermission,
} from './authorization.decorator';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly authorizationService: AuthorizationService,
    private readonly auditService: AuditService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermission = this.reflector.getAllAndOverride<RequiredPermission>(
      REQUIRED_PERMISSION_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredPermission) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>() as Request & { auditFailureLogged?: boolean };
    const user = request.user as AuthenticatedUser | undefined;
    if (!user) {
      request.auditFailureLogged = true;
      const action = this.getAuditAction(request.method);
      void this.auditService.logDenied({
        route: request.originalUrl ?? request.url,
        method: request.method,
        reason: 'INSUFFICIENT_PERMISSIONS',
        action,
        ipAddress: (request.ip || request.socket?.remoteAddress) ?? null,
        userAgent: request.headers['user-agent']?.toString() ?? null,
        metadata: {
          requiredPermission: requiredPermission.action,
          resourcePath: this.resolveResourcePath(requiredPermission, request),
        },
      });
      throw new ForbiddenException('Authorization requires an authenticated user.');
    }

    const resourcePath = this.resolveResourcePath(requiredPermission, request);
    const allowed = await this.authorizationService.canPerform(
      user.id,
      requiredPermission.action,
      resourcePath,
    );

    if (!allowed) {
      request.auditFailureLogged = true;
      const action = this.getAuditAction(request.method);
      void this.auditService.logDenied({
        userId: user.id,
        route: request.originalUrl ?? request.url,
        method: request.method,
        reason: 'INSUFFICIENT_PERMISSIONS',
        action,
        ipAddress: (request.ip || request.socket?.remoteAddress) ?? null,
        userAgent: request.headers['user-agent']?.toString() ?? null,
        resultCode: 403,
        metadata: {
          requiredPermission: requiredPermission.action,
          resourcePath,
        },
      });
      throw new ForbiddenException('Permission denied.');
    }

    return true;
  }

  private resolveResourcePath(
    permission: RequiredPermission,
    request: Request,
  ): string {
    if (typeof permission.resourcePath === 'function') {
      return permission.resourcePath(request);
    }
    return permission.resourcePath;
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
}
