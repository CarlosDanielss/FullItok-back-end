import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import bcrypt from 'bcrypt';
import { User } from "../../infra/typeorm/entities/User";
import { AppError } from "../../../../shared/infra/http/errors/AppError";

@injectable()
class CreateUserUseCase {

    constructor(
        @inject('UsersRepository')
        private readonly usersRepository: IUsersRepository
    ) { }

    async execute({ userPassword, userName, userEmail }: CreateUserDTO): Promise<User> {
        const userExists = await this.usersRepository.findByEmail(userEmail);
        if (userExists) throw new AppError('Usuário já existe');
        const hashedPassword = await bcrypt.hash(userPassword, 10);
        return this.usersRepository.create({ userName, userEmail, userPassword: hashedPassword });
    }

}

export { CreateUserUseCase };