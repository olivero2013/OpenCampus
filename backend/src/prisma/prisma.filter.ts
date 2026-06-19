import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    switch (exception.code) {
      case 'P2025':
        return response
          .status(404)
          .json({ message: 'Record not found' });

      case 'P2002':
        return response
          .status(409)
          .json({ message: 'Unique constraint violation' });

      case 'P2003':
        return response
          .status(400)
          .json({
            message: 'Referenced record does not exist',
          });

      default:
        return response
          .status(500)
          .json({ message: 'Internal server error' });
    }
  }
}