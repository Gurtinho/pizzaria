import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';

interface ISendRequestService {
    order_id: string;
}

class SendOrderService {
    async execute({ order_id }: ISendRequestService) {
        try {
            prisma.$connect();
            const order = await prisma.order.update({
                where: {
                    id: order_id
                },
                data: {
                    draft: false
                }
            });
            prisma.$disconnect();
            return order;
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { SendOrderService };