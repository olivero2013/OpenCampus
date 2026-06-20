import { IsString, IsOptional, IsNumber } from 'class-validator';

export class updateClassDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  gradeLevel?: string;
}
