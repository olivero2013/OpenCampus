import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { StudentContactsService } from './student-contacts.service';
import { CreateStudentContactDto } from './dto/createStudentContact.dto';
import { CreateStudentRelationDto } from './dto/createStudentRelation.dto';

@Controller('student-contacts')
export class StudentContactsController {
    constructor(private studentContactsService: StudentContactsService) {}

    @Get('')
    findAll() {
        return this.studentContactsService.findAll();
    }

    @Get('/contact')
    findAllContacts() {
        return this.studentContactsService.findAllContacts();
    }

    @Get('/contact/:id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.studentContactsService.findContactByContactId(id);
    }

    @Get('/student/:id')
    findContactsByStudent(@Param('id') id:number) {
        return this.studentContactsService.findContactByStudent(id);
    }

    @Post('/relationship')
    createRelationship(@Body() data: CreateStudentRelationDto) {
        return this.studentContactsService.createRelation(data);
    }
}
