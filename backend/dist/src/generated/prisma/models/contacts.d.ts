import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type contactsModel = runtime.Types.Result.DefaultSelection<Prisma.$contactsPayload>;
export type AggregateContacts = {
    _count: ContactsCountAggregateOutputType | null;
    _avg: ContactsAvgAggregateOutputType | null;
    _sum: ContactsSumAggregateOutputType | null;
    _min: ContactsMinAggregateOutputType | null;
    _max: ContactsMaxAggregateOutputType | null;
};
export type ContactsAvgAggregateOutputType = {
    id: number | null;
    studentAssignment: number | null;
};
export type ContactsSumAggregateOutputType = {
    id: number | null;
    studentAssignment: number | null;
};
export type ContactsMinAggregateOutputType = {
    id: number | null;
    firstname: string | null;
    lastname: string | null;
    preferredname: string | null;
    phoneNumber: string | null;
    email: string | null;
    studentAssignment: number | null;
};
export type ContactsMaxAggregateOutputType = {
    id: number | null;
    firstname: string | null;
    lastname: string | null;
    preferredname: string | null;
    phoneNumber: string | null;
    email: string | null;
    studentAssignment: number | null;
};
export type ContactsCountAggregateOutputType = {
    id: number;
    firstname: number;
    lastname: number;
    preferredname: number;
    phoneNumber: number;
    email: number;
    studentAssignment: number;
    _all: number;
};
export type ContactsAvgAggregateInputType = {
    id?: true;
    studentAssignment?: true;
};
export type ContactsSumAggregateInputType = {
    id?: true;
    studentAssignment?: true;
};
export type ContactsMinAggregateInputType = {
    id?: true;
    firstname?: true;
    lastname?: true;
    preferredname?: true;
    phoneNumber?: true;
    email?: true;
    studentAssignment?: true;
};
export type ContactsMaxAggregateInputType = {
    id?: true;
    firstname?: true;
    lastname?: true;
    preferredname?: true;
    phoneNumber?: true;
    email?: true;
    studentAssignment?: true;
};
export type ContactsCountAggregateInputType = {
    id?: true;
    firstname?: true;
    lastname?: true;
    preferredname?: true;
    phoneNumber?: true;
    email?: true;
    studentAssignment?: true;
    _all?: true;
};
export type ContactsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contactsWhereInput;
    orderBy?: Prisma.contactsOrderByWithRelationInput | Prisma.contactsOrderByWithRelationInput[];
    cursor?: Prisma.contactsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContactsCountAggregateInputType;
    _avg?: ContactsAvgAggregateInputType;
    _sum?: ContactsSumAggregateInputType;
    _min?: ContactsMinAggregateInputType;
    _max?: ContactsMaxAggregateInputType;
};
export type GetContactsAggregateType<T extends ContactsAggregateArgs> = {
    [P in keyof T & keyof AggregateContacts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContacts[P]> : Prisma.GetScalarType<T[P], AggregateContacts[P]>;
};
export type contactsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contactsWhereInput;
    orderBy?: Prisma.contactsOrderByWithAggregationInput | Prisma.contactsOrderByWithAggregationInput[];
    by: Prisma.ContactsScalarFieldEnum[] | Prisma.ContactsScalarFieldEnum;
    having?: Prisma.contactsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContactsCountAggregateInputType | true;
    _avg?: ContactsAvgAggregateInputType;
    _sum?: ContactsSumAggregateInputType;
    _min?: ContactsMinAggregateInputType;
    _max?: ContactsMaxAggregateInputType;
};
export type ContactsGroupByOutputType = {
    id: number;
    firstname: string;
    lastname: string;
    preferredname: string | null;
    phoneNumber: string | null;
    email: string | null;
    studentAssignment: number;
    _count: ContactsCountAggregateOutputType | null;
    _avg: ContactsAvgAggregateOutputType | null;
    _sum: ContactsSumAggregateOutputType | null;
    _min: ContactsMinAggregateOutputType | null;
    _max: ContactsMaxAggregateOutputType | null;
};
export type GetContactsGroupByPayload<T extends contactsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContactsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContactsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContactsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContactsGroupByOutputType[P]>;
}>>;
export type contactsWhereInput = {
    AND?: Prisma.contactsWhereInput | Prisma.contactsWhereInput[];
    OR?: Prisma.contactsWhereInput[];
    NOT?: Prisma.contactsWhereInput | Prisma.contactsWhereInput[];
    id?: Prisma.IntFilter<"contacts"> | number;
    firstname?: Prisma.StringFilter<"contacts"> | string;
    lastname?: Prisma.StringFilter<"contacts"> | string;
    preferredname?: Prisma.StringNullableFilter<"contacts"> | string | null;
    phoneNumber?: Prisma.StringNullableFilter<"contacts"> | string | null;
    email?: Prisma.StringNullableFilter<"contacts"> | string | null;
    studentAssignment?: Prisma.IntFilter<"contacts"> | number;
    student?: Prisma.XOR<Prisma.StudentsScalarRelationFilter, Prisma.studentsWhereInput>;
};
export type contactsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrderInput | Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    studentAssignment?: Prisma.SortOrder;
    student?: Prisma.studentsOrderByWithRelationInput;
    _relevance?: Prisma.contactsOrderByRelevanceInput;
};
export type contactsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.contactsWhereInput | Prisma.contactsWhereInput[];
    OR?: Prisma.contactsWhereInput[];
    NOT?: Prisma.contactsWhereInput | Prisma.contactsWhereInput[];
    firstname?: Prisma.StringFilter<"contacts"> | string;
    lastname?: Prisma.StringFilter<"contacts"> | string;
    preferredname?: Prisma.StringNullableFilter<"contacts"> | string | null;
    phoneNumber?: Prisma.StringNullableFilter<"contacts"> | string | null;
    email?: Prisma.StringNullableFilter<"contacts"> | string | null;
    studentAssignment?: Prisma.IntFilter<"contacts"> | number;
    student?: Prisma.XOR<Prisma.StudentsScalarRelationFilter, Prisma.studentsWhereInput>;
}, "id">;
export type contactsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrderInput | Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    studentAssignment?: Prisma.SortOrder;
    _count?: Prisma.contactsCountOrderByAggregateInput;
    _avg?: Prisma.contactsAvgOrderByAggregateInput;
    _max?: Prisma.contactsMaxOrderByAggregateInput;
    _min?: Prisma.contactsMinOrderByAggregateInput;
    _sum?: Prisma.contactsSumOrderByAggregateInput;
};
export type contactsScalarWhereWithAggregatesInput = {
    AND?: Prisma.contactsScalarWhereWithAggregatesInput | Prisma.contactsScalarWhereWithAggregatesInput[];
    OR?: Prisma.contactsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.contactsScalarWhereWithAggregatesInput | Prisma.contactsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"contacts"> | number;
    firstname?: Prisma.StringWithAggregatesFilter<"contacts"> | string;
    lastname?: Prisma.StringWithAggregatesFilter<"contacts"> | string;
    preferredname?: Prisma.StringNullableWithAggregatesFilter<"contacts"> | string | null;
    phoneNumber?: Prisma.StringNullableWithAggregatesFilter<"contacts"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"contacts"> | string | null;
    studentAssignment?: Prisma.IntWithAggregatesFilter<"contacts"> | number;
};
export type contactsCreateInput = {
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    phoneNumber?: string | null;
    email?: string | null;
    student: Prisma.studentsCreateNestedOneWithoutContactsInput;
};
export type contactsUncheckedCreateInput = {
    id?: number;
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    phoneNumber?: string | null;
    email?: string | null;
    studentAssignment: number;
};
export type contactsUpdateInput = {
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    student?: Prisma.studentsUpdateOneRequiredWithoutContactsNestedInput;
};
export type contactsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentAssignment?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type contactsCreateManyInput = {
    id?: number;
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    phoneNumber?: string | null;
    email?: string | null;
    studentAssignment: number;
};
export type contactsUpdateManyMutationInput = {
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type contactsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentAssignment?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ContactsListRelationFilter = {
    every?: Prisma.contactsWhereInput;
    some?: Prisma.contactsWhereInput;
    none?: Prisma.contactsWhereInput;
};
export type contactsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type contactsOrderByRelevanceInput = {
    fields: Prisma.contactsOrderByRelevanceFieldEnum | Prisma.contactsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type contactsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    studentAssignment?: Prisma.SortOrder;
};
export type contactsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentAssignment?: Prisma.SortOrder;
};
export type contactsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    studentAssignment?: Prisma.SortOrder;
};
export type contactsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    studentAssignment?: Prisma.SortOrder;
};
export type contactsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    studentAssignment?: Prisma.SortOrder;
};
export type contactsCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.contactsCreateWithoutStudentInput, Prisma.contactsUncheckedCreateWithoutStudentInput> | Prisma.contactsCreateWithoutStudentInput[] | Prisma.contactsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.contactsCreateOrConnectWithoutStudentInput | Prisma.contactsCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.contactsCreateManyStudentInputEnvelope;
    connect?: Prisma.contactsWhereUniqueInput | Prisma.contactsWhereUniqueInput[];
};
export type contactsUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.contactsCreateWithoutStudentInput, Prisma.contactsUncheckedCreateWithoutStudentInput> | Prisma.contactsCreateWithoutStudentInput[] | Prisma.contactsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.contactsCreateOrConnectWithoutStudentInput | Prisma.contactsCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.contactsCreateManyStudentInputEnvelope;
    connect?: Prisma.contactsWhereUniqueInput | Prisma.contactsWhereUniqueInput[];
};
export type contactsUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.contactsCreateWithoutStudentInput, Prisma.contactsUncheckedCreateWithoutStudentInput> | Prisma.contactsCreateWithoutStudentInput[] | Prisma.contactsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.contactsCreateOrConnectWithoutStudentInput | Prisma.contactsCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.contactsUpsertWithWhereUniqueWithoutStudentInput | Prisma.contactsUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.contactsCreateManyStudentInputEnvelope;
    set?: Prisma.contactsWhereUniqueInput | Prisma.contactsWhereUniqueInput[];
    disconnect?: Prisma.contactsWhereUniqueInput | Prisma.contactsWhereUniqueInput[];
    delete?: Prisma.contactsWhereUniqueInput | Prisma.contactsWhereUniqueInput[];
    connect?: Prisma.contactsWhereUniqueInput | Prisma.contactsWhereUniqueInput[];
    update?: Prisma.contactsUpdateWithWhereUniqueWithoutStudentInput | Prisma.contactsUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.contactsUpdateManyWithWhereWithoutStudentInput | Prisma.contactsUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.contactsScalarWhereInput | Prisma.contactsScalarWhereInput[];
};
export type contactsUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.contactsCreateWithoutStudentInput, Prisma.contactsUncheckedCreateWithoutStudentInput> | Prisma.contactsCreateWithoutStudentInput[] | Prisma.contactsUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.contactsCreateOrConnectWithoutStudentInput | Prisma.contactsCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.contactsUpsertWithWhereUniqueWithoutStudentInput | Prisma.contactsUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.contactsCreateManyStudentInputEnvelope;
    set?: Prisma.contactsWhereUniqueInput | Prisma.contactsWhereUniqueInput[];
    disconnect?: Prisma.contactsWhereUniqueInput | Prisma.contactsWhereUniqueInput[];
    delete?: Prisma.contactsWhereUniqueInput | Prisma.contactsWhereUniqueInput[];
    connect?: Prisma.contactsWhereUniqueInput | Prisma.contactsWhereUniqueInput[];
    update?: Prisma.contactsUpdateWithWhereUniqueWithoutStudentInput | Prisma.contactsUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.contactsUpdateManyWithWhereWithoutStudentInput | Prisma.contactsUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.contactsScalarWhereInput | Prisma.contactsScalarWhereInput[];
};
export type contactsCreateWithoutStudentInput = {
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    phoneNumber?: string | null;
    email?: string | null;
};
export type contactsUncheckedCreateWithoutStudentInput = {
    id?: number;
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    phoneNumber?: string | null;
    email?: string | null;
};
export type contactsCreateOrConnectWithoutStudentInput = {
    where: Prisma.contactsWhereUniqueInput;
    create: Prisma.XOR<Prisma.contactsCreateWithoutStudentInput, Prisma.contactsUncheckedCreateWithoutStudentInput>;
};
export type contactsCreateManyStudentInputEnvelope = {
    data: Prisma.contactsCreateManyStudentInput | Prisma.contactsCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type contactsUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.contactsWhereUniqueInput;
    update: Prisma.XOR<Prisma.contactsUpdateWithoutStudentInput, Prisma.contactsUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.contactsCreateWithoutStudentInput, Prisma.contactsUncheckedCreateWithoutStudentInput>;
};
export type contactsUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.contactsWhereUniqueInput;
    data: Prisma.XOR<Prisma.contactsUpdateWithoutStudentInput, Prisma.contactsUncheckedUpdateWithoutStudentInput>;
};
export type contactsUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.contactsScalarWhereInput;
    data: Prisma.XOR<Prisma.contactsUpdateManyMutationInput, Prisma.contactsUncheckedUpdateManyWithoutStudentInput>;
};
export type contactsScalarWhereInput = {
    AND?: Prisma.contactsScalarWhereInput | Prisma.contactsScalarWhereInput[];
    OR?: Prisma.contactsScalarWhereInput[];
    NOT?: Prisma.contactsScalarWhereInput | Prisma.contactsScalarWhereInput[];
    id?: Prisma.IntFilter<"contacts"> | number;
    firstname?: Prisma.StringFilter<"contacts"> | string;
    lastname?: Prisma.StringFilter<"contacts"> | string;
    preferredname?: Prisma.StringNullableFilter<"contacts"> | string | null;
    phoneNumber?: Prisma.StringNullableFilter<"contacts"> | string | null;
    email?: Prisma.StringNullableFilter<"contacts"> | string | null;
    studentAssignment?: Prisma.IntFilter<"contacts"> | number;
};
export type contactsCreateManyStudentInput = {
    id?: number;
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    phoneNumber?: string | null;
    email?: string | null;
};
export type contactsUpdateWithoutStudentInput = {
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type contactsUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type contactsUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type contactsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstname?: boolean;
    lastname?: boolean;
    preferredname?: boolean;
    phoneNumber?: boolean;
    email?: boolean;
    studentAssignment?: boolean;
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contacts"]>;
export type contactsSelectScalar = {
    id?: boolean;
    firstname?: boolean;
    lastname?: boolean;
    preferredname?: boolean;
    phoneNumber?: boolean;
    email?: boolean;
    studentAssignment?: boolean;
};
export type contactsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "firstname" | "lastname" | "preferredname" | "phoneNumber" | "email" | "studentAssignment", ExtArgs["result"]["contacts"]>;
export type contactsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    student?: boolean | Prisma.studentsDefaultArgs<ExtArgs>;
};
export type $contactsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "contacts";
    objects: {
        student: Prisma.$studentsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        phoneNumber: string | null;
        email: string | null;
        studentAssignment: number;
    }, ExtArgs["result"]["contacts"]>;
    composites: {};
};
export type contactsGetPayload<S extends boolean | null | undefined | contactsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$contactsPayload, S>;
export type contactsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<contactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContactsCountAggregateInputType | true;
};
export interface contactsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['contacts'];
        meta: {
            name: 'contacts';
        };
    };
    findUnique<T extends contactsFindUniqueArgs>(args: Prisma.SelectSubset<T, contactsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__contactsClient<runtime.Types.Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends contactsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, contactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__contactsClient<runtime.Types.Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends contactsFindFirstArgs>(args?: Prisma.SelectSubset<T, contactsFindFirstArgs<ExtArgs>>): Prisma.Prisma__contactsClient<runtime.Types.Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends contactsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, contactsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__contactsClient<runtime.Types.Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends contactsFindManyArgs>(args?: Prisma.SelectSubset<T, contactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends contactsCreateArgs>(args: Prisma.SelectSubset<T, contactsCreateArgs<ExtArgs>>): Prisma.Prisma__contactsClient<runtime.Types.Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends contactsCreateManyArgs>(args?: Prisma.SelectSubset<T, contactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends contactsDeleteArgs>(args: Prisma.SelectSubset<T, contactsDeleteArgs<ExtArgs>>): Prisma.Prisma__contactsClient<runtime.Types.Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends contactsUpdateArgs>(args: Prisma.SelectSubset<T, contactsUpdateArgs<ExtArgs>>): Prisma.Prisma__contactsClient<runtime.Types.Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends contactsDeleteManyArgs>(args?: Prisma.SelectSubset<T, contactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends contactsUpdateManyArgs>(args: Prisma.SelectSubset<T, contactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends contactsUpsertArgs>(args: Prisma.SelectSubset<T, contactsUpsertArgs<ExtArgs>>): Prisma.Prisma__contactsClient<runtime.Types.Result.GetResult<Prisma.$contactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends contactsCountArgs>(args?: Prisma.Subset<T, contactsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContactsCountAggregateOutputType> : number>;
    aggregate<T extends ContactsAggregateArgs>(args: Prisma.Subset<T, ContactsAggregateArgs>): Prisma.PrismaPromise<GetContactsAggregateType<T>>;
    groupBy<T extends contactsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: contactsGroupByArgs['orderBy'];
    } : {
        orderBy?: contactsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, contactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: contactsFieldRefs;
}
export interface Prisma__contactsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    student<T extends Prisma.studentsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.studentsDefaultArgs<ExtArgs>>): Prisma.Prisma__studentsClient<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface contactsFieldRefs {
    readonly id: Prisma.FieldRef<"contacts", 'Int'>;
    readonly firstname: Prisma.FieldRef<"contacts", 'String'>;
    readonly lastname: Prisma.FieldRef<"contacts", 'String'>;
    readonly preferredname: Prisma.FieldRef<"contacts", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"contacts", 'String'>;
    readonly email: Prisma.FieldRef<"contacts", 'String'>;
    readonly studentAssignment: Prisma.FieldRef<"contacts", 'Int'>;
}
export type contactsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contactsSelect<ExtArgs> | null;
    omit?: Prisma.contactsOmit<ExtArgs> | null;
    include?: Prisma.contactsInclude<ExtArgs> | null;
    where: Prisma.contactsWhereUniqueInput;
};
export type contactsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contactsSelect<ExtArgs> | null;
    omit?: Prisma.contactsOmit<ExtArgs> | null;
    include?: Prisma.contactsInclude<ExtArgs> | null;
    where: Prisma.contactsWhereUniqueInput;
};
export type contactsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contactsSelect<ExtArgs> | null;
    omit?: Prisma.contactsOmit<ExtArgs> | null;
    include?: Prisma.contactsInclude<ExtArgs> | null;
    where?: Prisma.contactsWhereInput;
    orderBy?: Prisma.contactsOrderByWithRelationInput | Prisma.contactsOrderByWithRelationInput[];
    cursor?: Prisma.contactsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactsScalarFieldEnum | Prisma.ContactsScalarFieldEnum[];
};
export type contactsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contactsSelect<ExtArgs> | null;
    omit?: Prisma.contactsOmit<ExtArgs> | null;
    include?: Prisma.contactsInclude<ExtArgs> | null;
    where?: Prisma.contactsWhereInput;
    orderBy?: Prisma.contactsOrderByWithRelationInput | Prisma.contactsOrderByWithRelationInput[];
    cursor?: Prisma.contactsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactsScalarFieldEnum | Prisma.ContactsScalarFieldEnum[];
};
export type contactsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contactsSelect<ExtArgs> | null;
    omit?: Prisma.contactsOmit<ExtArgs> | null;
    include?: Prisma.contactsInclude<ExtArgs> | null;
    where?: Prisma.contactsWhereInput;
    orderBy?: Prisma.contactsOrderByWithRelationInput | Prisma.contactsOrderByWithRelationInput[];
    cursor?: Prisma.contactsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactsScalarFieldEnum | Prisma.ContactsScalarFieldEnum[];
};
export type contactsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contactsSelect<ExtArgs> | null;
    omit?: Prisma.contactsOmit<ExtArgs> | null;
    include?: Prisma.contactsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contactsCreateInput, Prisma.contactsUncheckedCreateInput>;
};
export type contactsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.contactsCreateManyInput | Prisma.contactsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type contactsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contactsSelect<ExtArgs> | null;
    omit?: Prisma.contactsOmit<ExtArgs> | null;
    include?: Prisma.contactsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contactsUpdateInput, Prisma.contactsUncheckedUpdateInput>;
    where: Prisma.contactsWhereUniqueInput;
};
export type contactsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.contactsUpdateManyMutationInput, Prisma.contactsUncheckedUpdateManyInput>;
    where?: Prisma.contactsWhereInput;
    limit?: number;
};
export type contactsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contactsSelect<ExtArgs> | null;
    omit?: Prisma.contactsOmit<ExtArgs> | null;
    include?: Prisma.contactsInclude<ExtArgs> | null;
    where: Prisma.contactsWhereUniqueInput;
    create: Prisma.XOR<Prisma.contactsCreateInput, Prisma.contactsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.contactsUpdateInput, Prisma.contactsUncheckedUpdateInput>;
};
export type contactsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contactsSelect<ExtArgs> | null;
    omit?: Prisma.contactsOmit<ExtArgs> | null;
    include?: Prisma.contactsInclude<ExtArgs> | null;
    where: Prisma.contactsWhereUniqueInput;
};
export type contactsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contactsWhereInput;
    limit?: number;
};
export type contactsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contactsSelect<ExtArgs> | null;
    omit?: Prisma.contactsOmit<ExtArgs> | null;
    include?: Prisma.contactsInclude<ExtArgs> | null;
};
