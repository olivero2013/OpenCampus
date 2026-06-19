import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SchoolModel = runtime.Types.Result.DefaultSelection<Prisma.$SchoolPayload>;
export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null;
    _avg: SchoolAvgAggregateOutputType | null;
    _sum: SchoolSumAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
};
export type SchoolAvgAggregateOutputType = {
    id: number | null;
};
export type SchoolSumAggregateOutputType = {
    id: number | null;
};
export type SchoolMinAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type SchoolMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type SchoolCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type SchoolAvgAggregateInputType = {
    id?: true;
};
export type SchoolSumAggregateInputType = {
    id?: true;
};
export type SchoolMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type SchoolMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type SchoolCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type SchoolAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithRelationInput | Prisma.SchoolOrderByWithRelationInput[];
    cursor?: Prisma.SchoolWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SchoolCountAggregateInputType;
    _avg?: SchoolAvgAggregateInputType;
    _sum?: SchoolSumAggregateInputType;
    _min?: SchoolMinAggregateInputType;
    _max?: SchoolMaxAggregateInputType;
};
export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
    [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSchool[P]> : Prisma.GetScalarType<T[P], AggregateSchool[P]>;
};
export type SchoolGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithAggregationInput | Prisma.SchoolOrderByWithAggregationInput[];
    by: Prisma.SchoolScalarFieldEnum[] | Prisma.SchoolScalarFieldEnum;
    having?: Prisma.SchoolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SchoolCountAggregateInputType | true;
    _avg?: SchoolAvgAggregateInputType;
    _sum?: SchoolSumAggregateInputType;
    _min?: SchoolMinAggregateInputType;
    _max?: SchoolMaxAggregateInputType;
};
export type SchoolGroupByOutputType = {
    id: number;
    name: string;
    _count: SchoolCountAggregateOutputType | null;
    _avg: SchoolAvgAggregateOutputType | null;
    _sum: SchoolSumAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
};
export type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SchoolGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SchoolGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SchoolGroupByOutputType[P]>;
}>>;
export type SchoolWhereInput = {
    AND?: Prisma.SchoolWhereInput | Prisma.SchoolWhereInput[];
    OR?: Prisma.SchoolWhereInput[];
    NOT?: Prisma.SchoolWhereInput | Prisma.SchoolWhereInput[];
    id?: Prisma.IntFilter<"School"> | number;
    name?: Prisma.StringFilter<"School"> | string;
    students?: Prisma.StudentsListRelationFilter;
};
export type SchoolOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    students?: Prisma.studentsOrderByRelationAggregateInput;
    _relevance?: Prisma.SchoolOrderByRelevanceInput;
};
export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SchoolWhereInput | Prisma.SchoolWhereInput[];
    OR?: Prisma.SchoolWhereInput[];
    NOT?: Prisma.SchoolWhereInput | Prisma.SchoolWhereInput[];
    name?: Prisma.StringFilter<"School"> | string;
    students?: Prisma.StudentsListRelationFilter;
}, "id">;
export type SchoolOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.SchoolCountOrderByAggregateInput;
    _avg?: Prisma.SchoolAvgOrderByAggregateInput;
    _max?: Prisma.SchoolMaxOrderByAggregateInput;
    _min?: Prisma.SchoolMinOrderByAggregateInput;
    _sum?: Prisma.SchoolSumOrderByAggregateInput;
};
export type SchoolScalarWhereWithAggregatesInput = {
    AND?: Prisma.SchoolScalarWhereWithAggregatesInput | Prisma.SchoolScalarWhereWithAggregatesInput[];
    OR?: Prisma.SchoolScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SchoolScalarWhereWithAggregatesInput | Prisma.SchoolScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"School"> | number;
    name?: Prisma.StringWithAggregatesFilter<"School"> | string;
};
export type SchoolCreateInput = {
    name: string;
    students?: Prisma.studentsCreateNestedManyWithoutSchoolInput;
};
export type SchoolUncheckedCreateInput = {
    id?: number;
    name: string;
    students?: Prisma.studentsUncheckedCreateNestedManyWithoutSchoolInput;
};
export type SchoolUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    students?: Prisma.studentsUpdateManyWithoutSchoolNestedInput;
};
export type SchoolUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    students?: Prisma.studentsUncheckedUpdateManyWithoutSchoolNestedInput;
};
export type SchoolCreateManyInput = {
    id?: number;
    name: string;
};
export type SchoolUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SchoolUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SchoolScalarRelationFilter = {
    is?: Prisma.SchoolWhereInput;
    isNot?: Prisma.SchoolWhereInput;
};
export type SchoolOrderByRelevanceInput = {
    fields: Prisma.SchoolOrderByRelevanceFieldEnum | Prisma.SchoolOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type SchoolCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type SchoolAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type SchoolMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type SchoolMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type SchoolSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type SchoolCreateNestedOneWithoutStudentsInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutStudentsInput, Prisma.SchoolUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutStudentsInput;
    connect?: Prisma.SchoolWhereUniqueInput;
};
export type SchoolUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: Prisma.XOR<Prisma.SchoolCreateWithoutStudentsInput, Prisma.SchoolUncheckedCreateWithoutStudentsInput>;
    connectOrCreate?: Prisma.SchoolCreateOrConnectWithoutStudentsInput;
    upsert?: Prisma.SchoolUpsertWithoutStudentsInput;
    connect?: Prisma.SchoolWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SchoolUpdateToOneWithWhereWithoutStudentsInput, Prisma.SchoolUpdateWithoutStudentsInput>, Prisma.SchoolUncheckedUpdateWithoutStudentsInput>;
};
export type SchoolCreateWithoutStudentsInput = {
    name: string;
};
export type SchoolUncheckedCreateWithoutStudentsInput = {
    id?: number;
    name: string;
};
export type SchoolCreateOrConnectWithoutStudentsInput = {
    where: Prisma.SchoolWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutStudentsInput, Prisma.SchoolUncheckedCreateWithoutStudentsInput>;
};
export type SchoolUpsertWithoutStudentsInput = {
    update: Prisma.XOR<Prisma.SchoolUpdateWithoutStudentsInput, Prisma.SchoolUncheckedUpdateWithoutStudentsInput>;
    create: Prisma.XOR<Prisma.SchoolCreateWithoutStudentsInput, Prisma.SchoolUncheckedCreateWithoutStudentsInput>;
    where?: Prisma.SchoolWhereInput;
};
export type SchoolUpdateToOneWithWhereWithoutStudentsInput = {
    where?: Prisma.SchoolWhereInput;
    data: Prisma.XOR<Prisma.SchoolUpdateWithoutStudentsInput, Prisma.SchoolUncheckedUpdateWithoutStudentsInput>;
};
export type SchoolUpdateWithoutStudentsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SchoolUncheckedUpdateWithoutStudentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SchoolCountOutputType = {
    students: number;
};
export type SchoolCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    students?: boolean | SchoolCountOutputTypeCountStudentsArgs;
};
export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolCountOutputTypeSelect<ExtArgs> | null;
};
export type SchoolCountOutputTypeCountStudentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.studentsWhereInput;
};
export type SchoolSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    students?: boolean | Prisma.School$studentsArgs<ExtArgs>;
    _count?: boolean | Prisma.SchoolCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["school"]>;
export type SchoolSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type SchoolOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["school"]>;
export type SchoolInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    students?: boolean | Prisma.School$studentsArgs<ExtArgs>;
    _count?: boolean | Prisma.SchoolCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $SchoolPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "School";
    objects: {
        students: Prisma.$studentsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
    }, ExtArgs["result"]["school"]>;
    composites: {};
};
export type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SchoolPayload, S>;
export type SchoolCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SchoolCountAggregateInputType | true;
};
export interface SchoolDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['School'];
        meta: {
            name: 'School';
        };
    };
    findUnique<T extends SchoolFindUniqueArgs>(args: Prisma.SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SchoolFindFirstArgs>(args?: Prisma.SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SchoolFindManyArgs>(args?: Prisma.SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SchoolCreateArgs>(args: Prisma.SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SchoolCreateManyArgs>(args?: Prisma.SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends SchoolDeleteArgs>(args: Prisma.SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SchoolUpdateArgs>(args: Prisma.SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SchoolDeleteManyArgs>(args?: Prisma.SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SchoolUpdateManyArgs>(args: Prisma.SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends SchoolUpsertArgs>(args: Prisma.SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma.Prisma__SchoolClient<runtime.Types.Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SchoolCountArgs>(args?: Prisma.Subset<T, SchoolCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SchoolCountAggregateOutputType> : number>;
    aggregate<T extends SchoolAggregateArgs>(args: Prisma.Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>;
    groupBy<T extends SchoolGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SchoolGroupByArgs['orderBy'];
    } : {
        orderBy?: SchoolGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SchoolFieldRefs;
}
export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    students<T extends Prisma.School$studentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.School$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$studentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SchoolFieldRefs {
    readonly id: Prisma.FieldRef<"School", 'Int'>;
    readonly name: Prisma.FieldRef<"School", 'String'>;
}
export type SchoolFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where: Prisma.SchoolWhereUniqueInput;
};
export type SchoolFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where: Prisma.SchoolWhereUniqueInput;
};
export type SchoolFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithRelationInput | Prisma.SchoolOrderByWithRelationInput[];
    cursor?: Prisma.SchoolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchoolScalarFieldEnum | Prisma.SchoolScalarFieldEnum[];
};
export type SchoolFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithRelationInput | Prisma.SchoolOrderByWithRelationInput[];
    cursor?: Prisma.SchoolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchoolScalarFieldEnum | Prisma.SchoolScalarFieldEnum[];
};
export type SchoolFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where?: Prisma.SchoolWhereInput;
    orderBy?: Prisma.SchoolOrderByWithRelationInput | Prisma.SchoolOrderByWithRelationInput[];
    cursor?: Prisma.SchoolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SchoolScalarFieldEnum | Prisma.SchoolScalarFieldEnum[];
};
export type SchoolCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SchoolCreateInput, Prisma.SchoolUncheckedCreateInput>;
};
export type SchoolCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SchoolCreateManyInput | Prisma.SchoolCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SchoolUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SchoolUpdateInput, Prisma.SchoolUncheckedUpdateInput>;
    where: Prisma.SchoolWhereUniqueInput;
};
export type SchoolUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SchoolUpdateManyMutationInput, Prisma.SchoolUncheckedUpdateManyInput>;
    where?: Prisma.SchoolWhereInput;
    limit?: number;
};
export type SchoolUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where: Prisma.SchoolWhereUniqueInput;
    create: Prisma.XOR<Prisma.SchoolCreateInput, Prisma.SchoolUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SchoolUpdateInput, Prisma.SchoolUncheckedUpdateInput>;
};
export type SchoolDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
    where: Prisma.SchoolWhereUniqueInput;
};
export type SchoolDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SchoolWhereInput;
    limit?: number;
};
export type School$studentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.studentsSelect<ExtArgs> | null;
    omit?: Prisma.studentsOmit<ExtArgs> | null;
    include?: Prisma.studentsInclude<ExtArgs> | null;
    where?: Prisma.studentsWhereInput;
    orderBy?: Prisma.studentsOrderByWithRelationInput | Prisma.studentsOrderByWithRelationInput[];
    cursor?: Prisma.studentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StudentsScalarFieldEnum | Prisma.StudentsScalarFieldEnum[];
};
export type SchoolDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SchoolSelect<ExtArgs> | null;
    omit?: Prisma.SchoolOmit<ExtArgs> | null;
    include?: Prisma.SchoolInclude<ExtArgs> | null;
};
