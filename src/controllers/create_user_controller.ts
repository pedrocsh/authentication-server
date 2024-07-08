import { Request, Response } from 'express';
import { CreateUserService } from '../services/create_user_service';

export class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const createUserService = new CreateUserService();
    const { statusCode, body } = await createUserService.execute(request.body);

    return response.status(statusCode).json(body);
  }
}
