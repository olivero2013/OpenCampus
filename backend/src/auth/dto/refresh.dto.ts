import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class RefreshDto {
  @ApiProperty({ description: 'The active session identifier' })
  @IsInt()
  sessionId: number;

  @ApiProperty({ description: 'Refresh token returned by the login or refresh endpoint' })
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
