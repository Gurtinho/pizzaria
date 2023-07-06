import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { AuthUserService } from '@src/services/user/AuthUserService';

class AuthUserController {
    async handle(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const authUserService = new AuthUserService();
            const auth = await authUserService.execute({email, password});
            return res.status(200).json(auth);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { AuthUserController };