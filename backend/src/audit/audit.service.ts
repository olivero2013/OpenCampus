import { Injectable, Logger } from '@nestjs/common';
import type { Prisma } from '../generated/prisma/client';
import { PrimsaService } from '../prisma/primsa.service';
import { AuditAction, AuditStatus } from './audit.enums';

@Injectable()
export class AuditService {
  private readonly logger = new Logger(AuditService.name);

  constructor(private readonly prisma: PrimsaService) {}

  async log(data: {
    userId?: number | null;
    action: AuditAction;
    entityType?: string | null;
    entityId?: string | null;
    route: string;
    method: string;
    ipAddress?: string | null;
    userAgent?: string | null;
    description?: string | null;
    status?: AuditStatus;
    resultCode?: number | null;
    metadata?: unknown;
  }): Promise<void> {
    try {
      const auditPayload: Prisma.AuditLogCreateInput = {
        userId: data.userId ?? null,
        action: data.action,
        status: data.status ?? AuditStatus.SUCCESS,
        resultCode: data.resultCode ?? null,
        entityType: data.entityType ?? null,
        entityId: data.entityId ?? null,
        route: data.route,
        method: data.method,
        ipAddress: data.ipAddress ?? null,
        userAgent: data.userAgent ?? null,
        description: data.description ?? null,
        ...(data.metadata !== undefined
          ? { metadata: data.metadata as Prisma.InputJsonValue }
          : {}),
      };

      await this.prisma.auditLog.create({
        data: auditPayload,
      });
    } catch (error) {
      this.logger.error('Unable to persist audit log', error as Error);
    }
  }

  async logDenied(data: {
    userId?: number | null;
    route: string;
    method: string;
    reason: string;
    action?: AuditAction;
    ipAddress?: string | null;
    userAgent?: string | null;
    resultCode?: number | null;
    metadata?: unknown;
  }): Promise<void> {
    await this.log({
      userId: data.userId ?? null,
      action: data.action ?? AuditAction.READ,
      route: data.route,
      method: data.method,
      ipAddress: data.ipAddress ?? null,
      userAgent: data.userAgent ?? null,
      description: data.reason,
      status: AuditStatus.DENIED,
      resultCode: data.resultCode ?? 403,
      metadata: data.metadata,
    });
  }

  async logFailure(data: {
    userId?: number | null;
    route: string;
    method: string;
    reason: string;
    action?: AuditAction;
    ipAddress?: string | null;
    userAgent?: string | null;
    resultCode?: number | null;
    metadata?: unknown;
  }): Promise<void> {
    await this.log({
      userId: data.userId ?? null,
      action: data.action ?? AuditAction.READ,
      route: data.route,
      method: data.method,
      ipAddress: data.ipAddress ?? null,
      userAgent: data.userAgent ?? null,
      description: data.reason,
      status: AuditStatus.FAILED,
      resultCode: data.resultCode ?? 401,
      metadata: data.metadata,
    });
  }
}
