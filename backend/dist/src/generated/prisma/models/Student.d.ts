import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StudentModel = runtime.Types.Result.DefaultSelection<Prisma.$StudentPayload>;
export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
export type StudentAvgAggregateOutputType = {
    id: number | null;
    studentID: number | null;
    schoolId: number | null;
};
export type StudentSumAggregateOutputType = {
    id: number | null;
    studentID: number | null;
    schoolId: number | null;
};
export type StudentMinAggregateOutputType = {
    id: number | null;
    firstname: string | null;
    lastname: string | null;
    preferredname: string | null;
    studentID: number | null;
    dateOfBirth: Date | null;
    gender: string | null;
    enrollment: boolean | null;
    schoolId: number | null;
};
export type StudentMaxAggregateOutputType = {
    id: number | null;
    firstname: string | null;
    lastname: string | null;
    preferredname: string | null;
    studentID: number | null;
    dateOfBirth: Date | null;
    gender: string | null;
    enrollment: boolean | null;
    schoolId: number | null;
};
export type StudentCountAggregateOutputType = {
    id: number;
    firstname: number;
    lastname: number;
    preferredname: number;
    studentID: number;
    dateOfBirth: number;
    gender: number;
    enrollment: number;
    schoolId: number;
    _all: number;
};
export type StudentAvgAggregateInputType = {
    id?: true;
    studentID?: true;
    schoolId?: true;
};
export type StudentSumAggregateInputType = {
    id?: true;
    studentID?: true;
    schoolId?: true;
};
export type StudentMinAggregateInputType = {
    id?: true;
    firstname?: true;
    lastname?: true;
    preferredname?: true;
    studentID?: true;
    dateOfBirth?: true;
    gender?: true;
    enrollment?: true;
    schoolId?: true;
};
export type StudentMaxAggregateInputType = {
    id?: true;
    firstname?: true;
    lastname?: true;
    preferredname?: true;
    studentID?: true;
    dateOfBirth?: true;
    gender?: true;
    enrollment?: true;
    schoolId?: true;
};
export type StudentCountAggregateInputType = {
    id?: true;
    firstname?: true;
    lastname?: true;
    preferredname?: true;
    studentID?: true;
    dateOfBirth?: true;
    gender?: true;
    enrollment?: true;
    schoolId?: true;
    _all?: true;
};
export type StudentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StudentCountAggregateInputType;
    _avg?: StudentAvgAggregateInputType;
    _sum?: StudentSumAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStudent[P]> : Prisma.GetScalarType<T[P], AggregateStudent[P]>;
};
export type StudentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithAggregationInput | Prisma.StudentOrderByWithAggregationInput[];
    by: Prisma.StudentScalarFieldEnum[] | Prisma.StudentScalarFieldEnum;
    having?: Prisma.StudentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _avg?: StudentAvgAggregateInputType;
    _sum?: StudentSumAggregateInputType;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
};
export type StudentGroupByOutputType = {
    id: number;
    firstname: string;
    lastname: string;
    preferredname: string | null;
    studentID: number;
    dateOfBirth: Date;
    gender: string;
    enrollment: boolean;
    schoolId: number;
    _count: StudentCountAggregateOutputType | null;
    _avg: StudentAvgAggregateOutputType | null;
    _sum: StudentSumAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
};
export type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StudentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StudentGroupByOutputType[P]>;
}>>;
export type StudentWhereInput = {
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    id?: Prisma.IntFilter<"Student"> | number;
    firstname?: Prisma.StringFilter<"Student"> | string;
    lastname?: Prisma.StringFilter<"Student"> | string;
    preferredname?: Prisma.StringNullableFilter<"Student"> | string | null;
    studentID?: Prisma.IntFilter<"Student"> | number;
    dateOfBirth?: Prisma.DateTimeFilter<"Student"> | Date | string;
    gender?: Prisma.StringFilter<"Student"> | string;
    enrollment?: Prisma.BoolFilter<"Student"> | boolean;
    schoolId?: Prisma.IntFilter<"Student"> | number;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    contacts?: Prisma.StudentContactListRelationFilter;
};
export type StudentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrderInput | Prisma.SortOrder;
    studentID?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    enrollment?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    school?: Prisma.SchoolOrderByWithRelationInput;
    contacts?: Prisma.StudentContactOrderByRelationAggregateInput;
    _relevance?: Prisma.StudentOrderByRelevanceInput;
};
export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    studentID?: number;
    AND?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    OR?: Prisma.StudentWhereInput[];
    NOT?: Prisma.StudentWhereInput | Prisma.StudentWhereInput[];
    firstname?: Prisma.StringFilter<"Student"> | string;
    lastname?: Prisma.StringFilter<"Student"> | string;
    preferredname?: Prisma.StringNullableFilter<"Student"> | string | null;
    dateOfBirth?: Prisma.DateTimeFilter<"Student"> | Date | string;
    gender?: Prisma.StringFilter<"Student"> | string;
    enrollment?: Prisma.BoolFilter<"Student"> | boolean;
    schoolId?: Prisma.IntFilter<"Student"> | number;
    school?: Prisma.XOR<Prisma.SchoolScalarRelationFilter, Prisma.SchoolWhereInput>;
    contacts?: Prisma.StudentContactListRelationFilter;
}, "id" | "studentID">;
export type StudentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrderInput | Prisma.SortOrder;
    studentID?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    enrollment?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
    _count?: Prisma.StudentCountOrderByAggregateInput;
    _avg?: Prisma.StudentAvgOrderByAggregateInput;
    _max?: Prisma.StudentMaxOrderByAggregateInput;
    _min?: Prisma.StudentMinOrderByAggregateInput;
    _sum?: Prisma.StudentSumOrderByAggregateInput;
};
export type StudentScalarWhereWithAggregatesInput = {
    AND?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    OR?: Prisma.StudentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StudentScalarWhereWithAggregatesInput | Prisma.StudentScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Student"> | number;
    firstname?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    lastname?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    preferredname?: Prisma.StringNullableWithAggregatesFilter<"Student"> | string | null;
    studentID?: Prisma.IntWithAggregatesFilter<"Student"> | number;
    dateOfBirth?: Prisma.DateTimeWithAggregatesFilter<"Student"> | Date | string;
    gender?: Prisma.StringWithAggregatesFilter<"Student"> | string;
    enrollment?: Prisma.BoolWithAggregatesFilter<"Student"> | boolean;
    schoolId?: Prisma.IntWithAggregatesFilter<"Student"> | number;
};
export type StudentCreateInput = {
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    studentID: number;
    dateOfBirth: Date | string;
    gender: string;
    enrollment: boolean;
    school: Prisma.SchoolCreateNestedOneWithoutStudentsInput;
    contacts?: Prisma.StudentContactCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateInput = {
    id?: number;
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    studentID: number;
    dateOfBirth: Date | string;
    gender: string;
    enrollment: boolean;
    schoolId: number;
    contacts?: Prisma.StudentContactUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentUpdateInput = {
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentID?: Prisma.IntFieldUpdateOperationsInput | number;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollment?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentsNestedInput;
    contacts?: Prisma.StudentContactUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentID?: Prisma.IntFieldUpdateOperationsInput | number;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollment?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    schoolId?: Prisma.IntFieldUpdateOperationsInput | number;
    contacts?: Prisma.StudentContactUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentCreateManyInput = {
    id?: number;
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    studentID: number;
    dateOfBirth: Date | string;
    gender: string;
    enrollment: boolean;
    schoolId: number;
};
export type StudentUpdateManyMutationInput = {
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentID?: Prisma.IntFieldUpdateOperationsInput | number;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollment?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type StudentUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentID?: Prisma.IntFieldUpdateOperationsInput | number;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollment?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    schoolId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type StudentOrderByRelevanceInput = {
    fields: Prisma.StudentOrderByRelevanceFieldEnum | Prisma.StudentOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type StudentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrder;
    studentID?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    enrollment?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
};
export type StudentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentID?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
};
export type StudentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrder;
    studentID?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    enrollment?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
};
export type StudentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrder;
    studentID?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    enrollment?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
};
export type StudentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentID?: Prisma.SortOrder;
    schoolId?: Prisma.SortOrder;
};
export type StudentListRelationFilter = {
    every?: Prisma.StudentWhereInput;
    some?: Prisma.StudentWhereInput;
    none?: Prisma.StudentWhereInput;
};
export type StudentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StudentScalarRelationFilter = {
    is?: Prisma.StudentWhereInput;
    isNot?: Prisma.StudentWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type StudentCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutSchoolInput, Prisma.StudentUncheckedCreateWithoutSchoolInput> | Prisma.StudentCreateWithoutSchoolInput[] | Prisma.StudentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutSchoolInput | Prisma.StudentCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.StudentCreateManySchoolInputEnvelope;
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
};
export type StudentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutSchoolInput, Prisma.StudentUncheckedCreateWithoutSchoolInput> | Prisma.StudentCreateWithoutSchoolInput[] | Prisma.StudentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutSchoolInput | Prisma.StudentCreateOrConnectWithoutSchoolInput[];
    createMany?: Prisma.StudentCreateManySchoolInputEnvelope;
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
};
export type StudentUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutSchoolInput, Prisma.StudentUncheckedCreateWithoutSchoolInput> | Prisma.StudentCreateWithoutSchoolInput[] | Prisma.StudentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutSchoolInput | Prisma.StudentCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.StudentUpsertWithWhereUniqueWithoutSchoolInput | Prisma.StudentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.StudentCreateManySchoolInputEnvelope;
    set?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    disconnect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    delete?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    update?: Prisma.StudentUpdateWithWhereUniqueWithoutSchoolInput | Prisma.StudentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.StudentUpdateManyWithWhereWithoutSchoolInput | Prisma.StudentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
};
export type StudentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutSchoolInput, Prisma.StudentUncheckedCreateWithoutSchoolInput> | Prisma.StudentCreateWithoutSchoolInput[] | Prisma.StudentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutSchoolInput | Prisma.StudentCreateOrConnectWithoutSchoolInput[];
    upsert?: Prisma.StudentUpsertWithWhereUniqueWithoutSchoolInput | Prisma.StudentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: Prisma.StudentCreateManySchoolInputEnvelope;
    set?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    disconnect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    delete?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    connect?: Prisma.StudentWhereUniqueInput | Prisma.StudentWhereUniqueInput[];
    update?: Prisma.StudentUpdateWithWhereUniqueWithoutSchoolInput | Prisma.StudentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: Prisma.StudentUpdateManyWithWhereWithoutSchoolInput | Prisma.StudentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
};
export type StudentCreateNestedOneWithoutContactsInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutContactsInput, Prisma.StudentUncheckedCreateWithoutContactsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutContactsInput;
    connect?: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateOneRequiredWithoutContactsNestedInput = {
    create?: Prisma.XOR<Prisma.StudentCreateWithoutContactsInput, Prisma.StudentUncheckedCreateWithoutContactsInput>;
    connectOrCreate?: Prisma.StudentCreateOrConnectWithoutContactsInput;
    upsert?: Prisma.StudentUpsertWithoutContactsInput;
    connect?: Prisma.StudentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StudentUpdateToOneWithWhereWithoutContactsInput, Prisma.StudentUpdateWithoutContactsInput>, Prisma.StudentUncheckedUpdateWithoutContactsInput>;
};
export type StudentCreateWithoutSchoolInput = {
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    studentID: number;
    dateOfBirth: Date | string;
    gender: string;
    enrollment: boolean;
    contacts?: Prisma.StudentContactCreateNestedManyWithoutStudentInput;
};
export type StudentUncheckedCreateWithoutSchoolInput = {
    id?: number;
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    studentID: number;
    dateOfBirth: Date | string;
    gender: string;
    enrollment: boolean;
    contacts?: Prisma.StudentContactUncheckedCreateNestedManyWithoutStudentInput;
};
export type StudentCreateOrConnectWithoutSchoolInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutSchoolInput, Prisma.StudentUncheckedCreateWithoutSchoolInput>;
};
export type StudentCreateManySchoolInputEnvelope = {
    data: Prisma.StudentCreateManySchoolInput | Prisma.StudentCreateManySchoolInput[];
    skipDuplicates?: boolean;
};
export type StudentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.StudentWhereUniqueInput;
    update: Prisma.XOR<Prisma.StudentUpdateWithoutSchoolInput, Prisma.StudentUncheckedUpdateWithoutSchoolInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutSchoolInput, Prisma.StudentUncheckedCreateWithoutSchoolInput>;
};
export type StudentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: Prisma.StudentWhereUniqueInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutSchoolInput, Prisma.StudentUncheckedUpdateWithoutSchoolInput>;
};
export type StudentUpdateManyWithWhereWithoutSchoolInput = {
    where: Prisma.StudentScalarWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyWithoutSchoolInput>;
};
export type StudentScalarWhereInput = {
    AND?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
    OR?: Prisma.StudentScalarWhereInput[];
    NOT?: Prisma.StudentScalarWhereInput | Prisma.StudentScalarWhereInput[];
    id?: Prisma.IntFilter<"Student"> | number;
    firstname?: Prisma.StringFilter<"Student"> | string;
    lastname?: Prisma.StringFilter<"Student"> | string;
    preferredname?: Prisma.StringNullableFilter<"Student"> | string | null;
    studentID?: Prisma.IntFilter<"Student"> | number;
    dateOfBirth?: Prisma.DateTimeFilter<"Student"> | Date | string;
    gender?: Prisma.StringFilter<"Student"> | string;
    enrollment?: Prisma.BoolFilter<"Student"> | boolean;
    schoolId?: Prisma.IntFilter<"Student"> | number;
};
export type StudentCreateWithoutContactsInput = {
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    studentID: number;
    dateOfBirth: Date | string;
    gender: string;
    enrollment: boolean;
    school: Prisma.SchoolCreateNestedOneWithoutStudentsInput;
};
export type StudentUncheckedCreateWithoutContactsInput = {
    id?: number;
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    studentID: number;
    dateOfBirth: Date | string;
    gender: string;
    enrollment: boolean;
    schoolId: number;
};
export type StudentCreateOrConnectWithoutContactsInput = {
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateWithoutContactsInput, Prisma.StudentUncheckedCreateWithoutContactsInput>;
};
export type StudentUpsertWithoutContactsInput = {
    update: Prisma.XOR<Prisma.StudentUpdateWithoutContactsInput, Prisma.StudentUncheckedUpdateWithoutContactsInput>;
    create: Prisma.XOR<Prisma.StudentCreateWithoutContactsInput, Prisma.StudentUncheckedCreateWithoutContactsInput>;
    where?: Prisma.StudentWhereInput;
};
export type StudentUpdateToOneWithWhereWithoutContactsInput = {
    where?: Prisma.StudentWhereInput;
    data: Prisma.XOR<Prisma.StudentUpdateWithoutContactsInput, Prisma.StudentUncheckedUpdateWithoutContactsInput>;
};
export type StudentUpdateWithoutContactsInput = {
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentID?: Prisma.IntFieldUpdateOperationsInput | number;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollment?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    school?: Prisma.SchoolUpdateOneRequiredWithoutStudentsNestedInput;
};
export type StudentUncheckedUpdateWithoutContactsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentID?: Prisma.IntFieldUpdateOperationsInput | number;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollment?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    schoolId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type StudentCreateManySchoolInput = {
    id?: number;
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    studentID: number;
    dateOfBirth: Date | string;
    gender: string;
    enrollment: boolean;
};
export type StudentUpdateWithoutSchoolInput = {
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentID?: Prisma.IntFieldUpdateOperationsInput | number;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollment?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    contacts?: Prisma.StudentContactUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateWithoutSchoolInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentID?: Prisma.IntFieldUpdateOperationsInput | number;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollment?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    contacts?: Prisma.StudentContactUncheckedUpdateManyWithoutStudentNestedInput;
};
export type StudentUncheckedUpdateManyWithoutSchoolInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentID?: Prisma.IntFieldUpdateOperationsInput | number;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: Prisma.StringFieldUpdateOperationsInput | string;
    enrollment?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type StudentCountOutputType = {
    contacts: number;
};
export type StudentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contacts?: boolean | StudentCountOutputTypeCountContactsArgs;
};
export type StudentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentCountOutputTypeSelect<ExtArgs> | null;
};
export type StudentCountOutputTypeCountContactsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentContactWhereInput;
};
export type StudentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstname?: boolean;
    lastname?: boolean;
    preferredname?: boolean;
    studentID?: boolean;
    dateOfBirth?: boolean;
    gender?: boolean;
    enrollment?: boolean;
    schoolId?: boolean;
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    contacts?: boolean | Prisma.Student$contactsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["student"]>;
export type StudentSelectScalar = {
    id?: boolean;
    firstname?: boolean;
    lastname?: boolean;
    preferredname?: boolean;
    studentID?: boolean;
    dateOfBirth?: boolean;
    gender?: boolean;
    enrollment?: boolean;
    schoolId?: boolean;
};
export type StudentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "firstname" | "lastname" | "preferredname" | "studentID" | "dateOfBirth" | "gender" | "enrollment" | "schoolId", ExtArgs["result"]["student"]>;
export type StudentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    school?: boolean | Prisma.SchoolDefaultArgs<ExtArgs>;
    contacts?: boolean | Prisma.Student$contactsArgs<ExtArgs>;
    _count?: boolean | Prisma.StudentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $StudentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Student";
    objects: {
        school: Prisma.$SchoolPayload<ExtArgs>;
        contacts: Prisma.$StudentContactPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        studentID: number;
        dateOfBirth: Date;
        gender: string;
        enrollment: boolean;
        schoolId: number;
    }, ExtArgs["result"]["student"]>;
    composites: {};
};
export type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StudentPayload, S>;
export type StudentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StudentCountAggregateInputType | true;
};
export interface StudentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Student'];
        meta: {
            name: 'Student';
        };
    };
    findUnique<T extends StudentFindUniqueArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StudentFindFirstArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StudentFindManyArgs>(args?: Prisma.SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StudentCreateArgs>(args: Prisma.SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StudentCreateManyArgs>(args?: Prisma.SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends StudentDeleteArgs>(args: Prisma.SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StudentUpdateArgs>(args: Prisma.SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StudentDeleteManyArgs>(args?: Prisma.SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StudentUpdateManyArgs>(args: Prisma.SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends StudentUpsertArgs>(args: Prisma.SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StudentCountArgs>(args?: Prisma.Subset<T, StudentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StudentCountAggregateOutputType> : number>;
    aggregate<T extends StudentAggregateArgs>(args: Prisma.Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>;
    groupBy<T extends StudentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StudentGroupByArgs['orderBy'];
    } : {
        orderBy?: StudentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StudentFieldRefs;
}
export interface Prisma__StudentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    school<T extends Prisma.SchoolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SchoolDefaultArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    contacts<T extends Prisma.Student$contactsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Student$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StudentFieldRefs {
    readonly id: Prisma.FieldRef<"Student", 'Int'>;
    readonly firstname: Prisma.FieldRef<"Student", 'String'>;
    readonly lastname: Prisma.FieldRef<"Student", 'String'>;
    readonly preferredname: Prisma.FieldRef<"Student", 'String'>;
    readonly studentID: Prisma.FieldRef<"Student", 'Int'>;
    readonly dateOfBirth: Prisma.FieldRef<"Student", 'DateTime'>;
    readonly gender: Prisma.FieldRef<"Student", 'String'>;
    readonly enrollment: Prisma.FieldRef<"Student", 'Boolean'>;
    readonly schoolId: Prisma.FieldRef<"Student", 'Int'>;
}
export type StudentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where?: Prisma.StudentWhereInput;
    orderBy?: Prisma.StudentOrderByWithRelationInput | Prisma.StudentOrderByWithRelationInput[];
    cursor?: Prisma.StudentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentScalarFieldEnum | Prisma.StudentScalarFieldEnum[];
};
export type StudentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
};
export type StudentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StudentCreateManyInput | Prisma.StudentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StudentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StudentUpdateManyMutationInput, Prisma.StudentUncheckedUpdateManyInput>;
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type StudentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StudentCreateInput, Prisma.StudentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StudentUpdateInput, Prisma.StudentUncheckedUpdateInput>;
};
export type StudentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
    where: Prisma.StudentWhereUniqueInput;
};
export type StudentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentWhereInput;
    limit?: number;
};
export type Student$contactsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StudentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StudentSelect<ExtArgs> | null;
    omit?: Prisma.StudentOmit<ExtArgs> | null;
    include?: Prisma.StudentInclude<ExtArgs> | null;
};
