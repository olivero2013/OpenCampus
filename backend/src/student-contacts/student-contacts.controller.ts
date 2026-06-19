import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.studentContactsService.findOne(id);
    }

    @Get('/student/:id')
    findContactsByStudent(@Param('id') id:number) {
        return this.studentContactsService.findContactByStudent(id);
    }

    @Post('/contact')
    createContact(@Body() data: CreateStudentContactDto) {
        return this.studentContactsService.createContact(data);
    }

    @Post('/realationship')
    createRelationship(@Body() data: CreateStudentRelationDto) {
        return this.studentContactsService.createRelation(data);
    }
}
