
import { Injectable } from '@nestjs/common';
import { PrimsaService } from 'src/prisma/primsa.service';
import type { User } from 'src/generated/prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrimsaService) {}

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.prisma.user.findFirst({ where: { username } });
    return user ?? undefined;
  }

  async findById(id: number): Promise<User | undefined> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ?? undefined;
  }
}
