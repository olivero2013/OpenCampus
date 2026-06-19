import { PrimsaService } from "../prisma/primsa.service";
import { CreateStudentContactDto } from './dto/createStudentContact.dto';
import { CreateStudentRelationDto } from './dto/createStudentRelation.dto';
export declare class StudentContactsService {
    private primsa;
    constructor(primsa: PrimsaService);
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        contact: {
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            phoneNumber: string | null;
            mobileNumber: string | null;
            workPhone: string | null;
            email: string | null;
            address1: string | null;
            address2: string | null;
            city: string | null;
            state: string | null;
            zipCode: string | null;
            employer: string | null;
            occupation: string | null;
        };
    } & {
        id: number;
        studentId: number;
        contactId: number;
        relationship: string;
        emergencyContact: boolean;
        pickupAuthorized: boolean;
        primaryGuardian: boolean;
        receivesMailings: boolean;
        receivesReportCards: boolean;
        receivesAttendanceAlerts: boolean;
        receivesDisciplineAlerts: boolean;
        livesWithStudent: boolean;
        custodyRights: boolean;
        educationalRights: boolean;
        sortOrder: number;
    })[]>;
    findContactByContactId(id: number): import("../generated/prisma/models").Prisma__ContactClient<({
        students: {
            id: number;
            studentId: number;
            contactId: number;
            relationship: string;
            emergencyContact: boolean;
            pickupAuthorized: boolean;
            primaryGuardian: boolean;
            receivesMailings: boolean;
            receivesReportCards: boolean;
            receivesAttendanceAlerts: boolean;
            receivesDisciplineAlerts: boolean;
            livesWithStudent: boolean;
            custodyRights: boolean;
            educationalRights: boolean;
            sortOrder: number;
        }[];
    } & {
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        phoneNumber: string | null;
        mobileNumber: string | null;
        workPhone: string | null;
        email: string | null;
        address1: string | null;
        address2: string | null;
        city: string | null;
        state: string | null;
        zipCode: string | null;
        employer: string | null;
        occupation: string | null;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAllContacts(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        students: {
            id: number;
            studentId: number;
            contactId: number;
            relationship: string;
            emergencyContact: boolean;
            pickupAuthorized: boolean;
            primaryGuardian: boolean;
            receivesMailings: boolean;
            receivesReportCards: boolean;
            receivesAttendanceAlerts: boolean;
            receivesDisciplineAlerts: boolean;
            livesWithStudent: boolean;
            custodyRights: boolean;
            educationalRights: boolean;
            sortOrder: number;
        }[];
    } & {
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        phoneNumber: string | null;
        mobileNumber: string | null;
        workPhone: string | null;
        email: string | null;
        address1: string | null;
        address2: string | null;
        city: string | null;
        state: string | null;
        zipCode: string | null;
        employer: string | null;
        occupation: string | null;
    })[]>;
    findContactByStudent(id: number): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        students: {
            id: number;
            studentId: number;
            contactId: number;
            relationship: string;
            emergencyContact: boolean;
            pickupAuthorized: boolean;
            primaryGuardian: boolean;
            receivesMailings: boolean;
            receivesReportCards: boolean;
            receivesAttendanceAlerts: boolean;
            receivesDisciplineAlerts: boolean;
            livesWithStudent: boolean;
            custodyRights: boolean;
            educationalRights: boolean;
            sortOrder: number;
        }[];
    } & {
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        phoneNumber: string | null;
        mobileNumber: string | null;
        workPhone: string | null;
        email: string | null;
        address1: string | null;
        address2: string | null;
        city: string | null;
        state: string | null;
        zipCode: string | null;
        employer: string | null;
        occupation: string | null;
    })[]>;
    createContact(data: CreateStudentContactDto): import("../generated/prisma/models").Prisma__ContactClient<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        phoneNumber: string | null;
        mobileNumber: string | null;
        workPhone: string | null;
        email: string | null;
        address1: string | null;
        address2: string | null;
        city: string | null;
        state: string | null;
        zipCode: string | null;
        employer: string | null;
        occupation: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    createRelation(data: CreateStudentRelationDto): import("../generated/prisma/models").Prisma__StudentContactClient<{
        id: number;
        studentId: number;
        contactId: number;
        relationship: string;
        emergencyContact: boolean;
        pickupAuthorized: boolean;
        primaryGuardian: boolean;
        receivesMailings: boolean;
        receivesReportCards: boolean;
        receivesAttendanceAlerts: boolean;
        receivesDisciplineAlerts: boolean;
        livesWithStudent: boolean;
        custodyRights: boolean;
        educationalRights: boolean;
        sortOrder: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
