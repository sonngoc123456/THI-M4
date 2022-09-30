import { Schema, model } from "mongoose";

interface IEmployee {

    code: string;
    username: string;
    age : number;
    salary : number;
    branch : string;

}

const employeeSchema = new Schema<IEmployee>({

    code: String,
    username: String,
    age: Number,
    salary: Number,
    branch : String,

})

const EmployeeModel = model<IEmployee>('Employee', employeeSchema);

export { EmployeeModel };