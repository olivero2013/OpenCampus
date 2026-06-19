import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client';
export declare class PrismaExceptionFilter implements ExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): any;
}
