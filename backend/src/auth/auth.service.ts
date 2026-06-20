
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { SessionService } from './session.service';
import type { AuthResponseDto } from './dto/auth-response.dto';
import type { JwtPayload } from './types/jwt-payload';
import type { User } from 'src/generated/prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly sessionService: SessionService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOne(username);
    if (!user || !user.enabled) {
      return null;
    }

    const passwordMatches = await bcrypt.compare(pass, user.passwordHash);
    return passwordMatches ? user : null;
  }

  async login(user: User, ipAddress?: string, userAgent?: string): Promise<AuthResponseDto> {
    const { session, refreshToken } = await this.sessionService.createSession(
      user.id,
      ipAddress,
      userAgent,
    );

    const accessToken = this.createAccessToken(user.id, session.id, user.tokenVersion);

    return {
      accessToken,
      refreshToken,
      expiresIn: 600,
    };
  }

  async refresh(sessionId: number, refreshToken: string): Promise<AuthResponseDto> {
    const { session, refreshToken: newRefreshToken } =
      await this.sessionService.rotateRefreshToken(sessionId, refreshToken);

    const user = await this.usersService.findById(session.userId);
    if (!user || !user.enabled) {
      throw new UnauthorizedException('User not found or disabled');
    }

    return {
      accessToken: this.createAccessToken(user.id, session.id, user.tokenVersion),
      refreshToken: newRefreshToken,
      expiresIn: 600,
    };
  }

  async logout(sessionId: number): Promise<void> {
    await this.sessionService.revokeSession(sessionId);
  }

  async logoutAll(userId: number): Promise<void> {
    await this.sessionService.revokeAllUserSessions(userId);
  }

  private createAccessToken(userId: number, sessionId: number, tokenVersion: number): string {
    const payload: JwtPayload = {
      sub: userId,
      sid: sessionId,
      tokenVersion,
    };

    return this.jwtService.sign(payload);
  }
}
