import { Request, Response } from 'express';
import { DeleteUserService } from '../services/delete_user_service';

export class DeleteUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const id = request.user.id;
    const deleteUserService = new DeleteUserService();
    const { statusCode, body } = await deleteUserService.execute(id);

    return response.status(statusCode).json(body);
  }
}
