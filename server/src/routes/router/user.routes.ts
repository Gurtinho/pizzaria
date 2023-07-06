import { Router } from 'express';

import { CreateUserController } from '@src/controllers/user/CreateUserController';
import { AuthUserController } from '@src/controllers/user/AuthUserController';
import { DetailUserController } from '@src/controllers/user/DetailUserController';

// Import middles
import { Authenticated } from '@src/middlewares/Authenticated';

const userRouter = Router();
// User Creation
userRouter.post('/user', new CreateUserController().handle);
// User Session
userRouter.post('/session', new AuthUserController().handle);
// User Details
userRouter.get('/me', Authenticated, new DetailUserController().handle);

export { userRouter };