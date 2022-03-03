/**
 * DTO ele serve para validar os dados que vão ser enviados para a API
 */
class CreateProductDTO {
    productName: string;
    productDescription: string;
    productPrice: number;
    productQuantity: number;
    userId: string;
}

export { CreateProductDTO };