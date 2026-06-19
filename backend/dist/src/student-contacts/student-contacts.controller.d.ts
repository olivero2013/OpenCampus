import { StudentContactsService } from './student-contacts.service';
import { createStudentContactDto } from './dto/createStudentContact.dto';
export declare class StudentContactsController {
    private studentContactsService;
    constructor(studentContactsService: StudentContactsService);
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        contact: {
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            phoneNumber: string | null;
            email: string | null;
        };
    } & {
        id: number;
        studentId: number;
        contactId: number;
        relationship: string | null;
        emergencyContact: boolean;
        pickupAuthorized: boolean;
        receivesMailings: boolean;
    })[]>;
    findOne(id: number): import("../generated/prisma/models").Prisma__StudentContactClient<({
        contact: {
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            phoneNumber: string | null;
            email: string | null;
        };
    } & {
        id: number;
        studentId: number;
        contactId: number;
        relationship: string | null;
        emergencyContact: boolean;
        pickupAuthorized: boolean;
        receivesMailings: boolean;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findContactsByStudent(id: number): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        contact: {
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            phoneNumber: string | null;
            email: string | null;
        };
    } & {
        id: number;
        studentId: number;
        contactId: number;
        relationship: string | null;
        emergencyContact: boolean;
        pickupAuthorized: boolean;
        receivesMailings: boolean;
    })[]>;
    createContact(data: createStudentContactDto): import("../generated/prisma/models").Prisma__ContactClient<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        phoneNumber: string | null;
        email: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
