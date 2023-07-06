import { Router } from 'express';
import multer from 'multer';

import { CreateProductController } from '@src/controllers/product/CreateProductController';
import { ListByCategoryController } from '@src/controllers/product/ListByCategoryController';

// Import middles
import { Authenticated } from '@src/middlewares/Authenticated';

import { uploadConfig } from '@src/config/multer';

const productRouter = Router();

const upload = multer(uploadConfig('./tmp'));
// Create product
productRouter.post('/product', Authenticated, upload.single('file'), new CreateProductController().handle);
// List products by category_id
productRouter.get('/product/category', Authenticated, new ListByCategoryController().handle);

export { productRouter };