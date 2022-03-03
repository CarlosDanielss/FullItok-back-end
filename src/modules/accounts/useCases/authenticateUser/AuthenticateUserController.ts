import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {

    async handle(req: Request, res: Response) {
        const { userEmail, userPassword } = req.body;
        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
        const response = await authenticateUserUseCase.execute({ userEmail, userPassword });
        return res.status(200).json(response);
    }

}

export { AuthenticateUserController };