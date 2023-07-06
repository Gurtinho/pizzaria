import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';
import { hash } from 'bcryptjs';

interface IUserRequestService {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, password }: IUserRequestService) {
        try {
            if (!email) {
                throw new AppError('Email required');
            }
            prisma.$connect();
            const emailAlreadyExists = await prisma.user.findFirst({
                where: {
                    email: email
                }
            });
            if (emailAlreadyExists) {
                throw new AppError('Email already exists');
            }
            const passwordHash = await hash(password, 8);
            const user = await prisma.user.create({
                data: {
                    name: name,
                    email: email,
                    password: passwordHash
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

export { CreateUserService };