import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';

interface IRemoveRequestService {
    item_id: string;
}

class RemoveItemService {
    async execute({ item_id }: IRemoveRequestService) {
        try {
            prisma.$connect();
            const item = await prisma.item.delete({
                where: {
                    id: item_id
                }
            });
            prisma.$disconnect();
            return item;
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { RemoveItemService };