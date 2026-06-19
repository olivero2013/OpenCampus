import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { SchoolService } from './school.service';
import { createSchoolDto } from './dto/createSchool.dto';
import { updateSchoolDto } from './dto/updateSchool.dto';

@Controller('school')
export class SchoolController {
    constructor(private schoolService: SchoolService) {}
    
    @Get('')
    findAll() {
        return this.schoolService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id:number) {
        return this.schoolService.findOne(id);
    }
   
    @Get('/:id/students')
    findAllStudentInSchool(@Param('id') id:string) {
        return this.schoolService.findAllStudentsInSchool(id);
    }

    @Post('')
    createSchool(@Body() CreateSchoolDto: createSchoolDto) {
        return this.schoolService.createSchool(CreateSchoolDto);
    }
    @Put(':id')
    updateSchool(@Param('id') id:number, @Body() data: updateSchoolDto) {
        return this.schoolService.changeSchool(id, data);
    }
}
