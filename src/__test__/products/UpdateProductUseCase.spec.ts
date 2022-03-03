import { ProductsRepositoryInMemory } from "../../modules/products/repositories/inMemory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "../../modules/products/useCases/createProduct/CreateProductUseCase";
import { UpdateProductUseCase } from "../../modules/products/useCases/updateProduct/UpdateProductUseCase";

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductsUseCase: CreateProductUseCase;
let updateProductUseCase: UpdateProductUseCase;

describe('Update Product', () => {

    beforeEach(() => {
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductsUseCase = new CreateProductUseCase(productsRepositoryInMemory);
        updateProductUseCase = new UpdateProductUseCase(productsRepositoryInMemory);
    })

    it('should update a product', async () => {
        const product = await createProductsUseCase.execute({
            productName: 'Product 1',
            productDescription: 'Product 1 description',
            productPrice: 100,
            productQuantity: 10,
        });

        const updatedProduct = await updateProductUseCase.execute(product.productId, {
            productPrice: 200,
        })

        expect(updatedProduct.productPrice).toBe(200);
    })

})