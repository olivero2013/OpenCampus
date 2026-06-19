export declare class CreateStudentRelationDto {
    studentId: number;
    contactId: number;
    relationship: string;
    emergencyContact?: boolean;
    pickupAuthorized?: boolean;
    primaryGuardian?: boolean;
    receivesMailings?: boolean;
    receivesReportCards?: boolean;
    receivesAttendanceAlerts?: boolean;
    receivesDisciplineAlerts?: boolean;
    livesWithStudent?: boolean;
    custodyRights?: boolean;
    educationalRights?: boolean;
    sortOrder?: number;
}
