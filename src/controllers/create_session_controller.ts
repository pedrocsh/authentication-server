import { Request, Response } from 'express'
import { CreateSessionService } from '../services/create_session_service'

export class CreateSessionController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const createSessionService = new CreateSessionService()
    const { statusCode, body } = await createSessionService.execute(request.body)

    return response.status(statusCode).json(body)
  }
}
