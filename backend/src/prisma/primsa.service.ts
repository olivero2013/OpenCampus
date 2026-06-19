import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrimsaService extends PrismaClient {
    constructor() {
        const dbUrl = process.env.DATABASE_URL;
        if (!dbUrl) {
            throw new Error('DATABASE_URL environment variable is not set. Set it or add dotenv to load a .env file.');
        }
        const adapter = new PrismaMariaDb(dbUrl);
        super({ adapter });
    }
}
