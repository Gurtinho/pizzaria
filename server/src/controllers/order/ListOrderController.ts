import { Request, Response } from 'express';

import { ListOrderService } from '@src/services/order/ListOrderService';
import { AppError } from '@src/errors/AppError';

class ListOrderController {
    async handle(req: Request, res: Response) {
        try {
            const listOrderService = new ListOrderService();
            const orders = await listOrderService.execute();
            return res.status(200).json(orders);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { ListOrderController };