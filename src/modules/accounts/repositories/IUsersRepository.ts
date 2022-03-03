import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
    create({ userEmail, userName, userPassword }: CreateUserDTO): Promise<User>;
    findById(userId: string): Promise<User>;
    findByEmail(userEmail: string): Promise<User>;
    findByName(userName: string): Promise<User>;
    findAll(): Promise<User[]>;
}

export { IUsersRepository };