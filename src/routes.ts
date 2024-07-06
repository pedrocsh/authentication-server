import { Router } from 'express'
import { CreateUserController } from './controllers/create_user_controller'

export const routes = Router()
const createUserController = new CreateUserController()

routes.post('/users', createUserController.handle)
