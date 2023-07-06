import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { ListByCategoryService } from '@src/services/product/ListByCategoryService';

class ListByCategoryController {
    async handle(req: Request, res: Response) {
        try {
            const category_id = req.query.category_id as string;
            const listByCategoryService = new ListByCategoryService();
            const productByCategory = await listByCategoryService.execute({ category_id });
            return res.status(200).json(productByCategory);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { ListByCategoryController };