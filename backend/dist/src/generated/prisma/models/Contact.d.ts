import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContactModel = runtime.Types.Result.DefaultSelection<Prisma.$ContactPayload>;
export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null;
    _avg: ContactAvgAggregateOutputType | null;
    _sum: ContactSumAggregateOutputType | null;
    _min: ContactMinAggregateOutputType | null;
    _max: ContactMaxAggregateOutputType | null;
};
export type ContactAvgAggregateOutputType = {
    id: number | null;
};
export type ContactSumAggregateOutputType = {
    id: number | null;
};
export type ContactMinAggregateOutputType = {
    id: number | null;
    firstname: string | null;
    lastname: string | null;
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
export type ContactMaxAggregateOutputType = {
    id: number | null;
    firstname: string | null;
    lastname: string | null;
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
export type ContactCountAggregateOutputType = {
    id: number;
    firstname: number;
    lastname: number;
    preferredname: number;
    phoneNumber: number;
    mobileNumber: number;
    workPhone: number;
    email: number;
    address1: number;
    address2: number;
    city: number;
    state: number;
    zipCode: number;
    employer: number;
    occupation: number;
    _all: number;
};
export type ContactAvgAggregateInputType = {
    id?: true;
};
export type ContactSumAggregateInputType = {
    id?: true;
};
export type ContactMinAggregateInputType = {
    id?: true;
    firstname?: true;
    lastname?: true;
    preferredname?: true;
    phoneNumber?: true;
    mobileNumber?: true;
    workPhone?: true;
    email?: true;
    address1?: true;
    address2?: true;
    city?: true;
    state?: true;
    zipCode?: true;
    employer?: true;
    occupation?: true;
};
export type ContactMaxAggregateInputType = {
    id?: true;
    firstname?: true;
    lastname?: true;
    preferredname?: true;
    phoneNumber?: true;
    mobileNumber?: true;
    workPhone?: true;
    email?: true;
    address1?: true;
    address2?: true;
    city?: true;
    state?: true;
    zipCode?: true;
    employer?: true;
    occupation?: true;
};
export type ContactCountAggregateInputType = {
    id?: true;
    firstname?: true;
    lastname?: true;
    preferredname?: true;
    phoneNumber?: true;
    mobileNumber?: true;
    workPhone?: true;
    email?: true;
    address1?: true;
    address2?: true;
    city?: true;
    state?: true;
    zipCode?: true;
    employer?: true;
    occupation?: true;
    _all?: true;
};
export type ContactAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContactCountAggregateInputType;
    _avg?: ContactAvgAggregateInputType;
    _sum?: ContactSumAggregateInputType;
    _min?: ContactMinAggregateInputType;
    _max?: ContactMaxAggregateInputType;
};
export type GetContactAggregateType<T extends ContactAggregateArgs> = {
    [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContact[P]> : Prisma.GetScalarType<T[P], AggregateContact[P]>;
};
export type ContactGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithAggregationInput | Prisma.ContactOrderByWithAggregationInput[];
    by: Prisma.ContactScalarFieldEnum[] | Prisma.ContactScalarFieldEnum;
    having?: Prisma.ContactScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContactCountAggregateInputType | true;
    _avg?: ContactAvgAggregateInputType;
    _sum?: ContactSumAggregateInputType;
    _min?: ContactMinAggregateInputType;
    _max?: ContactMaxAggregateInputType;
};
export type ContactGroupByOutputType = {
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
    _count: ContactCountAggregateOutputType | null;
    _avg: ContactAvgAggregateOutputType | null;
    _sum: ContactSumAggregateOutputType | null;
    _min: ContactMinAggregateOutputType | null;
    _max: ContactMaxAggregateOutputType | null;
};
export type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContactGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContactGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContactGroupByOutputType[P]>;
}>>;
export type ContactWhereInput = {
    AND?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    OR?: Prisma.ContactWhereInput[];
    NOT?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    id?: Prisma.IntFilter<"Contact"> | number;
    firstname?: Prisma.StringFilter<"Contact"> | string;
    lastname?: Prisma.StringFilter<"Contact"> | string;
    preferredname?: Prisma.StringNullableFilter<"Contact"> | string | null;
    phoneNumber?: Prisma.StringNullableFilter<"Contact"> | string | null;
    mobileNumber?: Prisma.StringNullableFilter<"Contact"> | string | null;
    workPhone?: Prisma.StringNullableFilter<"Contact"> | string | null;
    email?: Prisma.StringNullableFilter<"Contact"> | string | null;
    address1?: Prisma.StringNullableFilter<"Contact"> | string | null;
    address2?: Prisma.StringNullableFilter<"Contact"> | string | null;
    city?: Prisma.StringNullableFilter<"Contact"> | string | null;
    state?: Prisma.StringNullableFilter<"Contact"> | string | null;
    zipCode?: Prisma.StringNullableFilter<"Contact"> | string | null;
    employer?: Prisma.StringNullableFilter<"Contact"> | string | null;
    occupation?: Prisma.StringNullableFilter<"Contact"> | string | null;
    students?: Prisma.StudentContactListRelationFilter;
};
export type ContactOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrderInput | Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    workPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    address1?: Prisma.SortOrderInput | Prisma.SortOrder;
    address2?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    zipCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    employer?: Prisma.SortOrderInput | Prisma.SortOrder;
    occupation?: Prisma.SortOrderInput | Prisma.SortOrder;
    students?: Prisma.StudentContactOrderByRelationAggregateInput;
    _relevance?: Prisma.ContactOrderByRelevanceInput;
};
export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    OR?: Prisma.ContactWhereInput[];
    NOT?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    firstname?: Prisma.StringFilter<"Contact"> | string;
    lastname?: Prisma.StringFilter<"Contact"> | string;
    preferredname?: Prisma.StringNullableFilter<"Contact"> | string | null;
    phoneNumber?: Prisma.StringNullableFilter<"Contact"> | string | null;
    mobileNumber?: Prisma.StringNullableFilter<"Contact"> | string | null;
    workPhone?: Prisma.StringNullableFilter<"Contact"> | string | null;
    email?: Prisma.StringNullableFilter<"Contact"> | string | null;
    address1?: Prisma.StringNullableFilter<"Contact"> | string | null;
    address2?: Prisma.StringNullableFilter<"Contact"> | string | null;
    city?: Prisma.StringNullableFilter<"Contact"> | string | null;
    state?: Prisma.StringNullableFilter<"Contact"> | string | null;
    zipCode?: Prisma.StringNullableFilter<"Contact"> | string | null;
    employer?: Prisma.StringNullableFilter<"Contact"> | string | null;
    occupation?: Prisma.StringNullableFilter<"Contact"> | string | null;
    students?: Prisma.StudentContactListRelationFilter;
}, "id">;
export type ContactOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrderInput | Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    workPhone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    address1?: Prisma.SortOrderInput | Prisma.SortOrder;
    address2?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    zipCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    employer?: Prisma.SortOrderInput | Prisma.SortOrder;
    occupation?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ContactCountOrderByAggregateInput;
    _avg?: Prisma.ContactAvgOrderByAggregateInput;
    _max?: Prisma.ContactMaxOrderByAggregateInput;
    _min?: Prisma.ContactMinOrderByAggregateInput;
    _sum?: Prisma.ContactSumOrderByAggregateInput;
};
export type ContactScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContactScalarWhereWithAggregatesInput | Prisma.ContactScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContactScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContactScalarWhereWithAggregatesInput | Prisma.ContactScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Contact"> | number;
    firstname?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    lastname?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    preferredname?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    phoneNumber?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    mobileNumber?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    workPhone?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    address1?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    address2?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    state?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    zipCode?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    employer?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    occupation?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
};
export type ContactCreateInput = {
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    phoneNumber?: string | null;
    mobileNumber?: string | null;
    workPhone?: string | null;
    email?: string | null;
    address1?: string | null;
    address2?: string | null;
    city?: string | null;
    state?: string | null;
    zipCode?: string | null;
    employer?: string | null;
    occupation?: string | null;
    students?: Prisma.StudentContactCreateNestedManyWithoutContactInput;
};
export type ContactUncheckedCreateInput = {
    id?: number;
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    phoneNumber?: string | null;
    mobileNumber?: string | null;
    workPhone?: string | null;
    email?: string | null;
    address1?: string | null;
    address2?: string | null;
    city?: string | null;
    state?: string | null;
    zipCode?: string | null;
    employer?: string | null;
    occupation?: string | null;
    students?: Prisma.StudentContactUncheckedCreateNestedManyWithoutContactInput;
};
export type ContactUpdateInput = {
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zipCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    students?: Prisma.StudentContactUpdateManyWithoutContactNestedInput;
};
export type ContactUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zipCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    students?: Prisma.StudentContactUncheckedUpdateManyWithoutContactNestedInput;
};
export type ContactCreateManyInput = {
    id?: number;
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    phoneNumber?: string | null;
    mobileNumber?: string | null;
    workPhone?: string | null;
    email?: string | null;
    address1?: string | null;
    address2?: string | null;
    city?: string | null;
    state?: string | null;
    zipCode?: string | null;
    employer?: string | null;
    occupation?: string | null;
};
export type ContactUpdateManyMutationInput = {
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zipCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ContactUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zipCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ContactOrderByRelevanceInput = {
    fields: Prisma.ContactOrderByRelevanceFieldEnum | Prisma.ContactOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ContactCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrder;
    workPhone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    address1?: Prisma.SortOrder;
    address2?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    employer?: Prisma.SortOrder;
    occupation?: Prisma.SortOrder;
};
export type ContactAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ContactMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrder;
    workPhone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    address1?: Prisma.SortOrder;
    address2?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    employer?: Prisma.SortOrder;
    occupation?: Prisma.SortOrder;
};
export type ContactMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    firstname?: Prisma.SortOrder;
    lastname?: Prisma.SortOrder;
    preferredname?: Prisma.SortOrder;
    phoneNumber?: Prisma.SortOrder;
    mobileNumber?: Prisma.SortOrder;
    workPhone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    address1?: Prisma.SortOrder;
    address2?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zipCode?: Prisma.SortOrder;
    employer?: Prisma.SortOrder;
    occupation?: Prisma.SortOrder;
};
export type ContactSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ContactScalarRelationFilter = {
    is?: Prisma.ContactWhereInput;
    isNot?: Prisma.ContactWhereInput;
};
export type ContactCreateNestedOneWithoutStudentsInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutStudentsInput, Prisma.ContactUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutStudentsInput;
    connect?: Prisma.ContactWhereUniqueInput;
};
export type ContactUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutStudentsInput, Prisma.ContactUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutStudentsInput;
    upsert?: Prisma.ContactUpsertWithoutStudentsInput;
    connect?: Prisma.ContactWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContactUpdateToOneWithWhereWithoutStudentsInput, Prisma.ContactUpdateWithoutStudentsInput>, Prisma.ContactUncheckedUpdateWithoutStudentsInput>;
};
export type ContactCreateWithoutStudentsInput = {
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    phoneNumber?: string | null;
    mobileNumber?: string | null;
    workPhone?: string | null;
    email?: string | null;
    address1?: string | null;
    address2?: string | null;
    city?: string | null;
    state?: string | null;
    zipCode?: string | null;
    employer?: string | null;
    occupation?: string | null;
};
export type ContactUncheckedCreateWithoutStudentsInput = {
    id?: number;
    firstname: string;
    lastname: string;
    preferredname?: string | null;
    phoneNumber?: string | null;
    mobileNumber?: string | null;
    workPhone?: string | null;
    email?: string | null;
    address1?: string | null;
    address2?: string | null;
    city?: string | null;
    state?: string | null;
    zipCode?: string | null;
    employer?: string | null;
    occupation?: string | null;
};
export type ContactCreateOrConnectWithoutStudentsInput = {
    where: Prisma.ContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactCreateWithoutStudentsInput, Prisma.ContactUncheckedCreateWithoutStudentsInput>;
};
export type ContactUpsertWithoutStudentsInput = {
    update: Prisma.XOR<Prisma.ContactUpdateWithoutStudentsInput, Prisma.ContactUncheckedUpdateWithoutStudentsInput>;
    create: Prisma.XOR<Prisma.ContactCreateWithoutStudentsInput, Prisma.ContactUncheckedCreateWithoutStudentsInput>;
    where?: Prisma.ContactWhereInput;
};
export type ContactUpdateToOneWithWhereWithoutStudentsInput = {
    where?: Prisma.ContactWhereInput;
    data: Prisma.XOR<Prisma.ContactUpdateWithoutStudentsInput, Prisma.ContactUncheckedUpdateWithoutStudentsInput>;
};
export type ContactUpdateWithoutStudentsInput = {
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zipCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ContactUncheckedUpdateWithoutStudentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    firstname?: Prisma.StringFieldUpdateOperationsInput | string;
    lastname?: Prisma.StringFieldUpdateOperationsInput | string;
    preferredname?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phoneNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workPhone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zipCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    employer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    occupation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ContactCountOutputType = {
    students: number;
};
export type ContactCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    students?: boolean | ContactCountOutputTypeCountStudentsArgs;
};
export type ContactCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactCountOutputTypeSelect<ExtArgs> | null;
};
export type ContactCountOutputTypeCountStudentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StudentContactWhereInput;
};
export type ContactSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    firstname?: boolean;
    lastname?: boolean;
    preferredname?: boolean;
    phoneNumber?: boolean;
    mobileNumber?: boolean;
    workPhone?: boolean;
    email?: boolean;
    address1?: boolean;
    address2?: boolean;
    city?: boolean;
    state?: boolean;
    zipCode?: boolean;
    employer?: boolean;
    occupation?: boolean;
    students?: boolean | Prisma.Contact$studentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ContactCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contact"]>;
export type ContactSelectScalar = {
    id?: boolean;
    firstname?: boolean;
    lastname?: boolean;
    preferredname?: boolean;
    phoneNumber?: boolean;
    mobileNumber?: boolean;
    workPhone?: boolean;
    email?: boolean;
    address1?: boolean;
    address2?: boolean;
    city?: boolean;
    state?: boolean;
    zipCode?: boolean;
    employer?: boolean;
    occupation?: boolean;
};
export type ContactOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "firstname" | "lastname" | "preferredname" | "phoneNumber" | "mobileNumber" | "workPhone" | "email" | "address1" | "address2" | "city" | "state" | "zipCode" | "employer" | "occupation", ExtArgs["result"]["contact"]>;
export type ContactInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    students?: boolean | Prisma.Contact$studentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ContactCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ContactPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Contact";
    objects: {
        students: Prisma.$StudentContactPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
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
    }, ExtArgs["result"]["contact"]>;
    composites: {};
};
export type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContactPayload, S>;
export type ContactCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContactCountAggregateInputType | true;
};
export interface ContactDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Contact'];
        meta: {
            name: 'Contact';
        };
    };
    findUnique<T extends ContactFindUniqueArgs>(args: Prisma.SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContactFindFirstArgs>(args?: Prisma.SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContactFindManyArgs>(args?: Prisma.SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContactCreateArgs>(args: Prisma.SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContactCreateManyArgs>(args?: Prisma.SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ContactDeleteArgs>(args: Prisma.SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContactUpdateArgs>(args: Prisma.SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContactDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContactUpdateManyArgs>(args: Prisma.SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ContactUpsertArgs>(args: Prisma.SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContactCountArgs>(args?: Prisma.Subset<T, ContactCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContactCountAggregateOutputType> : number>;
    aggregate<T extends ContactAggregateArgs>(args: Prisma.Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>;
    groupBy<T extends ContactGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContactGroupByArgs['orderBy'];
    } : {
        orderBy?: ContactGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContactFieldRefs;
}
export interface Prisma__ContactClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    students<T extends Prisma.Contact$studentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Contact$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StudentContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContactFieldRefs {
    readonly id: Prisma.FieldRef<"Contact", 'Int'>;
    readonly firstname: Prisma.FieldRef<"Contact", 'String'>;
    readonly lastname: Prisma.FieldRef<"Contact", 'String'>;
    readonly preferredname: Prisma.FieldRef<"Contact", 'String'>;
    readonly phoneNumber: Prisma.FieldRef<"Contact", 'String'>;
    readonly mobileNumber: Prisma.FieldRef<"Contact", 'String'>;
    readonly workPhone: Prisma.FieldRef<"Contact", 'String'>;
    readonly email: Prisma.FieldRef<"Contact", 'String'>;
    readonly address1: Prisma.FieldRef<"Contact", 'String'>;
    readonly address2: Prisma.FieldRef<"Contact", 'String'>;
    readonly city: Prisma.FieldRef<"Contact", 'String'>;
    readonly state: Prisma.FieldRef<"Contact", 'String'>;
    readonly zipCode: Prisma.FieldRef<"Contact", 'String'>;
    readonly employer: Prisma.FieldRef<"Contact", 'String'>;
    readonly occupation: Prisma.FieldRef<"Contact", 'String'>;
}
export type ContactFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactScalarFieldEnum | Prisma.ContactScalarFieldEnum[];
};
export type ContactFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactScalarFieldEnum | Prisma.ContactScalarFieldEnum[];
};
export type ContactFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactScalarFieldEnum | Prisma.ContactScalarFieldEnum[];
};
export type ContactCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactCreateInput, Prisma.ContactUncheckedCreateInput>;
};
export type ContactCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContactCreateManyInput | Prisma.ContactCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContactUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactUpdateInput, Prisma.ContactUncheckedUpdateInput>;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContactUpdateManyMutationInput, Prisma.ContactUncheckedUpdateManyInput>;
    where?: Prisma.ContactWhereInput;
    limit?: number;
};
export type ContactUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactCreateInput, Prisma.ContactUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContactUpdateInput, Prisma.ContactUncheckedUpdateInput>;
};
export type ContactDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactWhereInput;
    limit?: number;
};
export type Contact$studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContactDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
};
