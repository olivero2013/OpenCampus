import { Injectable } from '@nestjs/common';
import { PrimsaService } from 'src/prisma/primsa.service';
import { createStudentContactDto } from './dto/createStudentContact.dto';

@Injectable()
export class StudentContactsService {
    constructor(private primsa: PrimsaService) {}

    findAll() {
        return this.primsa.contacts.findMany();
    }

    findOne(id: number) {
        return this.primsa.contacts.findUnique({where: {id}});
    }

    findContactByStudent(id: number) {
        return this.primsa.contacts.findMany({where: {studentAssignment: id}})
    }

    createContact(data: createStudentContactDto) {
        return this.primsa.contacts.create({data})
    }
}
