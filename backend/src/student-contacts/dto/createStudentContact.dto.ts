import {  IsString,  IsOptional,  IsEmail,  Length  } from 'class-validator';

export class CreateStudentContactDto {
  @IsString()
  firstname!: string;

  @IsString()
  lastname!: string;

  @IsOptional()
  @IsString()
  preferredname?: string;

  @IsOptional()
  @IsString()
  @Length(7, 20)
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  @Length(7, 20)
  mobileNumber?: string;

  @IsOptional()
  @IsString()
  @Length(7, 20)
  workPhone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  address1?: string;

  @IsOptional()
  @IsString()
  address2?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  zipCode?: string;

  @IsOptional()
  @IsString()
  employer?: string;

  @IsOptional()
  @IsString()
  occupation?: string;
}