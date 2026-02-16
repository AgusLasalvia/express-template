import type { Request, Response } from 'express';
import ExampleService from '../services/example.service';


export default class ExampleController {
    private _exampleService: ExampleService;

    constructor() {
        this._exampleService = new ExampleService();
    }

    public exampleMethod = async (req: Request, res: Response): Promise<Response> => {
        let serviceResult = await this._exampleService.exampleServiceMethod();
        return res.status(200).json({ message: serviceResult += " And hello from the controller!" });
    }


}