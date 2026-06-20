import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuditService } from './audit.service';
import { AuditAction } from './audit.enums';

@Catch(HttpException)
export class AuditExceptionFilter implements ExceptionFilter {
  constructor(private readonly auditService: AuditService) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>() as Request & { auditFailureLogged?: boolean };
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();
    if (status !== 401 && status !== 403) {
      return response.status(status).send(exception.getResponse());
    }

    if (request.auditFailureLogged) {
      return response.status(status).send(exception.getResponse());
    }

    const errorMessage = exception.message || exception.getResponse();
    const auditAction = this.getAuditAction(request.method);

    if (status === 401) {
      void this.auditService.logFailure({
        route: request.originalUrl ?? request.url,
        method: request.method,
        reason: 'FAILED_AUTH',
        action: auditAction,
        ipAddress: (request.ip || request.socket?.remoteAddress) ?? null,
        userAgent: request.headers['user-agent']?.toString() ?? null,
        resultCode: 401,
        metadata: {
          error: errorMessage,
        },
      });
    } else {
      void this.auditService.logDenied({
        route: request.originalUrl ?? request.url,
        method: request.method,
        reason: 'INSUFFICIENT_PERMISSIONS',
        action: auditAction,
        ipAddress: (request.ip || request.socket?.remoteAddress) ?? null,
        userAgent: request.headers['user-agent']?.toString() ?? null,
        resultCode: 403,
        metadata: {
          error: errorMessage,
        },
      });
    }

    return response.status(status).send(exception.getResponse());
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
