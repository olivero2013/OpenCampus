import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import type { Request } from 'express';
import { PrimsaService } from 'src/prisma/primsa.service';
import { AuthorizationService } from 'src/authorization/authorization.service';
import { PermissionAction } from 'src/authorization/actions.enum';
import { AuthenticatedUser } from 'src/auth/types/authenticated-user';
import { CreateStudentContactDto } from './dto/createStudentContact.dto';
import { CreateStudentRelationDto } from './dto/createStudentRelation.dto';

@Injectable({ scope: Scope.REQUEST })
export class StudentContactsService {
    constructor(
        private primsa: PrimsaService,
        private authorizationService: AuthorizationService,
        @Inject(REQUEST) private request: Request,
    ) {}

    async findAll() {
        const contacts = await this.primsa.studentContact.findMany({include:{contact:true}});
        
        // Apply permission-based filtering if this is a filtered list endpoint
        if (this.request.filteredListEndpoint) {
            const user = this.request.user as AuthenticatedUser | undefined;
            if (user) {
                return this.authorizationService.filterItemsByPermission(
                    user.id,
                    PermissionAction.READ,
                    'studentContact',
                    contacts,
                );
            }
        }
        
        return contacts;
    }

    findContactByContactId(id: number) {
        return this.primsa.contact.findUnique({where: {id}, include: {students: true}});
    }

    async findAllContacts() {
        const contacts = await this.primsa.contact.findMany({include:{students:true}});
        
        // Apply permission-based filtering if this is a filtered list endpoint
        if (this.request.filteredListEndpoint) {
            const user = this.request.user as AuthenticatedUser | undefined;
            if (user) {
                return this.authorizationService.filterItemsByPermission(
                    user.id,
                    PermissionAction.READ,
                    'contact',
                    contacts,
                );
            }
        }
        
        return contacts;
    }

    async findContactByStudent(id: number) {
        const contacts = await this.primsa.contact.findMany({where: {students: {some: {studentId: id}}},include: {students: {where: {studentId: id}}}});
        
        // Apply permission-based filtering if this is a filtered list endpoint
        if (this.request.filteredListEndpoint) {
            const user = this.request.user as AuthenticatedUser | undefined;
            if (user) {
                return this.authorizationService.filterItemsByPermission(
                    user.id,
                    PermissionAction.READ,
                    'contact',
                    contacts,
                );
            }
        }
        
        return contacts;
    }
    
    createContact(data: CreateStudentContactDto) {
        return this.primsa.contact.create({data});
    }

    createRelation(data: CreateStudentRelationDto) {
        return this.primsa.studentContact.create({data});
    }
}
