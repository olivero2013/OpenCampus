import { Injectable } from '@nestjs/common';
import { PrimsaService } from 'src/prisma/primsa.service';
import { PermissionAction } from './actions.enum';
import { ResourcePath } from './resource-path';

interface PermissionGrantRecord {
  action: string;
  resourcePath: string;
  allow: boolean;
}

@Injectable()
export class AuthorizationService {
  constructor(private readonly prisma: PrimsaService) {}

  async canPerform(
    userId: number,
    action: PermissionAction,
    resourcePath: string,
    _scope?: {
      districtId?: string;
      officeId?: string;
      schoolId?: string;
      classId?: string;
      studentId?: string;
    },
  ): Promise<boolean> {
    const normalizedPath = ResourcePath.normalize(resourcePath);
    const grants = await this.prisma.permissionGrant.findMany({ where: { userId } });
    return AuthorizationService.evaluateGrants(grants, action, normalizedPath);
  }

  static evaluateGrants(
    grants: PermissionGrantRecord[],
    action: PermissionAction,
    resourcePath: string,
  ): boolean {
    const matchingGrants = grants.filter((grant) =>
      AuthorizationService.grantMatches(grant, action, resourcePath),
    );

    if (matchingGrants.length === 0) {
      return false;
    }

    const bestDepth = Math.max(
      ...matchingGrants.map((grant) => ResourcePath.depth(grant.resourcePath)),
    );

    const bestGrants = matchingGrants.filter(
      (grant) => ResourcePath.depth(grant.resourcePath) === bestDepth,
    );

    return !bestGrants.some((grant) => grant.allow === false);
  }

  private static grantMatches(
    grant: PermissionGrantRecord,
    action: PermissionAction,
    resourcePath: string,
  ): boolean {
    const grantAction = grant.action.toUpperCase();
    const actionMatches =
      grantAction === PermissionAction.ALL || grantAction === '*' || grantAction === action;
    if (!actionMatches) {
      return false;
    }

    return ResourcePath.matches(grant.resourcePath, resourcePath);
  }
}
