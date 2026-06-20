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

  /**
   * Get all resource IDs that a user can access for a given action and resource type.
   * For example, getting all school IDs the user can READ.
   */
  async getAccessibleResourceIds(
    userId: number,
    action: PermissionAction,
    resourceType: string,
  ): Promise<number[]> {
    const grants = await this.prisma.permissionGrant.findMany({ where: { userId } });
    const accessibleIds = new Set<number>();

    for (const grant of grants) {
      // Check if grant matches the action
      const grantAction = grant.action.toUpperCase();
      const actionMatches =
        grantAction === PermissionAction.ALL || grantAction === '*' || grantAction === action;
      
      if (!actionMatches) {
        continue;
      }

      // Parse the grant resource path to extract resource type and ID
      const segments = ResourcePath.split(grant.resourcePath);
      
      for (const segment of segments) {
        const [segmentType, segmentId] = segment.split(':');
        
        // If this grant grants access to the resource type or to a parent
        if (segmentType === resourceType && segmentId && segmentId !== '*') {
          const id = parseInt(segmentId, 10);
          if (!isNaN(id)) {
            if (grant.allow) {
              accessibleIds.add(id);
            } else {
              accessibleIds.delete(id);
            }
          }
        }
        // If it's a wildcard grant for the resource type
        else if (segmentType === resourceType && segmentId === '*') {
          if (grant.allow) {
            // Wildcard means all - we need special handling
            return []; // Empty array signals "all" in context of filtering
          }
        }
      }
    }

    return Array.from(accessibleIds);
  }

  /**
   * Check if a user can access a specific resource by ID.
   */
  async canAccessResource(
    userId: number,
    action: PermissionAction,
    resourceType: string,
    resourceId: number,
  ): Promise<boolean> {
    const resourcePath = ResourcePath.build({ type: resourceType, id: resourceId });
    return this.canPerform(userId, action, resourcePath);
  }

  /**
   * Filter an array of items to only include those the user can access.
   * Items must have an `id` property.
   */
  async filterItemsByPermission<T extends { id: number }>(
    userId: number,
    action: PermissionAction,
    resourceType: string,
    items: T[],
  ): Promise<T[]> {
    const accessibleIds = await this.getAccessibleResourceIds(userId, action, resourceType);
    
    // If empty array with accessible grants for wildcard, user can access all
    const grants = await this.prisma.permissionGrant.findMany({ where: { userId } });
    const hasWildcardAccess = grants.some((g) => {
      const grantAction = g.action.toUpperCase();
      const actionMatches = grantAction === PermissionAction.ALL || grantAction === '*' || grantAction === action;
      if (!actionMatches) return false;
      
      const segments = ResourcePath.split(g.resourcePath);
      return segments.some((seg) => {
        const [segType, segId] = seg.split(':');
        return segType === resourceType && segId === '*' && g.allow;
      });
    });

    if (hasWildcardAccess) {
      // User has access to all resources of this type
      return items;
    }

    return items.filter((item) => accessibleIds.includes(item.id));
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
