import { StudentsService } from './students.service';
import { createStudentDto } from './dto/createStudent.dto';
import { updateStudentDto } from './dto/updateStudent.dto';
export declare class StudentsController {
    private studentsService;
    constructor(studentsService: StudentsService);
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
    putOne(data: updateStudentDto, id: number): Promise<{
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
