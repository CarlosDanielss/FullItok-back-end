import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/infra/http/errors/AppError';
import { IProductsRepository } from '../../repositories/IProductsRepository';



@injectable()
class DeleteProductUseCase {

    constructor(
        @inject('ProductsRepository')
        private readonly productsRepository: IProductsRepository
    ) { }

    async execute(id: string) {
        const productExists = await this.productsRepository.findOneById(id);
        if (!productExists) throw new AppError('Produto Inexistente');
        await this.productsRepository.delete(id);
    }
}

export { DeleteProductUseCase };