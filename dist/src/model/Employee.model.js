"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = void 0;
const mongoose_1 = require("mongoose");
const employeeSchema = new mongoose_1.Schema({
    code: String,
    username: String,
    age: Number,
    salary: Number,
    branch: String,
});
const EmployeeModel = (0, mongoose_1.model)('Employee', employeeSchema);
exports.EmployeeModel = EmployeeModel;
//# sourceMappingURL=Employee.model.js.map