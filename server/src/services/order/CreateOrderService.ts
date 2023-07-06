import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';

interface IOrderRequestService {
    table: number;
    name: string;
}

class CreateOrderService {
    async execute({ table, name }: IOrderRequestService) {
        try {
            prisma.$connect();
            const order = await prisma.order.create({
                data: {
                    table: table,
                    name: name
                }
            });
            prisma.$disconnect();
            return order;
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { CreateOrderService };