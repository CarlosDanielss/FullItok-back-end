import 'reflect-metadata';
import '../../container';
import createConnection from '../typeorm';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { indexRouter } from '../../../routes/index.routes';
import { AppError } from './errors/AppError';
import dotenv from 'dotenv';

dotenv.config();
createConnection();

const app = express();

app.use(express.json());
app.use(indexRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).send({ error: error.message });
    }
    return res.status(500).json({ status: 'error', message: `Internal server error - ${error.message}` });
});

export { app };