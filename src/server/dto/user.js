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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = exports.SchoolDTO = void 0;
const decorator_1 = require("@midwayjs/decorator");
const requiredString = decorator_1.RuleType.string().required(); // 自己在一个文件中定义一下你们部门的规范或常用的。
const maxString = (length) => decorator_1.RuleType.string().max(length); // 自己在一个文件中定义一下你们部门的规范或常用的。
class SchoolDTO {
}
__decorate([
    decorator_1.Rule(decorator_1.RuleType.string().required()),
    __metadata("design:type", String)
], SchoolDTO.prototype, "name", void 0);
__decorate([
    decorator_1.Rule(decorator_1.RuleType.string()),
    __metadata("design:type", String)
], SchoolDTO.prototype, "address", void 0);
exports.SchoolDTO = SchoolDTO;
class UserDTO {
}
__decorate([
    decorator_1.Rule(decorator_1.RuleType.number().required()),
    __metadata("design:type", Number)
], UserDTO.prototype, "id", void 0);
__decorate([
    decorator_1.Rule(decorator_1.RuleType.string().required()),
    __metadata("design:type", String)
], UserDTO.prototype, "firstName", void 0);
__decorate([
    decorator_1.Rule(decorator_1.RuleType.string().max(10)),
    __metadata("design:type", String)
], UserDTO.prototype, "lastName", void 0);
__decorate([
    decorator_1.Rule(decorator_1.RuleType.number().max(60)),
    __metadata("design:type", Number)
], UserDTO.prototype, "age", void 0);
__decorate([
    decorator_1.Rule(SchoolDTO),
    __metadata("design:type", SchoolDTO)
], UserDTO.prototype, "school", void 0);
exports.UserDTO = UserDTO;
//# sourceMappingURL=user.js.map