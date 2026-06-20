import {
  IsString,
  IsInt,
  IsBoolean,
  IsDateString,
  IsOptional,
  IsDate,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class updateStudentDto {
  @IsString()
  firstname!: string;

  @IsString()
  lastname!: string;

  @IsOptional()
  @IsString()
  preferredname?: string;

  @IsInt()
  studentID!: number;

  @Type(() => Date)
  @IsDate()
  dateOfBirth!: Date;

  @IsString()
  gender!: string;

  @IsBoolean()
  enrollment!: boolean;

  @IsOptional()
  @IsNumber()
  schoolId?: number;
}