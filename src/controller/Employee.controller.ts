import {Request,Response,NextFunction} from "express";
import {EmployeeModel} from "../model/Employee.model";
import EmployeeRouter from "../router/Employee.router";


export class EmployeeController {

    async showListEmployees(req: Request, res: Response,next: NextFunction) {
       let employees = await EmployeeModel.find()
        res.render('home', {employees: employees})
    }

    showFormEmployees(req: Request, res: Response, next: NextFunction) {
        res.render('create-employee')
    }

    async createEmployee(req: Request, res: Response, next: NextFunction) {
        let data = req.body;
        let employee = {
            code: data.code,
            username: data.username,
            age: data.age,
            salary: data.salary,
            branch: data.branch
        }
       const employees =  new EmployeeModel(employee);
        await employees.save();
        res.redirect('/')
    }

    async deleteEmployee(req: Request, res: Response, next: NextFunction) {
        await EmployeeModel.findByIdAndDelete({_id : req.params.id});
        res.redirect('/')
    }

    async showFormUpdate(req: Request, res: Response, next: NextFunction) {
        let employee = await EmployeeModel.findById({_id : req.params.id})
        res.render('edit-employee', { employee: employee})
    }

    async updateEmployee(req: Request, res: Response, next: NextFunction) {
        let data = req.body;
        let employee = {
            code: data.code,
            username: data.username,
            age: data.age,
            salary: data.salary,
            branch: data.branch
        }
        await EmployeeModel.findByIdAndUpdate({_id:req.params.id},employee);
        res.redirect('/')
    }

    async detailEmployee(req: Request, res: Response, next: NextFunction) {
        let employee = await EmployeeModel.findById({_id:req.params.id})
        res.render('employee-detail', {employee: employee})
    }





}