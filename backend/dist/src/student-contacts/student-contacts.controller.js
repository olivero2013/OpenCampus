"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentContactsController = void 0;
const common_1 = require("@nestjs/common");
const student_contacts_service_1 = require("./student-contacts.service");
const createStudentContact_dto_1 = require("./dto/createStudentContact.dto");
let StudentContactsController = class StudentContactsController {
    studentContactsService;
    constructor(studentContactsService) {
        this.studentContactsService = studentContactsService;
    }
    findAll() {
        return this.studentContactsService.findAll();
    }
    findOne(id) {
        return this.studentContactsService.findOne(id);
    }
    findContactsByStudent(id) {
        return this.studentContactsService.findContactByStudent(id);
    }
    createContact(data) {
        return this.studentContactsService.createContact(data);
    }
};
exports.StudentContactsController = StudentContactsController;
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentContactsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentContactsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/student/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentContactsController.prototype, "findContactsByStudent", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createStudentContact_dto_1.createStudentContactDto]),
    __metadata("design:returntype", void 0)
], StudentContactsController.prototype, "createContact", null);
exports.StudentContactsController = StudentContactsController = __decorate([
    (0, common_1.Controller)('student-contacts'),
    __metadata("design:paramtypes", [student_contacts_service_1.StudentContactsService])
], StudentContactsController);
//# sourceMappingURL=student-contacts.controller.js.map