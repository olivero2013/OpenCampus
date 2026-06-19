import { Injectable } from '@nestjs/common';
import { PrimsaService } from '../prisma/primsa.service';
import { Student, Prisma } from '../generated/prisma/client';
import { createStudentDto } from './dto/createStudent.dto';
import { updateStudentDto } from './dto/updateStudent.dto';

@Injectable()
export class StudentsService {

    constructor(private prisma:PrimsaService) {}

    async findAll() {
        return this.prisma.student.findMany();
    }
    async findOne(id: number) {
        return this.prisma.student.findUniqueOrThrow({where:{id}})
    }
    async createOne(data: createStudentDto) {
        return this.prisma.student.create({data});
    }
    async deleteOne(id: number) {
        return this.prisma.student.delete({where: {id}});
    }
    async changeOne(id: number, data: updateStudentDto) {
        return this.prisma.student.update({
            where: { id },
            data
        })
    }
}
