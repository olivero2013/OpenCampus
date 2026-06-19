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
const createStudentRelation_dto_1 = require("./dto/createStudentRelation.dto");
let StudentContactsController = class StudentContactsController {
    studentContactsService;
    constructor(studentContactsService) {
        this.studentContactsService = studentContactsService;
    }
    findAll() {
        return this.studentContactsService.findAll();
    }
    findAllContacts() {
        return this.studentContactsService.findAllContacts();
    }
    findOne(id) {
        return this.studentContactsService.findContactByContactId(id);
    }
    findContactsByStudent(id) {
        return this.studentContactsService.findContactByStudent(id);
    }
    createRelationship(data) {
        return this.studentContactsService.createRelation(data);
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
    (0, common_1.Get)('/contact'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentContactsController.prototype, "findAllContacts", null);
__decorate([
    (0, common_1.Get)('/contact/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentContactsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/student/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentContactsController.prototype, "findContactsByStudent", null);
__decorate([
    (0, common_1.Post)('/relationship'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createStudentRelation_dto_1.CreateStudentRelationDto]),
    __metadata("design:returntype", void 0)
], StudentContactsController.prototype, "createRelationship", null);
exports.StudentContactsController = StudentContactsController = __decorate([
    (0, common_1.Controller)('student-contacts'),
    __metadata("design:paramtypes", [student_contacts_service_1.StudentContactsService])
], StudentContactsController);
//# sourceMappingURL=student-contacts.controller.js.map