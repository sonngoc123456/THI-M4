"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const Employee_model_1 = require("../model/Employee.model");
class EmployeeController {
    async showListEmployees(req, res, next) {
        let employees = await Employee_model_1.EmployeeModel.find();
        res.render('home', { employees: employees });
    }
    showFormEmployees(req, res, next) {
        res.render('create-employee');
    }
    async createEmployee(req, res, next) {
        let data = req.body;
        let employee = {
            code: data.code,
            username: data.username,
            age: data.age,
            salary: data.salary,
            branch: data.branch
        };
        const employees = new Employee_model_1.EmployeeModel(employee);
        await employees.save();
        res.redirect('/');
    }
    async deleteEmployee(req, res, next) {
        await Employee_model_1.EmployeeModel.findByIdAndDelete({ _id: req.params.id });
        res.redirect('/');
    }
    async showFormUpdate(req, res, next) {
        let employee = await Employee_model_1.EmployeeModel.findById({ _id: req.params.id });
        res.render('edit-employee', { employee: employee });
    }
    async updateEmployee(req, res, next) {
        let data = req.body;
        let employee = {
            code: data.code,
            username: data.username,
            age: data.age,
            salary: data.salary,
            branch: data.branch
        };
        await Employee_model_1.EmployeeModel.findByIdAndUpdate({ _id: req.params.id }, employee);
        res.redirect('/');
    }
    async detailEmployee(req, res, next) {
        let employee = await Employee_model_1.EmployeeModel.findById({ _id: req.params.id });
        res.render('employee-detail', { employee: employee });
    }
}
exports.EmployeeController = EmployeeController;
//# sourceMappingURL=Employee.controller.js.map