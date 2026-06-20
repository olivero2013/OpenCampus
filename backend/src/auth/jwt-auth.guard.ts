import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuditService } from 'src/audit/audit.service';
import { AuditAction } from 'src/audit/audit.enums';
import { IS_PUBLIC_KEY } from './auth.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(
        private reflector: Reflector,
        private readonly auditService: AuditService,
    ) {
        super();
    }

    canActivate(context: ExecutionContext) {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ])
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }

    handleRequest<TUser = any>(err: any, user: TUser, info: any, context: ExecutionContext, status?: any): TUser {
        const request = context.switchToHttp().getRequest<Request>() as Request & { auditFailureLogged?: boolean };
        if (err || !user) {
            request.auditFailureLogged = true;
            void this.auditService.logFailure({
                route: request.originalUrl ?? request.url,
                method: request.method,
                reason: 'FAILED_AUTH',
                action: this.getAuditAction(request.method),
                ipAddress: (request.ip || request.socket?.remoteAddress) ?? null,
                userAgent: request.headers['user-agent']?.toString() ?? null,
                resultCode: 401,
                metadata: {
                    message: typeof info === 'string' ? info : info?.message,
                },
            });
            throw err || new UnauthorizedException();
        }

        return user;
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
