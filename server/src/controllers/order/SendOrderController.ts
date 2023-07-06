import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { SendOrderService } from '@src/services/order/SendOrderService';

class SendOrderController {
    async handle(req: Request, res: Response) {
        try {
            const { order_id } = req.body;
            const sendOrderService = new SendOrderService();
            const order = await sendOrderService.execute({ order_id });
            return res.status(200).json(order);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { SendOrderController };