import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UsersModule } from '../users/users.module';
import { AuthorizationService } from './authorization.service';
import { AuthorizationGuard } from './authorization.guard';

@Module({
  imports: [UsersModule],
  providers: [
    AuthorizationService,
    { provide: APP_GUARD, useClass: AuthorizationGuard },
  ],
  exports: [AuthorizationService],
})
export class AuthorizationModule {}
