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
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.8.0",
    "engineVersion": "3c6e192761c0362d496ed980de936e2f3cebcd3a",
    "activeProvider": "mysql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n}\n\nmodel students {\n  id               Int      @id @default(autoincrement())\n  firstname        String\n  lastname         String\n  preferredname    String?\n  studentID        Int      @unique\n  dateOfBirth      DateTime\n  gender           String\n  enrollment       Boolean\n  schoolAssignment Int\n  school           School   @relation(fields: [schoolAssignment], references: [id])\n}\n\nmodel School {\n  id   Int    @id @default(autoincrement())\n  name String\n\n  students students[]\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"students\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"firstname\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastname\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"preferredname\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"studentID\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"dateOfBirth\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"gender\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"enrollment\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"schoolAssignment\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"school\",\"kind\":\"object\",\"type\":\"School\",\"relationName\":\"SchoolTostudents\"}],\"dbName\":null},\"School\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"students\",\"kind\":\"object\",\"type\":\"students\",\"relationName\":\"SchoolTostudents\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"students\",\"_count\",\"school\",\"students.findUnique\",\"students.findUniqueOrThrow\",\"students.findFirst\",\"students.findFirstOrThrow\",\"students.findMany\",\"data\",\"students.createOne\",\"students.createMany\",\"students.updateOne\",\"students.updateMany\",\"create\",\"update\",\"students.upsertOne\",\"students.deleteOne\",\"students.deleteMany\",\"having\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"students.groupBy\",\"students.aggregate\",\"School.findUnique\",\"School.findUniqueOrThrow\",\"School.findFirst\",\"School.findFirstOrThrow\",\"School.findMany\",\"School.createOne\",\"School.createMany\",\"School.updateOne\",\"School.updateMany\",\"School.upsertOne\",\"School.deleteOne\",\"School.deleteMany\",\"School.groupBy\",\"School.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"name\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"search\",\"not\",\"every\",\"some\",\"none\",\"firstname\",\"lastname\",\"preferredname\",\"studentID\",\"dateOfBirth\",\"gender\",\"enrollment\",\"schoolAssignment\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"_relevance\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "dhIcDQUAAEwAICoAAEgAMCsAAAMAECwAAEgAMC0CAAAAAT4BADsAIT8BADsAIUABAEkAIUECAAAAAUJAAEoAIUMBADsAIUQgAEsAIUUCADoAIQEAAAABACANBQAATAAgKgAASAAwKwAAAwAQLAAASAAwLQIAOgAhPgEAOwAhPwEAOwAhQAEASQAhQQIAOgAhQkAASgAhQwEAOwAhRCAASwAhRQIAOgAhAwUAAG8AIEAAAGcAIFEAAHAAIAMAAAADACABAAAEADACAAABACABAAAAAwAgAQAAAAEAIAMAAAADACABAAAEADACAAABACADAAAAAwAgAQAABAAwAgAAAQAgAwAAAAMAIAEAAAQAMAIAAAEAIAoFAABuACAtAgAAAAE-AQAAAAE_AQAAAAFAAQAAAAFBAgAAAAFCQAAAAAFDAQAAAAFEIAAAAAFFAgAAAAEBCwAACwAgCS0CAAAAAT4BAAAAAT8BAAAAAUABAAAAAUECAAAAAUJAAAAAAUMBAAAAAUQgAAAAAUUCAAAAAQELAAANADAKBQAAbQAgLQIAUwAhPgEAUgAhPwEAUgAhQAEAXwAhQQIAUwAhQkAAYAAhQwEAUgAhRCAAYQAhRQIAUwAhAgAAAAEAIAsAAA8AIAktAgBTACE-AQBSACE_AQBSACFAAQBfACFBAgBTACFCQABgACFDAQBSACFEIABhACFFAgBTACECAAAAAwAgCwAAEQAgAwAAAAEAIBAAAAsAIBEAAA8AIAEAAAABACABAAAAAwAgBgQAAGgAIBYAAGkAIBcAAGwAIBgAAGsAIBkAAGoAIEAAAGcAIAwqAAA9ADArAAAXABAsAAA9ADAtAgAyACE-AQAzACE_AQAzACFAAQA-ACFBAgAyACFCQAA_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-AQA7ACE_AQA7ACFAAQBJACFBAgAAAAFCQABKACFDAQA7ACFEIABLACFFAgA6ACECAAAAAQAgCwAAYgAgAgAAAF0AIAsAAF4AIAwqAABcADArAABdABAsAABcADAtAgA6ACE-AQA7ACE_AQA7ACFAAQBJACFBAgA6ACFCQABKACFDAQA7ACFEIABLACFFAgA6ACEMKgAAXAAwKwAAXQAQLAAAXAAwLQIAOgAhPgEAOwAhPwEAOwAhQAEASQAhQQIAOgAhQkAASgAhQwEAOwAhRCAASwAhRQIAOgAhCC0CAFMAIT4BAFIAIT8BAFIAIUABAF8AIUECAFMAIUJAAGAAIUMBAFIAIUQgAGEAIQFLAQAAAAEBS0AAAAABAUsgAAAAAQgtAgBTACE-AQBSACE_AQBSACFAAQBfACFBAgBTACFCQABgACFDAQBSACFEIABhACEILQIAAAABPgEAAAABPwEAAAABQAEAAAABQQIAAAABQkAAAAABQwEAAAABRCAAAAABBBAAAFUAMEgAAFYAMEoAAFgAIE4AAFkAMAABOQEAAAABAAAAAAAABRAAAHEAIBEAAHQAIEgAAHIAIEkAAHMAIE4AABoAIAMQAABxACBIAAByACBOAAAaACACAwAAZQAgUQAAZgAgATkBAAAAAQItAgAAAAEuAQAAAAECAAAAGgAgEAAAcQAgAwAAAB0AIBAAAHEAIBEAAHUAIAQAAAAdACALAAB1ACAtAgBTACEuAQBSACECLQIAUwAhLgEAUgAhCC0CAAAAAT4BAAAAAT8BAAAAAUABAAAAAUECAAAAAUJAAAAAAUMBAAAAAUQgAAAAAQEFAAICAwUBBAADAQMGAAAFBAAGFgAHFwAIGAAJGQAKAAAAAAAFBAAGFgAHFwAIGAAJGQAKBQQADRYADhcADxgAEBkAEQAAAAAABQQADRYADhcADxgAEBkAEQYCAQcHAQgIAQkJAQoKAQwMAQ0OBA4QAQ8SBBITARMUARQVBBoYBRsZCxwbAh0cAh4fAh8gAiAhAiEjAiIlBCMnAiQpBCUqAiYrAicsBCgvDCkwEg"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.mysql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.mysql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map