import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { productName, productDescription, productPrice, productQuantity } = req.body;
        const { userId } = req.user;
        const createProductUseCase = container.resolve(CreateProductUseCase);
        const product = await createProductUseCase.execute({
            productName,
            productDescription,
            productPrice,
            productQuantity,
            userId,
        });
        return res.status(201).json(product);
    }

}

export { CreateProductController };