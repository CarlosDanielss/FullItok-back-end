import { inject, injectable } from 'tsyringe';
import { CreateProductDTO } from '../../dtos/CreateProductDto';
import { Product } from '../../infra/typeorm/entities/Product';
import { IProductsRepository } from '../../repositories/IProductsRepository';

@injectable()
class CreateProductUseCase {

    constructor(
        @inject('ProductsRepository')
        private readonly productsRepository: IProductsRepository
    ) { }

    async execute({
        productDescription,
        productName,
        productPrice,
        productQuantity,
        userId,
    }: CreateProductDTO): Promise<Product> {
        const product = await this.productsRepository.create({
            productDescription,
            productPrice,
            productQuantity,
            productName: productName.toUpperCase(),
            userId,
        });

        return product;
    }
}

export { CreateProductUseCase };