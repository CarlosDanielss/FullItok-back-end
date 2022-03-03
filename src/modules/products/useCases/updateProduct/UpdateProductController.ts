import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

class UpdateProductController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const fields = req.body;
        const updateProductUseCase = container.resolve(UpdateProductUseCase);
        const product = await updateProductUseCase.execute(id, { ...fields });
        return res.status(200).json(product);
    }

}

export { UpdateProductController };