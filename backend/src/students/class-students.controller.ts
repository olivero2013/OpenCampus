import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { RequirePermission } from 'src/authorization/authorization.decorator';
import { PermissionAction } from 'src/authorization/actions.enum';
import { ResourcePath } from 'src/authorization/resource-path';

@Controller('classes/:classId/students')
export class ClassStudentsController {
  constructor(private studentsService: StudentsService) {}

  @RequirePermission(PermissionAction.READ, (req) => `${ResourcePath.build({ type: 'classes', id: String(req.params.classId) })}/students`)
  @Get('')
  findAll(@Param('classId', ParseIntPipe) classId: number) {
    return this.studentsService.findByClass(classId);
  }

  @RequirePermission(PermissionAction.CREATE, (req) => `${ResourcePath.build({ type: 'classes', id: String(req.params.classId) })}/students`)
  @Post(':studentId')
  addStudent(@Param('classId', ParseIntPipe) classId: number, @Param('studentId', ParseIntPipe) studentId: number) {
    return this.studentsService.addStudentToClass(studentId, classId);
  }

  @RequirePermission(PermissionAction.DELETE, (req) => `${ResourcePath.build({ type: 'classes', id: String(req.params.classId) })}/students`)
  @Delete(':studentId')
  removeStudent(@Param('classId', ParseIntPipe) classId: number, @Param('studentId', ParseIntPipe) studentId: number) {
    return this.studentsService.removeStudentFromClass(studentId, classId);
  }
}
