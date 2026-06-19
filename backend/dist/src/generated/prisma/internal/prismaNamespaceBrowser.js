"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentContactOrderByRelevanceFieldEnum = exports.ContactOrderByRelevanceFieldEnum = exports.SchoolOrderByRelevanceFieldEnum = exports.StudentOrderByRelevanceFieldEnum = exports.NullsOrder = exports.SortOrder = exports.StudentContactScalarFieldEnum = exports.ContactScalarFieldEnum = exports.SchoolScalarFieldEnum = exports.StudentScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Student: 'Student',
    School: 'School',
    Contact: 'Contact',
    StudentContact: 'StudentContact'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.StudentScalarFieldEnum = {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    preferredname: 'preferredname',
    studentID: 'studentID',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    enrollment: 'enrollment',
    schoolId: 'schoolId'
};
exports.SchoolScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.ContactScalarFieldEnum = {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    preferredname: 'preferredname',
    phoneNumber: 'phoneNumber',
    mobileNumber: 'mobileNumber',
    workPhone: 'workPhone',
    email: 'email',
    address1: 'address1',
    address2: 'address2',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    employer: 'employer',
    occupation: 'occupation'
};
exports.StudentContactScalarFieldEnum = {
    id: 'id',
    studentId: 'studentId',
    contactId: 'contactId',
    relationship: 'relationship',
    emergencyContact: 'emergencyContact',
    pickupAuthorized: 'pickupAuthorized',
    primaryGuardian: 'primaryGuardian',
    receivesMailings: 'receivesMailings',
    receivesReportCards: 'receivesReportCards',
    receivesAttendanceAlerts: 'receivesAttendanceAlerts',
    receivesDisciplineAlerts: 'receivesDisciplineAlerts',
    livesWithStudent: 'livesWithStudent',
    custodyRights: 'custodyRights',
    educationalRights: 'educationalRights',
    sortOrder: 'sortOrder'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.StudentOrderByRelevanceFieldEnum = {
    firstname: 'firstname',
    lastname: 'lastname',
    preferredname: 'preferredname',
    gender: 'gender'
};
exports.SchoolOrderByRelevanceFieldEnum = {
    name: 'name'
};
exports.ContactOrderByRelevanceFieldEnum = {
    firstname: 'firstname',
    lastname: 'lastname',
    preferredname: 'preferredname',
    phoneNumber: 'phoneNumber',
    mobileNumber: 'mobileNumber',
    workPhone: 'workPhone',
    email: 'email',
    address1: 'address1',
    address2: 'address2',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    employer: 'employer',
    occupation: 'occupation'
};
exports.StudentContactOrderByRelevanceFieldEnum = {
    relationship: 'relationship'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map