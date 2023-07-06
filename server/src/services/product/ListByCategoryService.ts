import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';

interface IProductRequestService {
    category_id: string;
}

class ListByCategoryService {
    async execute({ category_id }: IProductRequestService) {
        try {
            prisma.$connect();
            const findProductByCategory = await prisma.product.findMany({
                where: {
                    category_id: category_id
                }
            });
            prisma.$disconnect();
            return findProductByCategory;
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { ListByCategoryService };