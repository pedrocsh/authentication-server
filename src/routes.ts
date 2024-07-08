import { Router } from 'express';
import { CreateSessionController } from './controllers/create_session_controller';
import { CreateUserController } from './controllers/create_user_controller';
import { DeleteUserController } from './controllers/delete_user_controller';
import { ShowUserController } from './controllers/show_user_controller';
import { ensureAuthenticated } from './middlewares/ensure_authenticated';

export const routes = Router();
const createUserController = new CreateUserController();
const createSessionController = new CreateSessionController();
const showUserController = new ShowUserController();
const deleteUserController = new DeleteUserController();

routes.post('/users', createUserController.handle);
routes.post('/sessions', createSessionController.handle);
routes.use(ensureAuthenticated);
routes.get('/users', showUserController.handle);
routes.delete('/users', deleteUserController.handle);
