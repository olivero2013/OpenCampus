import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({ description: 'JWT access token' })
  accessToken: string;

  @ApiProperty({ description: 'Session-bound refresh token' })
  refreshToken: string;

  @ApiProperty({ description: 'Access token lifetime in seconds', example: 600 })
  expiresIn: number;
}
