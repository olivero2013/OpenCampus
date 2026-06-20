import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrimsaService } from 'src/prisma/primsa.service';

@Module({
  imports: [],
  providers: [UsersService, PrimsaService],
  exports: [UsersService]
})
export class UsersModule {}
