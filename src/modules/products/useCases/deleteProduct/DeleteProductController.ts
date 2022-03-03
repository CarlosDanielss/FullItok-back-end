import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

class DeleteProductController {

    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const deleteProductUseCase = container.resolve(DeleteProductUseCase);
        await deleteProductUseCase.execute(id);
        return res.status(204).json();
    }

}

export { DeleteProductController };