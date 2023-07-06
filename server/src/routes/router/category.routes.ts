import { Router } from 'express';

import { CreateCategoryController } from '@src/controllers/category/CreateCategoryController';
import { ListCategoryController } from '@src/controllers/category/ListCategoryController';

// Import middles
import { Authenticated } from '@src/middlewares/Authenticated';

const categoryRouter = Router();
// Create category
categoryRouter.post('/category', Authenticated, new CreateCategoryController().handle);
// List category
categoryRouter.get('/category', Authenticated, new ListCategoryController().handle);

export { categoryRouter };