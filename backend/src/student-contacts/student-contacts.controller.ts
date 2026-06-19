import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentContactsService } from './student-contacts.service';
import { createStudentContactDto } from './dto/createStudentContact.dto';

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

    @Post()
    createContact(@Body() data: createStudentContactDto) {
        return this.studentContactsService.createContact(data);
    }
}
