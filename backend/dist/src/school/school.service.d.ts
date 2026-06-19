import { PrimsaService } from "../prisma/primsa.service";
import { createSchoolDto } from './dto/createSchool.dto';
import { updateSchoolDto } from './dto/updateSchool.dto';
export declare class SchoolService {
    private prisma;
    constructor(prisma: PrimsaService);
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
    }>;
    findAllStudentsInSchool(schoolID: any): Promise<{
        firstname: string;
        lastname: string;
        preferredname: string | null;
        studentID: number;
        dateOfBirth: Date;
        gender: string;
        enrollment: boolean;
        schoolId: number;
        id: number;
    }[]>;
    createSchool(data: createSchoolDto): Promise<{
        id: number;
        name: string;
    }>;
    changeSchool(id: number, data: updateSchoolDto): Promise<{
        id: number;
        name: string;
    }>;
}
