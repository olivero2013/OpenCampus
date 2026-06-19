import { StudentsService } from './students.service';
import { createStudentDto } from './dto/createStudent.dto';
import { updateStudentDto } from './dto/updateStudent.dto';
export declare class StudentsController {
    private studentsService;
    constructor(studentsService: StudentsService);
    findAll(): Promise<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        studentID: number;
        dateOfBirth: Date;
        gender: string;
        enrollment: boolean;
        schoolAssignment: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        studentID: number;
        dateOfBirth: Date;
        gender: string;
        enrollment: boolean;
        schoolAssignment: number;
    }>;
    createOne(data: createStudentDto): Promise<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        studentID: number;
        dateOfBirth: Date;
        gender: string;
        enrollment: boolean;
        schoolAssignment: number;
    }>;
    deleteOne(id: number): Promise<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        studentID: number;
        dateOfBirth: Date;
        gender: string;
        enrollment: boolean;
        schoolAssignment: number;
    }>;
    putOne(data: updateStudentDto, id: number): Promise<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        studentID: number;
        dateOfBirth: Date;
        gender: string;
        enrollment: boolean;
        schoolAssignment: number;
    }>;
}
