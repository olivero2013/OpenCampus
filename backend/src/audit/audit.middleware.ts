import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import type { NextFunction, Request, Response } from 'express';

@Injectable()
export class AuditMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AuditMiddleware.name);

  use(req: Request, res: Response, next: NextFunction): void {
    const startedAt = Date.now();

    res.on('finish', () => {
      const durationMs = Date.now() - startedAt;
      const statusCode = res.statusCode;
      this.logger.debug(
        `${req.method} ${req.originalUrl ?? req.url} ${statusCode} ${durationMs}ms - ip=${req.ip} ua=${req.headers['user-agent'] ?? 'unknown'}`,
      );
    });

    next();
  }
}
