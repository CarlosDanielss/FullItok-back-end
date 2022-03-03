import { inject, injectable } from "tsyringe";
import { AuthenticateUserDTO } from "../../dtos/AuthenticateUserDto";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import bcrypt from 'bcrypt';
import { AppError } from "../../../../shared/infra/http/errors/AppError";
import jwt from 'jsonwebtoken';
import jwtConfig from '../../../../config/jwt.json';

interface IResponse {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject('UsersRepository')
        private readonly usersRepository: IUsersRepository
    ) { }

    async execute({ userEmail, userPassword }: AuthenticateUserDTO): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(userEmail);

        if (!user) throw new AppError('Login inválido', 401);

        const passwordMatched = await bcrypt.compare(userPassword, user.userPassword);

        if (!passwordMatched) throw new AppError('Login inválido', 401);

        const token = jwt.sign({}, jwtConfig.secret, { subject: user.userId, expiresIn: '1d' });

        return {
            token,
            user: {
                email: user.userEmail,
                name: user.userName,
            }
        }
    }

}

export { AuthenticateUserUseCase };