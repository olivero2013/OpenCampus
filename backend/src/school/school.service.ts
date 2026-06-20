import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import type { Request } from 'express';
import { PrimsaService } from 'src/prisma/primsa.service';
import { AuthorizationService } from 'src/authorization/authorization.service';
import { PermissionAction } from 'src/authorization/actions.enum';
import { AuthenticatedUser } from 'src/auth/types/authenticated-user';
import { createSchoolDto } from './dto/createSchool.dto';
import { updateSchoolDto } from './dto/updateSchool.dto';

@Injectable({ scope: Scope.REQUEST })
export class SchoolService {
    constructor(
        private prisma: PrimsaService,
        private authorizationService: AuthorizationService,
        @Inject(REQUEST) private request: Request,
    ) {}

    async findAll() {
        const schools = await this.prisma.school.findMany();
        
        // Apply permission-based filtering if this is a filtered list endpoint
        if (this.request.filteredListEndpoint) {
            const user = this.request.user as AuthenticatedUser | undefined;
            if (user) {
                return this.authorizationService.filterItemsByPermission(
                    user.id,
                    PermissionAction.READ,
                    'school',
                    schools,
                );
            }
        }
        
        return schools;
    }

    async findOne(id:number) {
        return this.prisma.school.findUniqueOrThrow({where:{id}})
    }

    async findAllStudentsInSchool(schoolID) {
        return this.prisma.student.findMany({where: {schoolId:schoolID}});
    }

    async createSchool(data: createSchoolDto) {
        return this.prisma.school.create({data});
    }

    async changeSchool(id: number, data: updateSchoolDto) {
        return this.prisma.school.update({where: {id}, data})
    }
}
