import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';

class ListCategoryService {
    async execute() {
        try {
            prisma.$connect();
            const category = prisma.category.findMany({
                select: {
                    id: true,
                    name: true
                }
            });
            prisma.$disconnect();
            return category;
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { ListCategoryService };