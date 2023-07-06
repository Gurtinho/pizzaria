import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';

interface IOrderRequestService {
    order_id: string;
}

class RemoveOrderService {
    async execute({ order_id }: IOrderRequestService) {
        try {
            prisma.$connect();
            const order = await prisma.order.delete({
                where: {
                    id: order_id
                }
            });
            prisma.$disconnect();
            return order;
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { RemoveOrderService };