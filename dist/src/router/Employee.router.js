"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Employee_controller_1 = require("../controller/Employee.controller");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
const employeeRouter = express_1.default.Router();
const employeeController = new Employee_controller_1.EmployeeController();
employeeRouter.get('/', (req, res, next) => {
    employeeController.showListEmployees(req, res, next);
});
employeeRouter.get('/employee/create', (req, res, next) => {
    employeeController.showFormEmployees(req, res, next);
});
employeeRouter.post('/employee/create', upload.none(), (req, res, next) => {
    employeeController.createEmployee(req, res, next);
});
employeeRouter.get('/employee/delete/:id', (req, res, next) => {
    employeeController.deleteEmployee(req, res, next);
});
employeeRouter.get('/employee/update/:id', (req, res, next) => {
    employeeController.showFormUpdate(req, res, next);
});
employeeRouter.post('/employee/update/:id', upload.none(), (req, res, next) => {
    employeeController.updateEmployee(req, res, next);
});
employeeRouter.get('/employee/detail/:id', (req, res, next) => {
    employeeController.detailEmployee(req, res, next);
});
exports.default = employeeRouter;
//# sourceMappingURL=Employee.router.js.map