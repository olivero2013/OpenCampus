import { Injectable } from '@nestjs/common';
import { PrimsaService } from '../prisma/primsa.service';
import { students, Prisma } from '../generated/prisma/client';
import { createStudentDto } from './dto/createStudent.dto';
import { updateStudentDto } from './dto/updateStudent.dto';

@Injectable()
export class StudentsService {

    constructor(private prisma:PrimsaService) {}

    async findAll() {
        return this.prisma.students.findMany();
    }
    async findOne(id: number) {
        return this.prisma.students.findUniqueOrThrow({where:{id}})
    }
    async createOne(data: createStudentDto) {
        return this.prisma.students.create({data});
    }
    async deleteOne(id: number) {
        return this.prisma.students.delete({where: {id}});
    }
    async changeOne(id: number, data: updateStudentDto) {
        return this.prisma.students.update({
            where: { id },
            data
        })
    }
}
