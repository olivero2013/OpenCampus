import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { StudentContactsService } from './student-contacts.service';
import { CreateStudentContactDto } from './dto/createStudentContact.dto';
import { CreateStudentRelationDto } from './dto/createStudentRelation.dto';
import { RequirePermission } from 'src/authorization/authorization.decorator';
import { PermissionAction } from 'src/authorization/actions.enum';
import { ResourcePath } from 'src/authorization/resource-path';

@Controller('student-contacts')
export class StudentContactsController {
    constructor(private studentContactsService: StudentContactsService) {}

    @RequirePermission(PermissionAction.READ, 'student-contacts')
    @Get('')
    @RequirePermission(PermissionAction.READ, (req) => `${ResourcePath.build({ type: 'students', id: String(req.params.studentId) })}/contacts`)
    @Get('')
    findContactsByStudent(@Param('studentId', ParseIntPipe) studentId: number) {
        return this.studentContactsService.findContactByStudent(studentId);
    }

    @RequirePermission(PermissionAction.READ, (req) => ResourcePath.build({ type: 'contacts', id: String(req.params.contactId) }))
    @Get(':contactId')
    findOne(@Param('contactId', ParseIntPipe) id: number) {
        return this.studentContactsService.findContactByContactId(id);
    }

    @RequirePermission(PermissionAction.CREATE, (req) => `${ResourcePath.build({ type: 'students', id: String(req.params.studentId) })}/contacts`)
    @Post('')
    createContact(@Param('studentId', ParseIntPipe) studentId: number, @Body() data: CreateStudentContactDto) {
        // ensure created contact is scoped to the student where appropriate
        return this.studentContactsService.createContact({ ...data } as CreateStudentContactDto);
    }

    @RequirePermission(PermissionAction.CREATE, (req) => `${ResourcePath.build({ type: 'students', id: String(req.params.studentId) })}/contacts`)
    @Post('relationship')
    createRelationship(@Param('studentId', ParseIntPipe) studentId: number, @Body() data: CreateStudentRelationDto) {
        // relation creator should include studentId in payload or controller can attach it
        return this.studentContactsService.createRelation({ ...data });
    }
}
