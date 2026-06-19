import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Student: "Student";
    readonly School: "School";
    readonly Contact: "Contact";
    readonly StudentContact: "StudentContact";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const StudentScalarFieldEnum: {
    readonly id: "id";
    readonly firstname: "firstname";
    readonly lastname: "lastname";
    readonly preferredname: "preferredname";
    readonly studentID: "studentID";
    readonly dateOfBirth: "dateOfBirth";
    readonly gender: "gender";
    readonly enrollment: "enrollment";
    readonly schoolId: "schoolId";
};
export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];
export declare const SchoolScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum];
export declare const ContactScalarFieldEnum: {
    readonly id: "id";
    readonly firstname: "firstname";
    readonly lastname: "lastname";
    readonly preferredname: "preferredname";
    readonly phoneNumber: "phoneNumber";
    readonly email: "email";
};
export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum];
export declare const StudentContactScalarFieldEnum: {
    readonly id: "id";
    readonly studentId: "studentId";
    readonly contactId: "contactId";
    readonly relationship: "relationship";
    readonly emergencyContact: "emergencyContact";
    readonly pickupAuthorized: "pickupAuthorized";
    readonly receivesMailings: "receivesMailings";
};
export type StudentContactScalarFieldEnum = (typeof StudentContactScalarFieldEnum)[keyof typeof StudentContactScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const StudentOrderByRelevanceFieldEnum: {
    readonly firstname: "firstname";
    readonly lastname: "lastname";
    readonly preferredname: "preferredname";
    readonly gender: "gender";
};
export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum];
export declare const SchoolOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type SchoolOrderByRelevanceFieldEnum = (typeof SchoolOrderByRelevanceFieldEnum)[keyof typeof SchoolOrderByRelevanceFieldEnum];
export declare const ContactOrderByRelevanceFieldEnum: {
    readonly firstname: "firstname";
    readonly lastname: "lastname";
    readonly preferredname: "preferredname";
    readonly phoneNumber: "phoneNumber";
    readonly email: "email";
};
export type ContactOrderByRelevanceFieldEnum = (typeof ContactOrderByRelevanceFieldEnum)[keyof typeof ContactOrderByRelevanceFieldEnum];
export declare const StudentContactOrderByRelevanceFieldEnum: {
    readonly relationship: "relationship";
};
export type StudentContactOrderByRelevanceFieldEnum = (typeof StudentContactOrderByRelevanceFieldEnum)[keyof typeof StudentContactOrderByRelevanceFieldEnum];
