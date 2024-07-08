import { Request, Response } from 'express';
import { ShowUserService } from '../services/show_user_service';

export class ShowUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const id = request.user.id;
    const showUserService = new ShowUserService();
    const { statusCode, body } = await showUserService.execute(id);

    return response.status(statusCode).json(body);
  }
}
