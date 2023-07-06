import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { DetailOrderService } from '../../services/order/DetailOrderService';

class DetailOrderController {
    async handle(req: Request, res: Response) {
        try {
            const order_id = req.query.order_id as string;
            const detailOrderService = new DetailOrderService();
            const order = await detailOrderService.execute({ order_id });
            return res.status(200).json(order);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { DetailOrderController };