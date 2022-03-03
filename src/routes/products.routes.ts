import { Router } from "express";
import { CreateProductController } from "../modules/products/useCases/createProduct/CreateProductController";
import { DeleteProductController } from "../modules/products/useCases/deleteProduct/DeleteProductController";
import { ListProductsController } from "../modules/products/useCases/listProducts/ListProductsController";
import { UpdateProductController } from "../modules/products/useCases/updateProduct/UpdateProductController";
import { ensureAuthenticated } from "../shared/infra/http/middlewares/ensureAuthenticated";

const productsRouter = Router();
const createProductController = new CreateProductController();
const updateProductController = new UpdateProductController();
const listProductsController = new ListProductsController();
const deleteProductsController = new DeleteProductController();

productsRouter.post('/', ensureAuthenticated, createProductController.handle);
productsRouter.patch('/:id', ensureAuthenticated, updateProductController.handle);
productsRouter.get('/', ensureAuthenticated, listProductsController.handle);
productsRouter.delete('/:id', ensureAuthenticated, deleteProductsController.handle);

export { productsRouter };