import { ProductsRepositoryInMemory } from "../../modules/products/repositories/inMemory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "../../modules/products/useCases/createProduct/CreateProductUseCase";

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductUseCase: CreateProductUseCase;

describe('Create Product', () => {

    beforeEach(() => {
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
    })

    it('should create a new product', async () => {
        const product = await createProductUseCase.execute({
            productDescription: 'Product Description',
            productName: 'Product Name',
            productPrice: 100,
            productQuantity: 10
        });

        expect(product).toHaveProperty('productId');
    })

})