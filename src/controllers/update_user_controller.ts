import { Request, Response } from 'express';
import { UpdateUserService } from '../services/update_user_service';

export class UpdateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const id = request.user.id;
    const updateUserService = new UpdateUserService();
    const { statusCode, body } = await updateUserService.execute({
      body: {
        id,
        ...request.body
      }
    });

    return response.status(statusCode).json(body);
  }
}
