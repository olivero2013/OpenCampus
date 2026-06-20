import { SetMetadata } from '@nestjs/common';
import { Request } from 'express';
import { PermissionAction } from './actions.enum';

export type ResourcePathFactory = (request: Request) => string;

export interface RequiredPermission {
  action: PermissionAction;
  resourcePath: string | ResourcePathFactory;
}

export const REQUIRED_PERMISSION_KEY = 'requiredPermission';

export const RequirePermission = (
  action: PermissionAction,
  resourcePath: string | ResourcePathFactory,
) => SetMetadata(REQUIRED_PERMISSION_KEY, {
  action,
  resourcePath,
} as RequiredPermission);
