import { Router } from 'express';

import { userRouter } from '@src/routes/router/user.routes';
import { categoryRouter } from '@src/routes/router/category.routes';
import { productRouter } from './router/product.routes';
import { orderRouter } from './router/order.routes';

const router = Router();

router.use(userRouter);
router.use(categoryRouter);
router.use(productRouter);
router.use(orderRouter);

export { router };