import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';

interface IAddOrderRequestService {
    amount: number;
    order_id: string;
    product_id: string;
}

class AddItemService {
    async execute({ amount, order_id, product_id }: IAddOrderRequestService) {
        try {
            prisma.$connect();
            const order = await prisma.item.create({
                data: {
                    amount: amount,
                    order_id: order_id,
                    product_id: product_id
                }
            });
            prisma.$disconnect();
            return order;
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { AddItemService };