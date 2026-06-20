import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private AuthService: AuthService) {}


  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login(@Request() req){
    return this.AuthService.login(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/logout')
  async logout(@Request() req) {
    return req.logout();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
