import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SchoolService } from './school.service';
import { createSchoolDto } from './dto/createSchool.dto';
import { updateSchoolDto } from './dto/updateSchool.dto';
import { RequirePermission } from 'src/authorization/authorization.decorator';
import { PermissionAction } from 'src/authorization/actions.enum';
import { ResourcePath } from 'src/authorization/resource-path';

@Controller('school')
export class SchoolController {
    constructor(private schoolService: SchoolService) {}
    
    @RequirePermission(PermissionAction.READ, 'school')
    @Get('')
    findAll() {
        return this.schoolService.findAll();
    }

    @RequirePermission(PermissionAction.READ, (req) => ResourcePath.build({ type: 'school', id: String(req.params.id) }))
    @Get(':id')
    findOne(@Param('id') id:number) {
        return this.schoolService.findOne(id);
    }
   
    @RequirePermission(PermissionAction.READ, (req) => `${ResourcePath.build({ type: 'school', id: String(req.params.id) })}/students`)
    @Get('/:id/students')
    findAllStudentInSchool(@Param('id', ParseIntPipe) id:string) {
        return this.schoolService.findAllStudentsInSchool(id);
    }

    @RequirePermission(PermissionAction.CREATE, 'school')
    @Post('')
    createSchool(@Body() CreateSchoolDto: createSchoolDto) {
        return this.schoolService.createSchool(CreateSchoolDto);
    }
    @RequirePermission(PermissionAction.UPDATE, (req) => ResourcePath.build({ type: 'school', id: String(req.params.id) }))
    @Put(':id')
    updateSchool(@Param('id') id:number, @Body() data: updateSchoolDto) {
        return this.schoolService.changeSchool(id, data);
    }
}
