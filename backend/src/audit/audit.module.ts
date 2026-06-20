import { Module } from '@nestjs/common';
import { AuditService } from './audit.service';
import { AuditInterceptor } from './audit.interceptor';
import { AuditMiddleware } from './audit.middleware';
import { AuditExceptionFilter } from './audit-exception.filter';
import { PrimsaService } from '../prisma/primsa.service';

@Module({
  providers: [AuditService, AuditInterceptor, AuditMiddleware, AuditExceptionFilter, PrimsaService],
  exports: [AuditService, AuditInterceptor, AuditMiddleware, AuditExceptionFilter],
})
export class AuditModule {}
