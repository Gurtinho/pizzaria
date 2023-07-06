import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { FinishOrderService } from '@src/services/order/FinishOrderService';

class FinishOrderController {
    async handle(req: Request, res: Response) {
        try {
            const order_id = req.query.order_id as string;
            const finishOrderService = new FinishOrderService();
            const order = await finishOrderService.execute({ order_id });
            return res.status(200).json(order);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { FinishOrderController };