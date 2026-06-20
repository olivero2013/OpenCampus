
import { Injectable } from '@nestjs/common';
import { PrimsaService } from 'src/prisma/primsa.service';
import type { User } from 'src/generated/prisma/client';

// This should be a real class/interface representing a user entity

@Injectable()
export class UsersService {
    constructor(private prisma:PrimsaService) {}

    async findOne(username: string): Promise<User | undefined> {
        const user = await this.prisma.user.findFirst({ where: { username } });
        return user ?? undefined;
    }
}
