import { Injectable } from '@nestjs/common';
import { PrimsaService } from 'src/prisma/primsa.service';
import { CreateStudentContactDto } from './dto/createStudentContact.dto';
import { CreateStudentRelationDto } from './dto/createStudentRelation.dto';

@Injectable()
export class StudentContactsService {
    constructor(private primsa: PrimsaService) {}

    findAll() {
        return this.primsa.studentContact.findMany({include:{contact:true}});
    }

    findContactByContactId(id: number) {
        return this.primsa.contact.findUnique({where: {id}, include: {students: true}});
    }

    findAllContacts() {
        return this.primsa.contact.findMany({include:{students:true}});
    }

    findContactByStudent(id: number) {
        return this.primsa.contact.findMany({where: {students: {some: {studentId: id}}},include: {students: {where: {studentId: id}}}});
    }
    
    createContact(data: CreateStudentContactDto) {
        return this.primsa.contact.create({data});
    }

    createRelation(data: CreateStudentRelationDto) {
        return this.primsa.studentContact.create({data});
    }
}
