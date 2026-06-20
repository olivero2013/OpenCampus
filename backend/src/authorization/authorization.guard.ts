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
import { ResourcePath } from './resource-path';

declare global {
  namespace Express {
    interface Request {
      filteredListEndpoint?: boolean;
      auditFailureLogged?: boolean;
    }
  }
}

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

    // Build structured scope from known route params so permission checks can use contextual scope
    const scope = {
      districtId: (request.params as any).districtId,
      officeId: (request.params as any).officeId ?? (request.params as any).regionalOfficeId,
      schoolId: (request.params as any).schoolId,
      classId: (request.params as any).classId,
      studentId: (request.params as any).studentId,
    };

    const allowed = await this.authorizationService.canPerform(
      user.id,
      requiredPermission.action,
      resourcePath,
      scope,
    );

    if (!allowed) {
      // Check if this is a list endpoint (no specific resource ID)
      // List endpoints should be allowed to pass through, with results filtered by permission
      if (this.isListEndpoint(resourcePath, request.method)) {
        // Mark this as a filtered list endpoint so services know to filter results
        request.filteredListEndpoint = true;
        return true;
      }

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

  /**
   * Determine if the resource path represents a list endpoint (no specific resource ID).
   * Examples:
   *   - "school" = list (no ID)
   *   - "school:1" = single resource (has ID)
   *   - "school:1/students" = related list (has ID) - not a list endpoint
   */
  private isListEndpoint(resourcePath: string, method: string): boolean {
    // Only GET requests should be filtered
    if (method.toUpperCase() !== 'GET') {
      return false;
    }

    const segments = ResourcePath.split(resourcePath);
    if (segments.length === 0) {
      return false;
    }

    // Check if the first segment (primary resource) has no specific ID
    const firstSegment = segments[0];
    const [, firstSegmentId] = firstSegment.split(':');
    
    // If first segment has no ID, this is a list endpoint
    return !firstSegmentId;
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
