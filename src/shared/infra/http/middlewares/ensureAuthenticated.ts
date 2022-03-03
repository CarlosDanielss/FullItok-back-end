import { NextFunction, Request, Response } from "express";
import jwtConfig from '../../../../config/jwt.json';
import jwt from 'jsonwebtoken';
import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "../errors/AppError";

export async function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> {
    const authHeader = req.headers.authorization;

    if (!authHeader) throw new AppError('Token inválido', 401);

    const [, token] = authHeader.split(' ');

    try {
        const { sub } = jwt.verify(token, jwtConfig.secret) as { sub: string };
        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(sub);

        if (!user) throw new AppError('Usuário não encontrado', 401);

        req.user = {
            userId: sub,
        };

        return next();
    } catch {
        throw new AppError('Token inválido', 401);
    }

}