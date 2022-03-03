import { Router } from "express";
import { productsRouter } from "./products.routes";
import { sessionsRouter } from "./sessions.routes";
import { usersRouter } from "./users.routes";

const indexRouter = Router();

indexRouter.use('/products', productsRouter);
indexRouter.use('/users', usersRouter);
indexRouter.use('/sessions', sessionsRouter);

export { indexRouter };