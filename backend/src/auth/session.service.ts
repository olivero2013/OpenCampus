import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { PrimsaService } from 'src/prisma/primsa.service';
import type { UserSession } from 'src/generated/prisma/client';

const REFRESH_TOKEN_BYTES = 64;
const REFRESH_TOKEN_HASH_ROUNDS = 12;
const REFRESH_TOKEN_LIFETIME_MS = 12 * 60 * 60 * 1000; // 12 hours

@Injectable()
export class SessionService {
  constructor(private readonly prisma: PrimsaService) {}

  async createSession(userId: number, ipAddress?: string, userAgent?: string): Promise<{ session: UserSession; refreshToken: string }> {
    const refreshToken = this.createRefreshToken();
    const refreshTokenHash = await bcrypt.hash(refreshToken, REFRESH_TOKEN_HASH_ROUNDS);
    const expiresAt = new Date(Date.now() + REFRESH_TOKEN_LIFETIME_MS);

    const session = await this.prisma.userSession.create({
      data: {
        userId,
        refreshTokenHash,
        ipAddress,
        userAgent,
        expiresAt,
      },
    });

    return { session, refreshToken };
  }

  async validateSession(sessionId: number): Promise<UserSession> {
    const session = await this.findSessionById(sessionId);
    if (!session) {
      throw new UnauthorizedException('Session not found');
    }

    if (session.revokedAt) {
      throw new UnauthorizedException('Session revoked');
    }

    if (session.expiresAt <= new Date()) {
      throw new UnauthorizedException('Session expired');
    }

    return session;
  }

  async revokeSession(sessionId: number): Promise<void> {
    await this.prisma.userSession.updateMany({
      where: { id: sessionId, revokedAt: null },
      data: { revokedAt: new Date() },
    });
  }

  async revokeAllUserSessions(userId: number): Promise<void> {
    const now = new Date();

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: userId },
        data: { tokenVersion: { increment: 1 } },
      }),
      this.prisma.userSession.updateMany({
        where: { userId, revokedAt: null },
        data: { revokedAt: now },
      }),
    ]);
  }

  async rotateRefreshToken(sessionId: number, currentRefreshToken: string): Promise<{ session: UserSession; refreshToken: string }> {
    const session = await this.validateSession(sessionId);
    const matches = await bcrypt.compare(currentRefreshToken, session.refreshTokenHash);

    if (!matches) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const refreshToken = this.createRefreshToken();
    const refreshTokenHash = await bcrypt.hash(refreshToken, REFRESH_TOKEN_HASH_ROUNDS);
    const expiresAt = new Date(Date.now() + REFRESH_TOKEN_LIFETIME_MS);

    const updatedSession = await this.prisma.userSession.update({
      where: { id: session.id },
      data: {
        refreshTokenHash,
        expiresAt,
      },
    });

    return { session: updatedSession, refreshToken };
  }

  async findSessionById(sessionId: number): Promise<UserSession | null> {
    return this.prisma.userSession.findUnique({ where: { id: sessionId } });
  }

  private createRefreshToken(): string {
    return randomBytes(REFRESH_TOKEN_BYTES).toString('hex');
  }
}
