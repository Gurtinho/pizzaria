import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { ListCategoryService } from '@src/services/category/ListCategoryService';

class ListCategoryController {
    async handle(req: Request, res: Response) {
        try {
            const listCategoryService = new ListCategoryService();
            const category = await listCategoryService.execute();
            return res.status(200).json(category);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { ListCategoryController };