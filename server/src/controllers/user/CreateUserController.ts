import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { CreateUserService } from '@src/services/user/CreateUserService';

class CreateUserController {
    async handle(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;
            const createUserService = new CreateUserService();
            const user = await createUserService.execute({name, email, password});
            return res.status(200).json(user);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { CreateUserController };