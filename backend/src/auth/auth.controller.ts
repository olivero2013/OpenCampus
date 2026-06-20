import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuditService } from 'src/audit/audit.service';
import { AuditAction } from 'src/audit/audit.enums';
import { LoginDto } from './dto/login.dto';
import { RefreshDto } from './dto/refresh.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { Public } from './auth.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthenticatedUser } from './types/authenticated-user';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly auditService: AuditService,
  ) {}

  @Public()
  @Post('login')
  @ApiBody({ type: LoginDto })
  async login(@Body() loginDto: LoginDto, @Request() req: any): Promise<AuthResponseDto> {
    const user = await this.authService.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      void this.auditService.logFailure({
        route: req.originalUrl ?? req.url,
        method: req.method,
        reason: 'FAILED_AUTH',
        action: AuditAction.READ,
        ipAddress: req.ip ?? req.connection?.remoteAddress ?? null,
        userAgent: req.headers?.['user-agent'] ?? null,
        resultCode: 401,
        metadata: {
          attemptedUsername: loginDto.username,
        },
      });
      throw new UnauthorizedException('Invalid credentials');
    }

    const ipAddress = req.ip ?? req.connection?.remoteAddress ?? undefined;
    const userAgent = req.headers?.['user-agent'] ?? undefined;

    return this.authService.login(user, ipAddress, userAgent);
  }

  @Public()
  @Post('refresh')
  @ApiBody({ type: RefreshDto })
  async refresh(@Body() refreshDto: RefreshDto): Promise<AuthResponseDto> {
    return this.authService.refresh(refreshDto.sessionId, refreshDto.refreshToken);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('logout')
  @HttpCode(204)
  async logout(@Request() req: { user: AuthenticatedUser }): Promise<void> {
    await this.authService.logout(req.user.sessionId);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('logout-all')
  @HttpCode(204)
  async logoutAll(@Request() req: { user: AuthenticatedUser }): Promise<void> {
    await this.authService.logoutAll(req.user.id);
  }
}
