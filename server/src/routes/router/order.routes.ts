import { Router } from 'express';

import { CreateOrderController } from '@src/controllers/order/CreateOrderController';
import { RemoveOrderController } from '@src/controllers/order/RemoveOrderController';
import { AddItemController } from '@src/controllers/order/AddItemController';
import { RemoveItemController } from '@src/controllers/order/RemoveItemController';
import { SendOrderController } from '@src/controllers/order/SendOrderController';
import { ListOrderController } from '@src/controllers/order/ListOrderController';
import { DetailOrderController } from '@src/controllers/order/DetailOrderController';
import { FinishOrderController } from '@src/controllers/order/FinishOrderController';

// Import middles
import { Authenticated } from '@src/middlewares/Authenticated';

const orderRouter = Router();
// Create a new order
orderRouter.post('/order', Authenticated, new CreateOrderController().handle);
// Delete order
orderRouter.delete('/order', Authenticated, new RemoveOrderController().handle);
// Add item to order
orderRouter.post('/order/add', Authenticated, new AddItemController().handle);
// Remove item to order
orderRouter.delete('/order/remove', Authenticated, new RemoveItemController().handle);
// Update draft in the order
orderRouter.put('/order/send', Authenticated, new SendOrderController().handle);
// List all orders that status and draft is false
orderRouter.get('/order/list', Authenticated, new ListOrderController().handle);
// Show order details
orderRouter.get('/order/detail', Authenticated, new DetailOrderController().handle);
// Finishment of the order
orderRouter.put('/order/finish', Authenticated, new FinishOrderController().handle);

export { orderRouter };