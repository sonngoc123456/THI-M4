import { Request, Response, NextFunction } from "express";
export declare class EmployeeController {
    showListEmployees(req: Request, res: Response, next: NextFunction): Promise<void>;
    showFormEmployees(req: Request, res: Response, next: NextFunction): void;
    createEmployee(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteEmployee(req: Request, res: Response, next: NextFunction): Promise<void>;
    showFormUpdate(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateEmployee(req: Request, res: Response, next: NextFunction): Promise<void>;
    detailEmployee(req: Request, res: Response, next: NextFunction): Promise<void>;
}
