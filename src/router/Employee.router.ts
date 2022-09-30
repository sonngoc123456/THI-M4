import {EmployeeModel} from "../model/Employee.model";
import express from "express";
import {EmployeeController} from "../controller/Employee.controller";
import multer from "multer"

const upload = multer();
const employeeRouter = express.Router();
const employeeController = new EmployeeController();


employeeRouter.get('/',(req, res, next) => {
   employeeController.showListEmployees(req, res, next).catch(err => {
      console.log(err.message);
   })
})

employeeRouter.get('/employee/create',(req, res, next) => {
   employeeController.showFormEmployees(req, res, next)
})
employeeRouter.post('/employee/create',upload.none(),(req, res, next) => {
   employeeController.createEmployee(req, res, next).catch(err => {
      console.log(err.message);
   })
})

employeeRouter.get('/employee/delete/:id', (req, res, next) => {
   employeeController.deleteEmployee(req, res, next).catch(err => {
      console.log(err.message);
   })
})

employeeRouter.get('/employee/update/:id', (req, res, next) => {
   employeeController.showFormUpdate(req, res, next).catch(err => {
      console.log(err.message);
   });
})
employeeRouter.post('/employee/update/:id',upload.none(), (req, res, next) =>{
   employeeController.updateEmployee(req, res, next).catch(err => {
      console.log(err.message);
   })
})

employeeRouter.get('/employee/detail/:id', (req, res, next) =>{
   employeeController.detailEmployee(req, res, next).catch(err => {
      console.log(err.message);
   });
})




export default employeeRouter;

