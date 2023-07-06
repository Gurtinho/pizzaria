import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { CreateOrderService } from '@src/services/order/CreateOrderService';

class CreateOrderController {
    async handle(req: Request, res: Response) {
        try {
            const { table, name } = req.body;
            const createOrderService = new CreateOrderService();
            const order = await createOrderService.execute({ table, name });
            return res.status(200).json(order);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { CreateOrderController };