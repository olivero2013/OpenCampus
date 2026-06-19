import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { createStudentDto } from './dto/createStudent.dto';
import { updateStudentDto } from './dto/updateStudent.dto';

@Controller('students')
export class StudentsController {
    constructor(private studentsService: StudentsService) {}

    @Get('')
    findAll() {
        return this.studentsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number) {
        return this.studentsService.findOne(id)
    }

    @Post('')
    createOne(@Body() data: createStudentDto) {
        return this.studentsService.createOne(data);
    }

    @Delete(':id') 
    deleteOne(@Param('id', ParseIntPipe) id: number) {
        return this.studentsService.deleteOne(id)
    }

    @Put(':id')
    putOne(@Body() data: updateStudentDto, @Param('id',ParseIntPipe) id:number) {
        return this.studentsService.changeOne(id, data);
    }
}
