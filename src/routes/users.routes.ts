import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ensureAuthenticated } from "../shared/infra/http/middlewares/ensureAuthenticated";

const usersRouter = Router();
const createUserController = new CreateUserController();

usersRouter.post("/", ensureAuthenticated, createUserController.handle);

export { usersRouter };