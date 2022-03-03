import { CreateProductDTO } from "../../dtos/CreateProductDto";
import { UpdateProductDTO } from "../../dtos/UpdateProductDto";
import { Product } from "../../infra/typeorm/entities/Product";
import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository {

    private products: Product[] = [];

    async create({
        productQuantity,
        productPrice,
        productDescription,
        productName,
        userId,
    }: CreateProductDTO): Promise<Product> {
        const product = new Product();
        Object.assign(product, {
            productDescription,
            productName,
            productPrice,
            productQuantity,
            userId,
        });
        this.products.push(product);
        return product;
    }

    async findOneById(id: string): Promise<Product> {
        const product = this.products.find(p => p.productId === id);
        return product;
    }

    async updateProduct(id: string, updateProductDto: UpdateProductDTO): Promise<Product> {
        const product = this.products.find(p => p.productId === id);
        Object.assign(product, {
            productDescription: updateProductDto.productDescription,
            productName: updateProductDto.productName,
            productPrice: updateProductDto.productPrice,
            productQuantity: updateProductDto.productQuantity
        });
        return product;
    }

    async findAll(): Promise<Product[]> {
        return this.products;
    }

    async delete(id: string): Promise<void> {
        const productIndex = this.products.findIndex(p => p.productId === id);
        this.products.splice(productIndex, 1);
    }

}

export { ProductsRepositoryInMemory };