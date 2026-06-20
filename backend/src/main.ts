import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaExceptionFilter } from './prisma/prisma.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AuditInterceptor } from './audit/audit.interceptor';
import { AuditMiddleware } from './audit/audit.middleware';
import { AuditExceptionFilter } from './audit/audit-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const auditInterceptor = app.get(AuditInterceptor);
  const auditMiddleware = new AuditMiddleware();
  const auditExceptionFilter = app.get(AuditExceptionFilter);

  const config = new DocumentBuilder()
    .setTitle('OpenCampus SIS API')
    .setDescription('Student Information System API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  app.useGlobalInterceptors(auditInterceptor);
  app.use((req, res, next) => auditMiddleware.use(req, res, next));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new PrismaExceptionFilter(), auditExceptionFilter);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
