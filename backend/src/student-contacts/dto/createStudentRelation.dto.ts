import {  IsBoolean,  IsInt,  IsOptional,  IsString  } from 'class-validator';

export class CreateStudentRelationDto {
  @IsInt()
  studentId!: number;

  @IsInt()
  contactId!: number;

  @IsString()
  relationship!: string;

  @IsOptional()
  @IsBoolean()
  emergencyContact?: boolean;

  @IsOptional()
  @IsBoolean()
  pickupAuthorized?: boolean;

  @IsOptional()
  @IsBoolean()
  primaryGuardian?: boolean;

  @IsOptional()
  @IsBoolean()
  receivesMailings?: boolean;

  @IsOptional()
  @IsBoolean()
  receivesReportCards?: boolean;

  @IsOptional()
  @IsBoolean()
  receivesAttendanceAlerts?: boolean;

  @IsOptional()
  @IsBoolean()
  receivesDisciplineAlerts?: boolean;

  @IsOptional()
  @IsBoolean()
  livesWithStudent?: boolean;

  @IsOptional()
  @IsBoolean()
  custodyRights?: boolean;

  @IsOptional()
  @IsBoolean()
  educationalRights?: boolean;

  @IsOptional()
  @IsInt()
  sortOrder?: number;
}