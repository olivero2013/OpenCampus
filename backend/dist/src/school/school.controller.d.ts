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
    findOne(id: number): Promise<{
        id: number;
        name: string;
    }>;
    findAllStudentInSchool(id: string): Promise<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        studentID: number;
        dateOfBirth: Date;
        gender: string;
        enrollment: boolean;
        schoolId: number;
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
