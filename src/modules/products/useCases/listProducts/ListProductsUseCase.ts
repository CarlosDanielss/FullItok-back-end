import { inject, injectable } from "tsyringe";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class ListProductsUseCase {

    constructor(
        @inject('ProductsRepository')
        private readonly productsRepository: IProductsRepository
    ) { }

    async execute() {
        const products = await this.productsRepository.findAll();
        return products;
    }
}

export { ListProductsUseCase };