import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';

class ListOrderService {
    async execute() {
        try {
            prisma.$connect();
            const orders = await prisma.order.findMany({
                where: {
                    draft: false,
                    status: false
                },
                orderBy: {
                    created_at: 'desc'
                }
            });
            prisma.$disconnect();
            return orders;
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { ListOrderService };