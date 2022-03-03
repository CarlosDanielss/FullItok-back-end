import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/infra/http/errors/AppError";
import { UpdateProductDTO } from "../../dtos/UpdateProductDto";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class UpdateProductUseCase {

    constructor(
        @inject('ProductsRepository')
        private readonly productsRepository: IProductsRepository
    ) { }

    async execute(id: string, updateProductDto: UpdateProductDTO) {
        const productExists = await this.productsRepository.findOneById(id);
        if (!productExists) throw new AppError('Produto inexistente.');
        return this.productsRepository.updateProduct(id, updateProductDto);
    }

}

export { UpdateProductUseCase };