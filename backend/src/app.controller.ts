import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/auth.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private AuthService: AuthService) {}

  @Public()
  @Post('/auth/login')
  async login(@Request() req){
    return this.AuthService.login(req.user);
  }

  @Post('auth/logout')
  async logout(@Request() req) {
    return req.logout();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
