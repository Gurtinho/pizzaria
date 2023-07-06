import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';

interface ICategoryRequestService {
    name: string;
}

class CreateCategoryService {
    async execute({ name }: ICategoryRequestService) {
        try {
            prisma.$connect();
            if (name === '') {
                throw new AppError('Invalid name');
            }
            const category = prisma.category.create({
                data: {
                    name: name
                },
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

export { CreateCategoryService };