"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const primsa_service_1 = require("./prisma/primsa.service");
const students_service_1 = require("./students/students.service");
const students_controller_1 = require("./students/students.controller");
const school_controller_1 = require("./school/school.controller");
const school_service_1 = require("./school/school.service");
const studentcontacts_service_1 = require("./studentcontacts/studentcontacts.service");
const studentcontacts_controller_1 = require("./studentcontacts/studentcontacts.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, students_controller_1.StudentsController, school_controller_1.SchoolController, studentcontacts_controller_1.StudentcontactsController],
        providers: [app_service_1.AppService, primsa_service_1.PrimsaService, students_service_1.StudentsService, school_service_1.SchoolService, studentcontacts_service_1.StudentcontactsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map