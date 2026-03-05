import type { Request, Response } from 'express';
import AuthService from '../services/auth.service';


export default class AuthController {
    private _authService: AuthService;

    constructor() {
        this._authService = new AuthService();
    }

    public login = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { username, password } = req.body;
            const response = await this._authService.login(username, password);
            
            if (!response) {
                return res.status(401).json({ message: "Invalid Credentials" })
            }
            return res.status(200).json(response)
        } catch (e: any) {
            return res.status(500).json({ message: "Server Error" })
        }
    }


}