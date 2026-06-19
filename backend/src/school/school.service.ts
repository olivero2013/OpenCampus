import { Injectable } from '@nestjs/common';
import { PrimsaService } from 'src/prisma/primsa.service';
import { createSchoolDto } from './dto/createSchool.dto';
import { updateSchoolDto } from './dto/updateSchool.dto';

@Injectable()
export class SchoolService {
    constructor(private prisma: PrimsaService) {}

    async findAll() {
        return this.prisma.school.findMany();
    }

    async findOne(id:number) {
        return this.prisma.school.findUniqueOrThrow({where:{id}})
    }

    async findAllStudentsInSchool(schoolID) {
        return this.prisma.student.findMany({where: {schoolId:schoolID}});
    }

    async createSchool(data: createSchoolDto) {
        return this.prisma.school.create({data});
    }

    async changeSchool(id: number, data: updateSchoolDto) {
        return this.prisma.school.update({where: {id}, data})
    }
}
