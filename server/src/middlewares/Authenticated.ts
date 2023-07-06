import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface Payload {
    sub: string;
}

function Authenticated(req: Request, res: Response, next: NextFunction) {
    const authtoken = req.headers.authorization;
    if (!authtoken) {
        return res.status(401).end();
    }
    const [, token] = authtoken.split(' ');
    // Validate
    try {
        const { sub } = verify(token, process.env.JWT_SECRET_KEY) as Payload;
        req.user_id = sub;
        return next();
    } catch (error) {
        return res.status(401).json({error: error});
    }
}

export { Authenticated };