import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { createStudentDto } from './dto/createStudent.dto';
import { updateStudentDto } from './dto/updateStudent.dto';
import { RequirePermission } from 'src/authorization/authorization.decorator';
import { PermissionAction } from 'src/authorization/actions.enum';
import { ResourcePath } from 'src/authorization/resource-path';

@Controller('schools/:schoolId/students')
export class StudentsController {
    constructor(private studentsService: StudentsService) {}

    @RequirePermission(PermissionAction.READ, (req) => `${ResourcePath.build({ type: 'schools', id: String(req.params.schoolId) })}/students`)
    @Get('')
    findAll(@Param('schoolId', ParseIntPipe) schoolId: number) {
        return this.studentsService.findBySchool(schoolId);
    }

    @RequirePermission(PermissionAction.READ, (req) => ResourcePath.build({ type: 'students', id: String(req.params.id) }))
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number) {
        return this.studentsService.findOne(id)
    }

    @RequirePermission(PermissionAction.CREATE, (req) => `${ResourcePath.build({ type: 'schools', id: String(req.params.schoolId) })}/students`)
    @Post('')
    createOne(@Param('schoolId', ParseIntPipe) schoolId: number, @Body() data: createStudentDto) {
        return this.studentsService.createInSchool(schoolId, data);
    }

    @RequirePermission(PermissionAction.DELETE, (req) => ResourcePath.build({ type: 'students', id: String(req.params.id) }))
    @Delete(':id') 
    deleteOne(@Param('id', ParseIntPipe) id: number) {
        return this.studentsService.deleteOne(id)
    }

    @RequirePermission(PermissionAction.UPDATE, (req) => ResourcePath.build({ type: 'students', id: String(req.params.id) }))
    @Put(':id')
    putOne(@Body() data: updateStudentDto, @Param('id',ParseIntPipe) id:number) {
        return this.studentsService.changeOne(id, data);
    }
}
