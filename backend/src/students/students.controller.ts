import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { createStudentDto } from './dto/createStudent.dto';
import { updateStudentDto } from './dto/updateStudent.dto';
import { RequirePermission } from 'src/authorization/authorization.decorator';
import { PermissionAction } from 'src/authorization/actions.enum';
import { ResourcePath } from 'src/authorization/resource-path';

@Controller('students')
export class StudentsController {
    constructor(private studentsService: StudentsService) {}

    @RequirePermission(PermissionAction.READ, 'students')
    @Get('')
    findAll() {
        return this.studentsService.findAll();
    }

    @RequirePermission(PermissionAction.READ, (req) => ResourcePath.build({ type: 'students', id: String(req.params.id) }))
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number) {
        return this.studentsService.findOne(id)
    }

    @RequirePermission(PermissionAction.CREATE, 'students')
    @Post('')
    createOne(@Body() data: createStudentDto) {
        return this.studentsService.createOne(data);
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
