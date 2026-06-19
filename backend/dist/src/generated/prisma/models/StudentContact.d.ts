import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentContactModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentContactPayload>;
export type AggregateStudentContact = {
    _count: StudentContactCountAggregateOutputType | null;
    _avg: StudentContactAvgAggregateOutputType | null;
    _sum: StudentContactSumAggregateOutputType | null;
    _min: StudentContactMinAggregateOutputType | null;
    _max: StudentContactMaxAggregateOutputType | null;
};
export type StudentContactAvgAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    contactId: number | null;
    sortOrder: number | null;
};
export type StudentContactSumAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    contactId: number | null;
    sortOrder: number | null;
};
export type StudentContactMinAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    contactId: number | null;
    relationship: string | null;
    emergencyContact: boolean | null;
    pickupAuthorized: boolean | null;
    primaryGuardian: boolean | null;
    receivesMailings: boolean | null;
    receivesReportCards: boolean | null;
    receivesAttendanceAlerts: boolean | null;
    receivesDisciplineAlerts: boolean | null;
    livesWithStudent: boolean | null;
    custodyRights: boolean | null;
    educationalRights: boolean | null;
    sortOrder: number | null;
};
export type StudentContactMaxAggregateOutputType = {
    id: number | null;
    studentId: number | null;
    contactId: number | null;
    relationship: string | null;
    emergencyContact: boolean | null;
    pickupAuthorized: boolean | null;
    primaryGuardian: boolean | null;
    receivesMailings: boolean | null;
    receivesReportCards: boolean | null;
    receivesAttendanceAlerts: boolean | null;
    receivesDisciplineAlerts: boolean | null;
    livesWithStudent: boolean | null;
    custodyRights: boolean | null;
    educationalRights: boolean | null;
    sortOrder: number | null;
};
export type StudentContactCountAggregateOutputType = {
    id: number;
    studentId: number;
    contactId: number;
    relationship: number;
    emergencyContact: number;
    pickupAuthorized: number;
    primaryGuardian: number;
    receivesMailings: number;
    receivesReportCards: number;
    receivesAttendanceAlerts: number;
    receivesDisciplineAlerts: number;
    livesWithStudent: number;
    custodyRights: number;
    educationalRights: number;
    sortOrder: number;
    _all: number;
};
export type StudentContactAvgAggregateInputType = {
    id?: true;
    studentId?: true;
    contactId?: true;
    sortOrder?: true;
};
export type StudentContactSumAggregateInputType = {
    id?: true;
    studentId?: true;
    contactId?: true;
    sortOrder?: true;
};
export type StudentContactMinAggregateInputType = {
    id?: true;
    studentId?: true;
    contactId?: true;
    relationship?: true;
    emergencyContact?: true;
    pickupAuthorized?: true;
    primaryGuardian?: true;
    receivesMailings?: true;
    receivesReportCards?: true;
    receivesAttendanceAlerts?: true;
    receivesDisciplineAlerts?: true;
    livesWithStudent?: true;
    custodyRights?: true;
    educationalRights?: true;
    sortOrder?: true;
};
export type StudentContactMaxAggregateInputType = {
    id?: true;
    studentId?: true;
    contactId?: true;
    relationship?: true;
    emergencyContact?: true;
    pickupAuthorized?: true;
    primaryGuardian?: true;
    receivesMailings?: true;
    receivesReportCards?: true;
    receivesAttendanceAlerts?: true;
    receivesDisciplineAlerts?: true;
    livesWithStudent?: true;
    custodyRights?: true;
    educationalRights?: true;
    sortOrder?: true;
};
export type StudentContactCountAggregateInputType = {
    id?: true;
    studentId?: true;
    contactId?: true;
    relationship?: true;
    emergencyContact?: true;
    pickupAuthorized?: true;
    primaryGuardian?: true;
    receivesMailings?: true;
    receivesReportCards?: true;
    receivesAttendanceAlerts?: true;
    receivesDisciplineAlerts?: true;
    livesWithStudent?: true;
    custodyRights?: true;
    educationalRights?: true;
    sortOrder?: true;
    _all?: true;
};
export type StudentContactAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentContactWhereInput;
    orderBy?: Prisma.StudentContactOrderByWithRelationInput | Prisma.StudentContactOrderByWithRelationInput[];
    cursor?: Prisma.StudentContactWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentContactCountAggregateInputType;
    _avg?: StudentContactAvgAggregateInputType;
    _sum?: StudentContactSumAggregateInputType;
    _min?: StudentContactMinAggregateInputType;
    _max?: StudentContactMaxAggregateInputType;
};
export type GetStudentContactAggregateType<T extends StudentContactAggregateArgs> = {
    [P in keyof T & keyof AggregateStudentContact]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudentContact[P]> : Prisma.GetScalarType<T[P], AggregateStudentContact[P]>;
};
export type StudentContactGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentContactWhereInput;
    orderBy?: Prisma.StudentContactOrderByWithAggregationInput | Prisma.StudentContactOrderByWithAggregationInput[];
    by: Prisma.StudentContactScalarFieldEnum[] | Prisma.StudentContactScalarFieldEnum;
    having?: Prisma.StudentContactScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentContactCountAggregateInputType | true;
    _avg?: StudentContactAvgAggregateInputType;
    _sum?: StudentContactSumAggregateInputType;
    _min?: StudentContactMinAggregateInputType;
    _max?: StudentContactMaxAggregateInputType;
};
export type StudentContactGroupByOutputType = {
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
    _count: StudentContactCountAggregateOutputType | null;
    _avg: StudentContactAvgAggregateOutputType | null;
    _sum: StudentContactSumAggregateOutputType | null;
    _min: StudentContactMinAggregateOutputType | null;
    _max: StudentContactMaxAggregateOutputType | null;
};
export type GetStudentContactGroupByPayload<T extends StudentContactGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentContactGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentContactGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentContactGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentContactGroupByOutputType[P]>;
}>>;
export type StudentContactWhereInput = {
    AND?: Prisma.StudentContactWhereInput | Prisma.StudentContactWhereInput[];
    OR?: Prisma.StudentContactWhereInput[];
    NOT?: Prisma.StudentContactWhereInput | Prisma.StudentContactWhereInput[];
    id?: Prisma.IntFilter<"StudentContact"> | number;
    studentId?: Prisma.IntFilter<"StudentContact"> | number;
    contactId?: Prisma.IntFilter<"StudentContact"> | number;
    relationship?: Prisma.StringFilter<"StudentContact"> | string;
    emergencyContact?: Prisma.BoolFilter<"StudentContact"> | boolean;
    pickupAuthorized?: Prisma.BoolFilter<"StudentContact"> | boolean;
    primaryGuardian?: Prisma.BoolFilter<"StudentContact"> | boolean;
    receivesMailings?: Prisma.BoolFilter<"StudentContact"> | boolean;
    receivesReportCards?: Prisma.BoolFilter<"StudentContact"> | boolean;
    receivesAttendanceAlerts?: Prisma.BoolFilter<"StudentContact"> | boolean;
    receivesDisciplineAlerts?: Prisma.BoolFilter<"StudentContact"> | boolean;
    livesWithStudent?: Prisma.BoolFilter<"StudentContact"> | boolean;
    custodyRights?: Prisma.BoolFilter<"StudentContact"> | boolean;
    educationalRights?: Prisma.BoolFilter<"StudentContact"> | boolean;
    sortOrder?: Prisma.IntFilter<"StudentContact"> | number;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    contact?: Prisma.XOR<Prisma.ContactScalarRelationFilter, Prisma.ContactWhereInput>;
};
export type StudentContactOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    contactId?: Prisma.SortOrder;
    relationship?: Prisma.SortOrder;
    emergencyContact?: Prisma.SortOrder;
    pickupAuthorized?: Prisma.SortOrder;
    primaryGuardian?: Prisma.SortOrder;
    receivesMailings?: Prisma.SortOrder;
    receivesReportCards?: Prisma.SortOrder;
    receivesAttendanceAlerts?: Prisma.SortOrder;
    receivesDisciplineAlerts?: Prisma.SortOrder;
    livesWithStudent?: Prisma.SortOrder;
    custodyRights?: Prisma.SortOrder;
    educationalRights?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    student?: Prisma.StudentOrderByWithRelationInput;
    contact?: Prisma.ContactOrderByWithRelationInput;
    _relevance?: Prisma.StudentContactOrderByRelevanceInput;
};
export type StudentContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    studentId_contactId?: Prisma.StudentContactStudentIdContactIdCompoundUniqueInput;
    AND?: Prisma.StudentContactWhereInput | Prisma.StudentContactWhereInput[];
    OR?: Prisma.StudentContactWhereInput[];
    NOT?: Prisma.StudentContactWhereInput | Prisma.StudentContactWhereInput[];
    studentId?: Prisma.IntFilter<"StudentContact"> | number;
    contactId?: Prisma.IntFilter<"StudentContact"> | number;
    relationship?: Prisma.StringFilter<"StudentContact"> | string;
    emergencyContact?: Prisma.BoolFilter<"StudentContact"> | boolean;
    pickupAuthorized?: Prisma.BoolFilter<"StudentContact"> | boolean;
    primaryGuardian?: Prisma.BoolFilter<"StudentContact"> | boolean;
    receivesMailings?: Prisma.BoolFilter<"StudentContact"> | boolean;
    receivesReportCards?: Prisma.BoolFilter<"StudentContact"> | boolean;
    receivesAttendanceAlerts?: Prisma.BoolFilter<"StudentContact"> | boolean;
    receivesDisciplineAlerts?: Prisma.BoolFilter<"StudentContact"> | boolean;
    livesWithStudent?: Prisma.BoolFilter<"StudentContact"> | boolean;
    custodyRights?: Prisma.BoolFilter<"StudentContact"> | boolean;
    educationalRights?: Prisma.BoolFilter<"StudentContact"> | boolean;
    sortOrder?: Prisma.IntFilter<"StudentContact"> | number;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
    contact?: Prisma.XOR<Prisma.ContactScalarRelationFilter, Prisma.ContactWhereInput>;
}, "id" | "studentId_contactId">;
export type StudentContactOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    contactId?: Prisma.SortOrder;
    relationship?: Prisma.SortOrder;
    emergencyContact?: Prisma.SortOrder;
    pickupAuthorized?: Prisma.SortOrder;
    primaryGuardian?: Prisma.SortOrder;
    receivesMailings?: Prisma.SortOrder;
    receivesReportCards?: Prisma.SortOrder;
    receivesAttendanceAlerts?: Prisma.SortOrder;
    receivesDisciplineAlerts?: Prisma.SortOrder;
    livesWithStudent?: Prisma.SortOrder;
    custodyRights?: Prisma.SortOrder;
    educationalRights?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.StudentContactCountOrderByAggregateInput;
    _avg?: Prisma.StudentContactAvgOrderByAggregateInput;
    _max?: Prisma.StudentContactMaxOrderByAggregateInput;
    _min?: Prisma.StudentContactMinOrderByAggregateInput;
    _sum?: Prisma.StudentContactSumOrderByAggregateInput;
};
export type StudentContactScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentContactScalarWhereWithAggregatesInput | Prisma.StudentContactScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentContactScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentContactScalarWhereWithAggregatesInput | Prisma.StudentContactScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"StudentContact"> | number;
    studentId?: Prisma.IntWithAggregatesFilter<"StudentContact"> | number;
    contactId?: Prisma.IntWithAggregatesFilter<"StudentContact"> | number;
    relationship?: Prisma.StringWithAggregatesFilter<"StudentContact"> | string;
    emergencyContact?: Prisma.BoolWithAggregatesFilter<"StudentContact"> | boolean;
    pickupAuthorized?: Prisma.BoolWithAggregatesFilter<"StudentContact"> | boolean;
    primaryGuardian?: Prisma.BoolWithAggregatesFilter<"StudentContact"> | boolean;
    receivesMailings?: Prisma.BoolWithAggregatesFilter<"StudentContact"> | boolean;
    receivesReportCards?: Prisma.BoolWithAggregatesFilter<"StudentContact"> | boolean;
    receivesAttendanceAlerts?: Prisma.BoolWithAggregatesFilter<"StudentContact"> | boolean;
    receivesDisciplineAlerts?: Prisma.BoolWithAggregatesFilter<"StudentContact"> | boolean;
    livesWithStudent?: Prisma.BoolWithAggregatesFilter<"StudentContact"> | boolean;
    custodyRights?: Prisma.BoolWithAggregatesFilter<"StudentContact"> | boolean;
    educationalRights?: Prisma.BoolWithAggregatesFilter<"StudentContact"> | boolean;
    sortOrder?: Prisma.IntWithAggregatesFilter<"StudentContact"> | number;
};
export type StudentContactCreateInput = {
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
    student: Prisma.StudentCreateNestedOneWithoutContactsInput;
    contact: Prisma.ContactCreateNestedOneWithoutStudentsInput;
};
export type StudentContactUncheckedCreateInput = {
    id?: number;
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
};
export type StudentContactUpdateInput = {
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    emergencyContact?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pickupAuthorized?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    primaryGuardian?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesMailings?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesReportCards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesAttendanceAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesDisciplineAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    livesWithStudent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    custodyRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    educationalRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    student?: Prisma.StudentUpdateOneRequiredWithoutContactsNestedInput;
    contact?: Prisma.ContactUpdateOneRequiredWithoutStudentsNestedInput;
};
export type StudentContactUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    contactId?: Prisma.IntFieldUpdateOperationsInput | number;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    emergencyContact?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pickupAuthorized?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    primaryGuardian?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesMailings?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesReportCards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesAttendanceAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesDisciplineAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    livesWithStudent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    custodyRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    educationalRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type StudentContactCreateManyInput = {
    id?: number;
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
};
export type StudentContactUpdateManyMutationInput = {
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    emergencyContact?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pickupAuthorized?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    primaryGuardian?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesMailings?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesReportCards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesAttendanceAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesDisciplineAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    livesWithStudent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    custodyRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    educationalRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type StudentContactUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    contactId?: Prisma.IntFieldUpdateOperationsInput | number;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    emergencyContact?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pickupAuthorized?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    primaryGuardian?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesMailings?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesReportCards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesAttendanceAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesDisciplineAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    livesWithStudent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    custodyRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    educationalRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type StudentContactListRelationFilter = {
    every?: Prisma.StudentContactWhereInput;
    some?: Prisma.StudentContactWhereInput;
    none?: Prisma.StudentContactWhereInput;
};
export type StudentContactOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentContactOrderByRelevanceInput = {
    fields: Prisma.StudentContactOrderByRelevanceFieldEnum | Prisma.StudentContactOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type StudentContactStudentIdContactIdCompoundUniqueInput = {
    studentId: number;
    contactId: number;
};
export type StudentContactCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    contactId?: Prisma.SortOrder;
    relationship?: Prisma.SortOrder;
    emergencyContact?: Prisma.SortOrder;
    pickupAuthorized?: Prisma.SortOrder;
    primaryGuardian?: Prisma.SortOrder;
    receivesMailings?: Prisma.SortOrder;
    receivesReportCards?: Prisma.SortOrder;
    receivesAttendanceAlerts?: Prisma.SortOrder;
    receivesDisciplineAlerts?: Prisma.SortOrder;
    livesWithStudent?: Prisma.SortOrder;
    custodyRights?: Prisma.SortOrder;
    educationalRights?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type StudentContactAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    contactId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type StudentContactMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    contactId?: Prisma.SortOrder;
    relationship?: Prisma.SortOrder;
    emergencyContact?: Prisma.SortOrder;
    pickupAuthorized?: Prisma.SortOrder;
    primaryGuardian?: Prisma.SortOrder;
    receivesMailings?: Prisma.SortOrder;
    receivesReportCards?: Prisma.SortOrder;
    receivesAttendanceAlerts?: Prisma.SortOrder;
    receivesDisciplineAlerts?: Prisma.SortOrder;
    livesWithStudent?: Prisma.SortOrder;
    custodyRights?: Prisma.SortOrder;
    educationalRights?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type StudentContactMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    contactId?: Prisma.SortOrder;
    relationship?: Prisma.SortOrder;
    emergencyContact?: Prisma.SortOrder;
    pickupAuthorized?: Prisma.SortOrder;
    primaryGuardian?: Prisma.SortOrder;
    receivesMailings?: Prisma.SortOrder;
    receivesReportCards?: Prisma.SortOrder;
    receivesAttendanceAlerts?: Prisma.SortOrder;
    receivesDisciplineAlerts?: Prisma.SortOrder;
    livesWithStudent?: Prisma.SortOrder;
    custodyRights?: Prisma.SortOrder;
    educationalRights?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type StudentContactSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    contactId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type StudentContactCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentContactCreateWithoutStudentInput, Prisma.StudentContactUncheckedCreateWithoutStudentInput> | Prisma.StudentContactCreateWithoutStudentInput[] | Prisma.StudentContactUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentContactCreateOrConnectWithoutStudentInput | Prisma.StudentContactCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentContactCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
};
export type StudentContactUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.StudentContactCreateWithoutStudentInput, Prisma.StudentContactUncheckedCreateWithoutStudentInput> | Prisma.StudentContactCreateWithoutStudentInput[] | Prisma.StudentContactUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentContactCreateOrConnectWithoutStudentInput | Prisma.StudentContactCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.StudentContactCreateManyStudentInputEnvelope;
    connect?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
};
export type StudentContactUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentContactCreateWithoutStudentInput, Prisma.StudentContactUncheckedCreateWithoutStudentInput> | Prisma.StudentContactCreateWithoutStudentInput[] | Prisma.StudentContactUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentContactCreateOrConnectWithoutStudentInput | Prisma.StudentContactCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentContactUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentContactUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentContactCreateManyStudentInputEnvelope;
    set?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    disconnect?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    delete?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    connect?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    update?: Prisma.StudentContactUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentContactUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentContactUpdateManyWithWhereWithoutStudentInput | Prisma.StudentContactUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentContactScalarWhereInput | Prisma.StudentContactScalarWhereInput[];
};
export type StudentContactUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.StudentContactCreateWithoutStudentInput, Prisma.StudentContactUncheckedCreateWithoutStudentInput> | Prisma.StudentContactCreateWithoutStudentInput[] | Prisma.StudentContactUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.StudentContactCreateOrConnectWithoutStudentInput | Prisma.StudentContactCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.StudentContactUpsertWithWhereUniqueWithoutStudentInput | Prisma.StudentContactUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.StudentContactCreateManyStudentInputEnvelope;
    set?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    disconnect?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    delete?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    connect?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    update?: Prisma.StudentContactUpdateWithWhereUniqueWithoutStudentInput | Prisma.StudentContactUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.StudentContactUpdateManyWithWhereWithoutStudentInput | Prisma.StudentContactUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.StudentContactScalarWhereInput | Prisma.StudentContactScalarWhereInput[];
};
export type StudentContactCreateNestedManyWithoutContactInput = {
    create?: Prisma.XOR<Prisma.StudentContactCreateWithoutContactInput, Prisma.StudentContactUncheckedCreateWithoutContactInput> | Prisma.StudentContactCreateWithoutContactInput[] | Prisma.StudentContactUncheckedCreateWithoutContactInput[];
    connectOrCreate?: Prisma.StudentContactCreateOrConnectWithoutContactInput | Prisma.StudentContactCreateOrConnectWithoutContactInput[];
    createMany?: Prisma.StudentContactCreateManyContactInputEnvelope;
    connect?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
};
export type StudentContactUncheckedCreateNestedManyWithoutContactInput = {
    create?: Prisma.XOR<Prisma.StudentContactCreateWithoutContactInput, Prisma.StudentContactUncheckedCreateWithoutContactInput> | Prisma.StudentContactCreateWithoutContactInput[] | Prisma.StudentContactUncheckedCreateWithoutContactInput[];
    connectOrCreate?: Prisma.StudentContactCreateOrConnectWithoutContactInput | Prisma.StudentContactCreateOrConnectWithoutContactInput[];
    createMany?: Prisma.StudentContactCreateManyContactInputEnvelope;
    connect?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
};
export type StudentContactUpdateManyWithoutContactNestedInput = {
    create?: Prisma.XOR<Prisma.StudentContactCreateWithoutContactInput, Prisma.StudentContactUncheckedCreateWithoutContactInput> | Prisma.StudentContactCreateWithoutContactInput[] | Prisma.StudentContactUncheckedCreateWithoutContactInput[];
    connectOrCreate?: Prisma.StudentContactCreateOrConnectWithoutContactInput | Prisma.StudentContactCreateOrConnectWithoutContactInput[];
    upsert?: Prisma.StudentContactUpsertWithWhereUniqueWithoutContactInput | Prisma.StudentContactUpsertWithWhereUniqueWithoutContactInput[];
    createMany?: Prisma.StudentContactCreateManyContactInputEnvelope;
    set?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    disconnect?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    delete?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    connect?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    update?: Prisma.StudentContactUpdateWithWhereUniqueWithoutContactInput | Prisma.StudentContactUpdateWithWhereUniqueWithoutContactInput[];
    updateMany?: Prisma.StudentContactUpdateManyWithWhereWithoutContactInput | Prisma.StudentContactUpdateManyWithWhereWithoutContactInput[];
    deleteMany?: Prisma.StudentContactScalarWhereInput | Prisma.StudentContactScalarWhereInput[];
};
export type StudentContactUncheckedUpdateManyWithoutContactNestedInput = {
    create?: Prisma.XOR<Prisma.StudentContactCreateWithoutContactInput, Prisma.StudentContactUncheckedCreateWithoutContactInput> | Prisma.StudentContactCreateWithoutContactInput[] | Prisma.StudentContactUncheckedCreateWithoutContactInput[];
    connectOrCreate?: Prisma.StudentContactCreateOrConnectWithoutContactInput | Prisma.StudentContactCreateOrConnectWithoutContactInput[];
    upsert?: Prisma.StudentContactUpsertWithWhereUniqueWithoutContactInput | Prisma.StudentContactUpsertWithWhereUniqueWithoutContactInput[];
    createMany?: Prisma.StudentContactCreateManyContactInputEnvelope;
    set?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    disconnect?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    delete?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    connect?: Prisma.StudentContactWhereUniqueInput | Prisma.StudentContactWhereUniqueInput[];
    update?: Prisma.StudentContactUpdateWithWhereUniqueWithoutContactInput | Prisma.StudentContactUpdateWithWhereUniqueWithoutContactInput[];
    updateMany?: Prisma.StudentContactUpdateManyWithWhereWithoutContactInput | Prisma.StudentContactUpdateManyWithWhereWithoutContactInput[];
    deleteMany?: Prisma.StudentContactScalarWhereInput | Prisma.StudentContactScalarWhereInput[];
};
export type StudentContactCreateWithoutStudentInput = {
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
    contact: Prisma.ContactCreateNestedOneWithoutStudentsInput;
};
export type StudentContactUncheckedCreateWithoutStudentInput = {
    id?: number;
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
};
export type StudentContactCreateOrConnectWithoutStudentInput = {
    where: Prisma.StudentContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentContactCreateWithoutStudentInput, Prisma.StudentContactUncheckedCreateWithoutStudentInput>;
};
export type StudentContactCreateManyStudentInputEnvelope = {
    data: Prisma.StudentContactCreateManyStudentInput | Prisma.StudentContactCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type StudentContactUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentContactWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentContactUpdateWithoutStudentInput, Prisma.StudentContactUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.StudentContactCreateWithoutStudentInput, Prisma.StudentContactUncheckedCreateWithoutStudentInput>;
};
export type StudentContactUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.StudentContactWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentContactUpdateWithoutStudentInput, Prisma.StudentContactUncheckedUpdateWithoutStudentInput>;
};
export type StudentContactUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.StudentContactScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentContactUpdateManyMutationInput, Prisma.StudentContactUncheckedUpdateManyWithoutStudentInput>;
};
export type StudentContactScalarWhereInput = {
    AND?: Prisma.StudentContactScalarWhereInput | Prisma.StudentContactScalarWhereInput[];
    OR?: Prisma.StudentContactScalarWhereInput[];
    NOT?: Prisma.StudentContactScalarWhereInput | Prisma.StudentContactScalarWhereInput[];
    id?: Prisma.IntFilter<"StudentContact"> | number;
    studentId?: Prisma.IntFilter<"StudentContact"> | number;
    contactId?: Prisma.IntFilter<"StudentContact"> | number;
    relationship?: Prisma.StringFilter<"StudentContact"> | string;
    emergencyContact?: Prisma.BoolFilter<"StudentContact"> | boolean;
    pickupAuthorized?: Prisma.BoolFilter<"StudentContact"> | boolean;
    primaryGuardian?: Prisma.BoolFilter<"StudentContact"> | boolean;
    receivesMailings?: Prisma.BoolFilter<"StudentContact"> | boolean;
    receivesReportCards?: Prisma.BoolFilter<"StudentContact"> | boolean;
    receivesAttendanceAlerts?: Prisma.BoolFilter<"StudentContact"> | boolean;
    receivesDisciplineAlerts?: Prisma.BoolFilter<"StudentContact"> | boolean;
    livesWithStudent?: Prisma.BoolFilter<"StudentContact"> | boolean;
    custodyRights?: Prisma.BoolFilter<"StudentContact"> | boolean;
    educationalRights?: Prisma.BoolFilter<"StudentContact"> | boolean;
    sortOrder?: Prisma.IntFilter<"StudentContact"> | number;
};
export type StudentContactCreateWithoutContactInput = {
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
    student: Prisma.StudentCreateNestedOneWithoutContactsInput;
};
export type StudentContactUncheckedCreateWithoutContactInput = {
    id?: number;
    studentId: number;
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
};
export type StudentContactCreateOrConnectWithoutContactInput = {
    where: Prisma.StudentContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentContactCreateWithoutContactInput, Prisma.StudentContactUncheckedCreateWithoutContactInput>;
};
export type StudentContactCreateManyContactInputEnvelope = {
    data: Prisma.StudentContactCreateManyContactInput | Prisma.StudentContactCreateManyContactInput[];
    skipDuplicates?: boolean;
};
export type StudentContactUpsertWithWhereUniqueWithoutContactInput = {
    where: Prisma.StudentContactWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentContactUpdateWithoutContactInput, Prisma.StudentContactUncheckedUpdateWithoutContactInput>;
    create: Prisma.XOR<Prisma.StudentContactCreateWithoutContactInput, Prisma.StudentContactUncheckedCreateWithoutContactInput>;
};
export type StudentContactUpdateWithWhereUniqueWithoutContactInput = {
    where: Prisma.StudentContactWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentContactUpdateWithoutContactInput, Prisma.StudentContactUncheckedUpdateWithoutContactInput>;
};
export type StudentContactUpdateManyWithWhereWithoutContactInput = {
    where: Prisma.StudentContactScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentContactUpdateManyMutationInput, Prisma.StudentContactUncheckedUpdateManyWithoutContactInput>;
};
export type StudentContactCreateManyStudentInput = {
    id?: number;
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
};
export type StudentContactUpdateWithoutStudentInput = {
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    emergencyContact?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pickupAuthorized?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    primaryGuardian?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesMailings?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesReportCards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesAttendanceAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesDisciplineAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    livesWithStudent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    custodyRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    educationalRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    contact?: Prisma.ContactUpdateOneRequiredWithoutStudentsNestedInput;
};
export type StudentContactUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contactId?: Prisma.IntFieldUpdateOperationsInput | number;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    emergencyContact?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pickupAuthorized?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    primaryGuardian?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesMailings?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesReportCards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesAttendanceAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesDisciplineAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    livesWithStudent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    custodyRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    educationalRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type StudentContactUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    contactId?: Prisma.IntFieldUpdateOperationsInput | number;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    emergencyContact?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pickupAuthorized?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    primaryGuardian?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesMailings?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesReportCards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesAttendanceAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesDisciplineAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    livesWithStudent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    custodyRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    educationalRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type StudentContactCreateManyContactInput = {
    id?: number;
    studentId: number;
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
};
export type StudentContactUpdateWithoutContactInput = {
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    emergencyContact?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pickupAuthorized?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    primaryGuardian?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesMailings?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesReportCards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesAttendanceAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesDisciplineAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    livesWithStudent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    custodyRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    educationalRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    student?: Prisma.StudentUpdateOneRequiredWithoutContactsNestedInput;
};
export type StudentContactUncheckedUpdateWithoutContactInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    emergencyContact?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pickupAuthorized?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    primaryGuardian?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesMailings?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesReportCards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesAttendanceAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesDisciplineAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    livesWithStudent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    custodyRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    educationalRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type StudentContactUncheckedUpdateManyWithoutContactInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    studentId?: Prisma.IntFieldUpdateOperationsInput | number;
    relationship?: Prisma.StringFieldUpdateOperationsInput | string;
    emergencyContact?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pickupAuthorized?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    primaryGuardian?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesMailings?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesReportCards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesAttendanceAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    receivesDisciplineAlerts?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    livesWithStudent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    custodyRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    educationalRights?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type StudentContactSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    studentId?: boolean;
    contactId?: boolean;
    relationship?: boolean;
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
    sortOrder?: boolean;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    contact?: boolean | Prisma.ContactDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["studentContact"]>;
export type StudentContactSelectScalar = {
    id?: boolean;
    studentId?: boolean;
    contactId?: boolean;
    relationship?: boolean;
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
    sortOrder?: boolean;
};
export type StudentContactOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "studentId" | "contactId" | "relationship" | "emergencyContact" | "pickupAuthorized" | "primaryGuardian" | "receivesMailings" | "receivesReportCards" | "receivesAttendanceAlerts" | "receivesDisciplineAlerts" | "livesWithStudent" | "custodyRights" | "educationalRights" | "sortOrder", ExtArgs["result"]["studentContact"]>;
export type StudentContactInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
    contact?: boolean | Prisma.ContactDefaultArgs<ExtArgs>;
};
export type $StudentContactPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StudentContact";
    objects: {
        student: Prisma.$StudentPayload<ExtArgs>;
        contact: Prisma.$ContactPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
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
    }, ExtArgs["result"]["studentContact"]>;
    composites: {};
};
export type StudentContactGetPayload<S extends boolean | null | undefined | StudentContactDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentContactPayload, S>;
export type StudentContactCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentContactCountAggregateInputType | true;
};
export interface StudentContactDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StudentContact'];
        meta: {
            name: 'StudentContact';
        };
    };
    findUnique<T extends StudentContactFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentContactFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentContactClient<runtime.Types.Result.GetResult<Prisma.$StudentContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentContactFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentContactClient<runtime.Types.Result.GetResult<Prisma.$StudentContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentContactFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentContactFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentContactClient<runtime.Types.Result.GetResult<Prisma.$StudentContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentContactFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentContactFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentContactClient<runtime.Types.Result.GetResult<Prisma.$StudentContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentContactFindManyArgs>(args?: Prisma.SelectSubset<T, StudentContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentContactCreateArgs>(args: Prisma.SelectSubset<T, StudentContactCreateArgs<ExtArgs>>): Prisma.Prisma__StudentContactClient<runtime.Types.Result.GetResult<Prisma.$StudentContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentContactCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends StudentContactDeleteArgs>(args: Prisma.SelectSubset<T, StudentContactDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentContactClient<runtime.Types.Result.GetResult<Prisma.$StudentContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentContactUpdateArgs>(args: Prisma.SelectSubset<T, StudentContactUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentContactClient<runtime.Types.Result.GetResult<Prisma.$StudentContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentContactDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentContactUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends StudentContactUpsertArgs>(args: Prisma.SelectSubset<T, StudentContactUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentContactClient<runtime.Types.Result.GetResult<Prisma.$StudentContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentContactCountArgs>(args?: Prisma.Subset<T, StudentContactCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentContactCountAggregateOutputType> : number>;
    aggregate<T extends StudentContactAggregateArgs>(args: Prisma.Subset<T, StudentContactAggregateArgs>): Prisma.PrismaPromise<GetStudentContactAggregateType<T>>;
    groupBy<T extends StudentContactGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentContactGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentContactGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentContactFieldRefs;
}
export interface Prisma__StudentContactClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    contact<T extends Prisma.ContactDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ContactDefaultArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentContactFieldRefs {
    readonly id: Prisma.FieldRef<"StudentContact", 'Int'>;
    readonly studentId: Prisma.FieldRef<"StudentContact", 'Int'>;
    readonly contactId: Prisma.FieldRef<"StudentContact", 'Int'>;
    readonly relationship: Prisma.FieldRef<"StudentContact", 'String'>;
    readonly emergencyContact: Prisma.FieldRef<"StudentContact", 'Boolean'>;
    readonly pickupAuthorized: Prisma.FieldRef<"StudentContact", 'Boolean'>;
    readonly primaryGuardian: Prisma.FieldRef<"StudentContact", 'Boolean'>;
    readonly receivesMailings: Prisma.FieldRef<"StudentContact", 'Boolean'>;
    readonly receivesReportCards: Prisma.FieldRef<"StudentContact", 'Boolean'>;
    readonly receivesAttendanceAlerts: Prisma.FieldRef<"StudentContact", 'Boolean'>;
    readonly receivesDisciplineAlerts: Prisma.FieldRef<"StudentContact", 'Boolean'>;
    readonly livesWithStudent: Prisma.FieldRef<"StudentContact", 'Boolean'>;
    readonly custodyRights: Prisma.FieldRef<"StudentContact", 'Boolean'>;
    readonly educationalRights: Prisma.FieldRef<"StudentContact", 'Boolean'>;
    readonly sortOrder: Prisma.FieldRef<"StudentContact", 'Int'>;
}
export type StudentContactFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentContactSelect<ExtArgs> | null;
    omit?: Prisma.StudentContactOmit<ExtArgs> | null;
    include?: Prisma.StudentContactInclude<ExtArgs> | null;
    where: Prisma.StudentContactWhereUniqueInput;
};
export type StudentContactFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentContactSelect<ExtArgs> | null;
    omit?: Prisma.StudentContactOmit<ExtArgs> | null;
    include?: Prisma.StudentContactInclude<ExtArgs> | null;
    where: Prisma.StudentContactWhereUniqueInput;
};
export type StudentContactFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentContactSelect<ExtArgs> | null;
    omit?: Prisma.StudentContactOmit<ExtArgs> | null;
    include?: Prisma.StudentContactInclude<ExtArgs> | null;
    where?: Prisma.StudentContactWhereInput;
    orderBy?: Prisma.StudentContactOrderByWithRelationInput | Prisma.StudentContactOrderByWithRelationInput[];
    cursor?: Prisma.StudentContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentContactScalarFieldEnum | Prisma.StudentContactScalarFieldEnum[];
};
export type StudentContactFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentContactSelect<ExtArgs> | null;
    omit?: Prisma.StudentContactOmit<ExtArgs> | null;
    include?: Prisma.StudentContactInclude<ExtArgs> | null;
    where?: Prisma.StudentContactWhereInput;
    orderBy?: Prisma.StudentContactOrderByWithRelationInput | Prisma.StudentContactOrderByWithRelationInput[];
    cursor?: Prisma.StudentContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentContactScalarFieldEnum | Prisma.StudentContactScalarFieldEnum[];
};
export type StudentContactFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentContactSelect<ExtArgs> | null;
    omit?: Prisma.StudentContactOmit<ExtArgs> | null;
    include?: Prisma.StudentContactInclude<ExtArgs> | null;
    where?: Prisma.StudentContactWhereInput;
    orderBy?: Prisma.StudentContactOrderByWithRelationInput | Prisma.StudentContactOrderByWithRelationInput[];
    cursor?: Prisma.StudentContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentContactScalarFieldEnum | Prisma.StudentContactScalarFieldEnum[];
};
export type StudentContactCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentContactSelect<ExtArgs> | null;
    omit?: Prisma.StudentContactOmit<ExtArgs> | null;
    include?: Prisma.StudentContactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentContactCreateInput, Prisma.StudentContactUncheckedCreateInput>;
};
export type StudentContactCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentContactCreateManyInput | Prisma.StudentContactCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentContactUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentContactSelect<ExtArgs> | null;
    omit?: Prisma.StudentContactOmit<ExtArgs> | null;
    include?: Prisma.StudentContactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentContactUpdateInput, Prisma.StudentContactUncheckedUpdateInput>;
    where: Prisma.StudentContactWhereUniqueInput;
};
export type StudentContactUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentContactUpdateManyMutationInput, Prisma.StudentContactUncheckedUpdateManyInput>;
    where?: Prisma.StudentContactWhereInput;
    limit?: number;
};
export type StudentContactUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentContactSelect<ExtArgs> | null;
    omit?: Prisma.StudentContactOmit<ExtArgs> | null;
    include?: Prisma.StudentContactInclude<ExtArgs> | null;
    where: Prisma.StudentContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentContactCreateInput, Prisma.StudentContactUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentContactUpdateInput, Prisma.StudentContactUncheckedUpdateInput>;
};
export type StudentContactDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentContactSelect<ExtArgs> | null;
    omit?: Prisma.StudentContactOmit<ExtArgs> | null;
    include?: Prisma.StudentContactInclude<ExtArgs> | null;
    where: Prisma.StudentContactWhereUniqueInput;
};
export type StudentContactDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentContactWhereInput;
    limit?: number;
};
export type StudentContactDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentContactSelect<ExtArgs> | null;
    omit?: Prisma.StudentContactOmit<ExtArgs> | null;
    include?: Prisma.StudentContactInclude<ExtArgs> | null;
};
