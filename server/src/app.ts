import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import { router } from '@src/routes';
import { AppError } from '@src/errors/AppError';
export * from 'colors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

// Errors
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(400).json({
            error: error.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'internal server error'
    });
});

export { app };