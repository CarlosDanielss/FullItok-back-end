import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import {
    ProductsRepository
} from '../../modules/products/infra/typeorm/repositories/implementations/ProductsRepository';
import { IProductsRepository } from '../../modules/products/repositories/IProductsRepository';

container.registerSingleton<IProductsRepository>('ProductsRepository', ProductsRepository);
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);