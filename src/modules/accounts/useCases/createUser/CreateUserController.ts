import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {

    async handle(req: Request, res: Response) {
        const { userName, userEmail, userPassword } = req.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);
        const createdUser = await createUserUseCase.execute({ userName, userEmail, userPassword });
        return res.status(201).json(createdUser);
    }

}

export { CreateUserController };