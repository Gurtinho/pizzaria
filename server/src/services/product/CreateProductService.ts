import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';

interface IProductRequestService {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

class CreateProductService {
    async execute({ name, description, price, banner, category_id }: IProductRequestService) {
        try {
            prisma.$connect();
            const product = await prisma.product.create({
                data: {
                    name: name,
                    description: description,
                    price: price,
                    banner: banner,
                    category_id: category_id
                }
            });
            prisma.$disconnect();
            return product;
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { CreateProductService };