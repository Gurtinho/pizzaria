import { AppError } from '@src/errors/AppError';
import prisma from '@src/prisma';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

interface IAuthRequestService {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: IAuthRequestService) {
        try {
            prisma.$connect();
            const user = await prisma.user.findFirst({
                where: {
                    email: email
                }
            });
            if (!user) {
                throw new AppError('email or password incorrect');
            }
            const passwordMath = compare(password, user.password);
            if (!passwordMath) {
                throw new AppError('email or password incorrect');
            }
            const token = sign(
                {
                    name: user.name,
                    email: user.email
                },
                process.env.JWT_SECRET_KEY,
                {
                    subject: user.id,
                    expiresIn: '30d'
                }
            );
            prisma.$disconnect();
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                token
            };
        } catch (err) {
            throw new AppError('On error occured: ' + err);
        }
    }
}

export { AuthUserService };