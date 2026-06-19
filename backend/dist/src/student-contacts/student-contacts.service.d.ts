import { PrimsaService } from "../prisma/primsa.service";
import { CreateStudentContactDto } from './dto/createStudentContact.dto';
import { CreateStudentRelationDto } from './dto/createStudentRelation.dto';
export declare class StudentContactsService {
    private primsa;
    constructor(primsa: PrimsaService);
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        contact: {
            firstname: string;
            lastname: string;
            preferredname: string | null;
            id: number;
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
            firstname: string;
            lastname: string;
            preferredname: string | null;
            id: number;
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
    findContactByStudent(id: number): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        contact: {
            firstname: string;
            lastname: string;
            preferredname: string | null;
            id: number;
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
    createContact(data: CreateStudentContactDto): import("../generated/prisma/models").Prisma__ContactClient<{
        firstname: string;
        lastname: string;
        preferredname: string | null;
        id: number;
        phoneNumber: string | null;
        email: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    createRelation(data: CreateStudentRelationDto): import("../generated/prisma/models").Prisma__StudentContactClient<{
        id: number;
        studentId: number;
        contactId: number;
        relationship: string | null;
        emergencyContact: boolean;
        pickupAuthorized: boolean;
        receivesMailings: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
