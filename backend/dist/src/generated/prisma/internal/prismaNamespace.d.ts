import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Student: "Student";
    readonly School: "School";
    readonly Contact: "Contact";
    readonly StudentContact: "StudentContact";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "student" | "school" | "contact" | "studentContact";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Student: {
            payload: Prisma.$StudentPayload<ExtArgs>;
            fields: Prisma.StudentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                findFirst: {
                    args: Prisma.StudentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                findMany: {
                    args: Prisma.StudentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>[];
                };
                create: {
                    args: Prisma.StudentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                createMany: {
                    args: Prisma.StudentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.StudentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                update: {
                    args: Prisma.StudentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                deleteMany: {
                    args: Prisma.StudentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.StudentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentPayload>;
                };
                aggregate: {
                    args: Prisma.StudentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudent>;
                };
                groupBy: {
                    args: Prisma.StudentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentCountAggregateOutputType> | number;
                };
            };
        };
        School: {
            payload: Prisma.$SchoolPayload<ExtArgs>;
            fields: Prisma.SchoolFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SchoolFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                findFirst: {
                    args: Prisma.SchoolFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                findMany: {
                    args: Prisma.SchoolFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>[];
                };
                create: {
                    args: Prisma.SchoolCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                createMany: {
                    args: Prisma.SchoolCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SchoolDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                update: {
                    args: Prisma.SchoolUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                deleteMany: {
                    args: Prisma.SchoolDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SchoolUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SchoolUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SchoolPayload>;
                };
                aggregate: {
                    args: Prisma.SchoolAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSchool>;
                };
                groupBy: {
                    args: Prisma.SchoolGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SchoolGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SchoolCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SchoolCountAggregateOutputType> | number;
                };
            };
        };
        Contact: {
            payload: Prisma.$ContactPayload<ExtArgs>;
            fields: Prisma.ContactFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContactFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                findFirst: {
                    args: Prisma.ContactFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                findMany: {
                    args: Prisma.ContactFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>[];
                };
                create: {
                    args: Prisma.ContactCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                createMany: {
                    args: Prisma.ContactCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ContactDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                update: {
                    args: Prisma.ContactUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                deleteMany: {
                    args: Prisma.ContactDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContactUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ContactUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                aggregate: {
                    args: Prisma.ContactAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContact>;
                };
                groupBy: {
                    args: Prisma.ContactGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContactCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactCountAggregateOutputType> | number;
                };
            };
        };
        StudentContact: {
            payload: Prisma.$StudentContactPayload<ExtArgs>;
            fields: Prisma.StudentContactFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StudentContactFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StudentContactFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>;
                };
                findFirst: {
                    args: Prisma.StudentContactFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StudentContactFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>;
                };
                findMany: {
                    args: Prisma.StudentContactFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>[];
                };
                create: {
                    args: Prisma.StudentContactCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>;
                };
                createMany: {
                    args: Prisma.StudentContactCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.StudentContactDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>;
                };
                update: {
                    args: Prisma.StudentContactUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>;
                };
                deleteMany: {
                    args: Prisma.StudentContactDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StudentContactUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.StudentContactUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StudentContactPayload>;
                };
                aggregate: {
                    args: Prisma.StudentContactAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStudentContact>;
                };
                groupBy: {
                    args: Prisma.StudentContactGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentContactGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StudentContactCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StudentContactCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    student?: Prisma.StudentOmit;
    school?: Prisma.SchoolOmit;
    contact?: Prisma.ContactOmit;
    studentContact?: Prisma.StudentContactOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
