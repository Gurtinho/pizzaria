import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';

class DetailUserService {
    async execute(user_id: string) {
        try {
            prisma.$connect();
            const user = await prisma.user.findFirst({
                where: {
                    id: user_id
                },
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            });
            prisma.$disconnect();
            return user;
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { DetailUserService };