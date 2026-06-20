import { IsString, IsOptional, IsNumber } from 'class-validator';

export class createClassDto {
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  gradeLevel?: string;

  @IsNumber()
  schoolId!: number;
}
