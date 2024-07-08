import { Router } from 'express';
import { CreateSessionController } from './controllers/create_session_controller';
import { CreateUserController } from './controllers/create_user_controller';

export const routes = Router();
const createUserController = new CreateUserController();
const createSessionController = new CreateSessionController();

routes.post('/users', createUserController.handle);
routes.post('/sessions', createSessionController.handle);
