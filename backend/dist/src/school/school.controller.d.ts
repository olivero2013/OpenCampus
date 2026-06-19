import { SchoolService } from './school.service';
import { createSchoolDto } from './dto/createSchool.dto';
import { updateSchoolDto } from './dto/updateSchool.dto';
export declare class SchoolController {
    private schoolService;
    constructor(schoolService: SchoolService);
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findAllStudentInSchool(id: string): Promise<{
        firstname: string;
        lastname: string;
        preferredname: string | null;
        studentID: number;
        dateOfBirth: Date;
        gender: string;
        enrollment: boolean;
        schoolAssignment: number;
        id: number;
    }[]>;
    createSchool(CreateSchoolDto: createSchoolDto): Promise<{
        id: number;
        name: string;
    }>;
    updateSchool(id: number, data: updateSchoolDto): Promise<{
        id: number;
        name: string;
    }>;
}
