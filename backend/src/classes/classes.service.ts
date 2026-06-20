import { Injectable } from '@nestjs/common';
import { PrimsaService } from '../prisma/primsa.service';
import { Class, Prisma } from '../generated/prisma/client';
import { createClassDto } from './dto/createClass.dto';
import { updateClassDto } from './dto/updateClass.dto';

@Injectable()
export class ClassesService {

    constructor(private prisma: PrimsaService) {}

    async findAll() {
        return this.prisma.class.findMany();
    }

    async findOne(id: number) {
        return this.prisma.class.findUniqueOrThrow({ where: { id } });
    }

    async createOne(data: createClassDto) {
        return this.prisma.class.create({ data });
    }

    async deleteOne(id: number) {
        return this.prisma.class.delete({ where: { id } });
    }

    async updateOne(id: number, data: updateClassDto) {
        return this.prisma.class.update({
            where: { id },
            data
        });
    }

    async findBySchool(schoolId: number) {
        return this.prisma.class.findMany({ where: { schoolId } });
    }

    async createInSchool(schoolId: number, data: createClassDto) {
        return this.prisma.class.create({ 
            data: { ...data, schoolId }
        });
    }

    async getStudentsInClass(classId: number) {
        return this.prisma.studentClass.findMany({ 
            where: { classId }, include: {student: true}
        });
    }
}
