import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';

interface IFinishRequestService {
    order_id: string;
}

class FinishOrderService {
    async execute({ order_id }: IFinishRequestService) {
        try {
            prisma.$connect();
            const order = await prisma.order.update({
                where: {
                    id: order_id
                },
                data: {
                    status: true
                }
            });
            prisma.$disconnect();
            return order;
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { FinishOrderService };