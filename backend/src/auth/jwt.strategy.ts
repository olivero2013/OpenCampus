
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { UsersService } from '../users/users.service';
import { SessionService } from './session.service';
import type { JwtPayload } from './types/jwt-payload';
import type { AuthenticatedUser } from './types/authenticated-user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UsersService,
    private readonly sessionService: SessionService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<AuthenticatedUser> {
    const user = await this.usersService.findById(payload.sub);
    if (!user || !user.enabled) {
      throw new UnauthorizedException('User is disabled or does not exist');
    }

    if (payload.tokenVersion !== user.tokenVersion) {
      throw new UnauthorizedException('Token version mismatch');
    }

    const session = await this.sessionService.validateSession(payload.sid);
    if (session.userId !== user.id) {
      throw new UnauthorizedException('Session does not belong to user');
    }

    return {
      id: user.id,
      username: user.username,
      tokenVersion: user.tokenVersion,
      sessionId: session.id,
    };
  }
}
