import { getRepository, Repository } from "typeorm";
import { CreateProductDTO } from "../../../../dtos/CreateProductDto";
import { UpdateProductDTO } from "../../../../dtos/UpdateProductDto";
import { IProductsRepository } from "../../../../repositories/IProductsRepository";
import { Product } from "../../entities/Product";

class ProductsRepository implements IProductsRepository {

    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }

    async create({
        productName,
        productPrice,
        productDescription,
        productQuantity,
        userId,
    }: CreateProductDTO): Promise<Product> {
        const product = this.repository.create({
            productDescription,
            productName,
            productPrice,
            productQuantity,
            userId,
        });
        await this.repository.save(product);
        return product;
    }

    async findOneById(id: string): Promise<Product> {
        const product = await this.repository.findOne({ where: { productId: id } });
        return product;
    }

    async updateProduct(id: string, updateProductDto: UpdateProductDTO): Promise<Product> {
        const product = await this.repository.findOne({ where: { productId: id } });
        return this.repository.save({ ...product, ...updateProductDto });
    }

    async findAll(): Promise<Product[]> {
        const products = await this.repository.find({ relations: ['user'] });
        return products;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ productId: id });
    }

}

export { ProductsRepository };