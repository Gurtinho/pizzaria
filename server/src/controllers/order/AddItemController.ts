import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { AddItemService } from '@src/services/order/AddItemService';

class AddItemController {
    async handle(req: Request, res: Response) {
        try {
            const { amount, order_id, product_id } = req.body;
            const addOrderService = new AddItemService();
            const order = await addOrderService.execute({ amount, order_id, product_id });
            return res.status(200).json(order);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { AddItemController };