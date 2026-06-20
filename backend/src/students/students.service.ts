import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import type { Request } from 'express';
import { PrimsaService } from '../prisma/primsa.service';
import { AuthorizationService } from 'src/authorization/authorization.service';
import { PermissionAction } from 'src/authorization/actions.enum';
import { AuthenticatedUser } from 'src/auth/types/authenticated-user';
import { Student, Prisma } from '../generated/prisma/client';
import { createStudentDto } from './dto/createStudent.dto';
import { updateStudentDto } from './dto/updateStudent.dto';

@Injectable({ scope: Scope.REQUEST })
export class StudentsService {

    constructor(
        private prisma: PrimsaService,
        private authorizationService: AuthorizationService,
        @Inject(REQUEST) private request: Request,
    ) {}

    async findAll() {
        const students = await this.prisma.student.findMany();
        
        // Apply permission-based filtering if this is a filtered list endpoint
        if (this.request.filteredListEndpoint) {
            const user = this.request.user as AuthenticatedUser | undefined;
            if (user) {
                return this.authorizationService.filterItemsByPermission(
                    user.id,
                    PermissionAction.READ,
                    'students',
                    students,
                );
            }
        }
        
        return students;
    }
    
    async findOne(id: number) {
        return this.prisma.student.findUniqueOrThrow({where:{id}})
    }
    
    async createOne(data: createStudentDto) {
        return this.prisma.student.create({data});
    }
    
    async deleteOne(id: number) {
        return this.prisma.student.delete({where: {id}});
    }
    
    async changeOne(id: number, data: updateStudentDto) {
        return this.prisma.student.update({
            where: { id },
            data
        })
    }

    async findBySchool(schoolId: number) {
        const students = await this.prisma.student.findMany({ where: { schoolId } });
        
        // Apply permission-based filtering if this is a filtered list endpoint
        if (this.request.filteredListEndpoint) {
            const user = this.request.user as AuthenticatedUser | undefined;
            if (user) {
                return this.authorizationService.filterItemsByPermission(
                    user.id,
                    PermissionAction.READ,
                    'students',
                    students,
                );
            }
        }
        
        return students;
    }

    async findByClass(classId: number) {
        const students = await this.prisma.student.findMany({ 
            where: { 
                classes: {
                    some: { classId }
                }
            },
            include: { classes: true }
        });
        
        // Apply permission-based filtering if this is a filtered list endpoint
        if (this.request.filteredListEndpoint) {
            const user = this.request.user as AuthenticatedUser | undefined;
            if (user) {
                return this.authorizationService.filterItemsByPermission(
                    user.id,
                    PermissionAction.READ,
                    'students',
                    students,
                );
            }
        }
        
        return students;
    }

    async createInSchool(schoolId: number, data: createStudentDto) {
        return this.prisma.student.create({ data: { ...data, schoolId } });
    }

    async addStudentToClass(studentId: number, classId: number) {
        return this.prisma.studentClass.create({
            data: { studentId, classId }
        });
    }

    async removeStudentFromClass(studentId: number, classId: number) {
        return this.prisma.studentClass.deleteMany({
            where: { studentId, classId }
        });
    }

    async getClassesForStudent(studentId: number) {
        return this.prisma.studentClass.findMany({
            where: { studentId },
            include: { class: true }
        });
    }
}
