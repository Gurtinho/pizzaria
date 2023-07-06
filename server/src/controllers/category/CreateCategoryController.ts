import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { CreateCategoryService } from '@src/services/category/CreateCategoryService';

class CreateCategoryController {
    async handle(req: Request, res: Response) {
        try {
            const { name } = req.body;
            const createCategoryService = new CreateCategoryService();
            const category = await createCategoryService.execute({ name });
            return res.status(200).json(category);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { CreateCategoryController };