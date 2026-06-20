import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { AuthenticatedUser } from 'src/auth/types/authenticated-user';
import {
  REQUIRED_PERMISSION_KEY,
  RequiredPermission,
  ResourcePathFactory,
} from './authorization.decorator';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly authorizationService: AuthorizationService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermission = this.reflector.getAllAndOverride<RequiredPermission>(
      REQUIRED_PERMISSION_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredPermission) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user as AuthenticatedUser | undefined;
    if (!user) {
      throw new ForbiddenException('Authorization requires an authenticated user.');
    }

    const resourcePath = this.resolveResourcePath(requiredPermission, request);
    const allowed = await this.authorizationService.canPerform(
      user.id,
      requiredPermission.action,
      resourcePath,
    );

    if (!allowed) {
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
}
