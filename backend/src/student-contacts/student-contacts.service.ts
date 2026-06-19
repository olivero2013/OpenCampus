import { Injectable } from '@nestjs/common';
import { PrimsaService } from 'src/prisma/primsa.service';
import { createStudentContactDto } from './dto/createStudentContact.dto';

@Injectable()
export class StudentContactsService {
    constructor(private primsa: PrimsaService) {}

    findAll() {
        return this.primsa.studentContact.findMany({include:{contact:true}});
    }

    findOne(id: number) {
        return this.primsa.studentContact.findUnique({where: {id}, include: {contact: true}});
    }

    findContactByStudent(id: number) {
        return this.primsa.studentContact.findMany({where: {studentId: id}, include: {contact: true}})
    }

    createContact(data: createStudentContactDto) {
        return this.primsa.contact.create({data})
    }
}
