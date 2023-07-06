import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { CreateProductService } from '@src/services/product/CreateProductService';

class CreateProductController {
    async handle(req: Request, res: Response) {
        try {
            const { name, price, description, category_id } = req.body;
            if (!req.file) {
                throw new AppError('Upload file error');
            }
            const { originalname, filename: banner } = req.file;
            const createProductService = new CreateProductService();
            const product = await createProductService.execute({
                name, price, description, banner, category_id
            });
            return res.status(200).json(product);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { CreateProductController };