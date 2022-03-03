import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ userEmail, userName, userPassword }: CreateUserDTO): Promise<User> {
        const user = this.repository.create({ userEmail, userName, userPassword });
        return this.repository.save(user);
    }

    async findById(userId: string): Promise<User> {
        return this.repository.findOne(userId, {
            select: [
                'userId',
                'userEmail',
                'userName',
                'userPassword'
            ]
        });
    }

    async findByEmail(userEmail: string): Promise<User> {
        return this.repository.findOne({
            where: { userEmail }, select: [
                'userId',
                'userEmail',
                'userName',
                'userPassword'
            ]
        });
    }

    async findByName(userName: string): Promise<User> {
        return this.repository.findOne({
            where: { userName }, select: [
                'userId',
                'userEmail',
                'userName',
                'userPassword'
            ]
        });
    }

    async findAll(): Promise<User[]> {
        return this.repository.find();
    }

}

export { UsersRepository };