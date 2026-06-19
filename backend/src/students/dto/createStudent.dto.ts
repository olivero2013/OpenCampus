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

export class createStudentDto {
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

  @IsNumber()
  schoolId!: number;
}