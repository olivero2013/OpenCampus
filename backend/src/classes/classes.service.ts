import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import type { Request } from 'express';
import { PrimsaService } from '../prisma/primsa.service';
import { AuthorizationService } from 'src/authorization/authorization.service';
import { PermissionAction } from 'src/authorization/actions.enum';
import { AuthenticatedUser } from 'src/auth/types/authenticated-user';
import { Class, Prisma } from '../generated/prisma/client';
import { createClassDto } from './dto/createClass.dto';
import { updateClassDto } from './dto/updateClass.dto';

@Injectable({ scope: Scope.REQUEST })
export class ClassesService {

    constructor(
        private prisma: PrimsaService,
        private authorizationService: AuthorizationService,
        @Inject(REQUEST) private request: Request,
    ) {}

    async findAll() {
        const classes = await this.prisma.class.findMany();
        
        // Apply permission-based filtering if this is a filtered list endpoint
        if (this.request.filteredListEndpoint) {
            const user = this.request.user as AuthenticatedUser | undefined;
            if (user) {
                return this.authorizationService.filterItemsByPermission(
                    user.id,
                    PermissionAction.READ,
                    'class',
                    classes,
                );
            }
        }
        
        return classes;
    }

    async findOne(id: number) {
        return this.prisma.class.findUniqueOrThrow({ where: { id } });
    }

    async createOne(data: createClassDto) {
        return this.prisma.class.create({ data });
    }

    async deleteOne(id: number) {
        return this.prisma.class.delete({ where: { id } });
    }

    async updateOne(id: number, data: updateClassDto) {
        return this.prisma.class.update({
            where: { id },
            data
        });
    }

    async findBySchool(schoolId: number) {
        const classes = await this.prisma.class.findMany({ where: { schoolId } });
        
        // Apply permission-based filtering if this is a filtered list endpoint
        if (this.request.filteredListEndpoint) {
            const user = this.request.user as AuthenticatedUser | undefined;
            if (user) {
                return this.authorizationService.filterItemsByPermission(
                    user.id,
                    PermissionAction.READ,
                    'class',
                    classes,
                );
            }
        }
        
        return classes;
    }

    async createInSchool(schoolId: number, data: createClassDto) {
        return this.prisma.class.create({ 
            data: { ...data, schoolId }
        });
    }

    async getStudentsInClass(classId: number) {
        return this.prisma.studentClass.findMany({ 
            where: { classId }, include: {student: true}
        });
    }
}
