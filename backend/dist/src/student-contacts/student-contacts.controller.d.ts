import { StudentContactsService } from './student-contacts.service';
import { createStudentContactDto } from './dto/createStudentContact.dto';
export declare class StudentContactsController {
    private studentContactsService;
    constructor(studentContactsService: StudentContactsService);
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        phoneNumber: string | null;
        email: string | null;
        studentAssignment: number;
    }[]>;
    findOne(id: number): import("../generated/prisma/models").Prisma__contactsClient<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        phoneNumber: string | null;
        email: string | null;
        studentAssignment: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    createContact(data: createStudentContactDto): import("../generated/prisma/models").Prisma__contactsClient<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        phoneNumber: string | null;
        email: string | null;
        studentAssignment: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
