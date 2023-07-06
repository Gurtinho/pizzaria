import { Request, Response } from 'express';
import { AppError } from '@src/errors/AppError';

import { RemoveItemService } from '@src/services/order/RemoveItemService';

class RemoveItemController {
    async handle(req: Request, res: Response) {
        try {
            const item_id = req.query.item_id as string;
            const removeItemService = new RemoveItemService();
            const item = await removeItemService.execute({ item_id });
            return res.status(200).json(item);
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { RemoveItemController };