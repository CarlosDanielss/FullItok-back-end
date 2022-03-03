import { CreateProductDTO } from "../dtos/CreateProductDto";
import { UpdateProductDTO } from "../dtos/UpdateProductDto";
import { Product } from "../infra/typeorm/entities/Product";

export interface IProductsRepository {
    create({
        productQuantity,
        productDescription,
        productPrice,
        productName,
        userId,
    }: CreateProductDTO): Promise<Product>;
    findOneById(id: string): Promise<Product>;
    updateProduct(id: string, updateProductDto: UpdateProductDTO): Promise<Product>;
    findAll(): Promise<Product[]>;
    delete(id: string): Promise<void>;
}