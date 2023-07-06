import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { RemoveOrderService } from '@src/services/order/RemoveOrderService';

class RemoveOrderController {
    async handle(req: Request, res: Response) {
        try {
            const order_id = req.query.order_id as string;
            const removeOrderService = new RemoveOrderService();
            const order = await removeOrderService.execute({ order_id });
            return res.status(200).json(order);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { RemoveOrderController };