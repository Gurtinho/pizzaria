import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { DetailUserService } from '@src/services/user/DetailUserService';

class DetailUserController {
    async handle(req: Request, res: Response) {
        try {
            const user_id = req.user_id;
            const detailUserService = new DetailUserService();
            const user = await detailUserService.execute(user_id);
            return res.status(200).json(user);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { DetailUserController };