import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { createClassDto } from './dto/createClass.dto';
import { updateClassDto } from './dto/updateClass.dto';
import { RequirePermission } from 'src/authorization/authorization.decorator';
import { PermissionAction } from 'src/authorization/actions.enum';
import { ResourcePath } from 'src/authorization/resource-path';

@Controller('schools/:schoolId/classes')
export class ClassesController {
    constructor(private classesService: ClassesService) {}

    @RequirePermission(PermissionAction.READ, (req) => `${ResourcePath.build({ type: 'schools', id: String(req.params.schoolId) })}/classes`)
    @Get('')
    findAll(@Param('schoolId', ParseIntPipe) schoolId: number) {
        return this.classesService.findBySchool(schoolId);
    }

    @RequirePermission(PermissionAction.READ, (req) => ResourcePath.build({ type: 'classes', id: String(req.params.id) }))
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.classesService.findOne(id);
    }

    @RequirePermission(PermissionAction.CREATE, (req) => `${ResourcePath.build({ type: 'schools', id: String(req.params.schoolId) })}/classes`)
    @Post('')
    createOne(@Param('schoolId', ParseIntPipe) schoolId: number, @Body() data: createClassDto) {
        return this.classesService.createInSchool(schoolId, data);
    }

    @RequirePermission(PermissionAction.DELETE, (req) => ResourcePath.build({ type: 'classes', id: String(req.params.id) }))
    @Delete(':id')
    deleteOne(@Param('id', ParseIntPipe) id: number) {
        return this.classesService.deleteOne(id);
    }

    @RequirePermission(PermissionAction.UPDATE, (req) => ResourcePath.build({ type: 'classes', id: String(req.params.id) }))
    @Put(':id')
    updateOne(@Body() data: updateClassDto, @Param('id', ParseIntPipe) id: number) {
        return this.classesService.updateOne(id, data);
    }
}
