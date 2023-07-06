import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';

interface IDetailRequestService {
    order_id: string;
}

class DetailOrderService {
    async execute({ order_id }: IDetailRequestService) {
        try {
            prisma.$connect();
            const order = await prisma.item.findFirst({
                where: {
                    order_id: order_id
                },
                include: {
                    order: true,
                    product: true
                }
            });
            prisma.$disconnect();
            return order;
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { DetailOrderService };