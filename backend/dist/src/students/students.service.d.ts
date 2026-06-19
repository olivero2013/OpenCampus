import { PrimsaService } from '../prisma/primsa.service';
import { createStudentDto } from './dto/createStudent.dto';
import { updateStudentDto } from './dto/updateStudent.dto';
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrimsaService);
    findAll(): Promise<{
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
    findOne(id: number): Promise<{
        firstname: string;
        lastname: string;
        preferredname: string | null;
        studentID: number;
        dateOfBirth: Date;
        gender: string;
        enrollment: boolean;
        schoolId: number;
        id: number;
    }>;
    createOne(data: createStudentDto): Promise<{
        firstname: string;
        lastname: string;
        preferredname: string | null;
        studentID: number;
        dateOfBirth: Date;
        gender: string;
        enrollment: boolean;
        schoolId: number;
        id: number;
    }>;
    deleteOne(id: number): Promise<{
        firstname: string;
        lastname: string;
        preferredname: string | null;
        studentID: number;
        dateOfBirth: Date;
        gender: string;
        enrollment: boolean;
        schoolId: number;
        id: number;
    }>;
    changeOne(id: number, data: updateStudentDto): Promise<{
        firstname: string;
        lastname: string;
        preferredname: string | null;
        studentID: number;
        dateOfBirth: Date;
        gender: string;
        enrollment: boolean;
        schoolId: number;
        id: number;
    }>;
}
