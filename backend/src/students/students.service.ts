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

    async findBySchool(schoolId: number) {
        return this.prisma.student.findMany({ where: { schoolId } });
    }

    async findByClass(classId: number) {
        return this.prisma.student.findMany({ 
            where: { 
                classes: {
                    some: { classId }
                }
            },
            include: { classes: true }
        });
    }

    async createInSchool(schoolId: number, data: createStudentDto) {
        return this.prisma.student.create({ data: { ...data, schoolId } });
    }

    async addStudentToClass(studentId: number, classId: number) {
        return this.prisma.studentClass.create({
            data: { studentId, classId }
        });
    }

    async removeStudentFromClass(studentId: number, classId: number) {
        return this.prisma.studentClass.deleteMany({
            where: { studentId, classId }
        });
    }

    async getClassesForStudent(studentId: number) {
        return this.prisma.studentClass.findMany({
            where: { studentId },
            include: { class: true }
        });
    }
}
