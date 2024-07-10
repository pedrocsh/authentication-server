import { prisma } from '../prisma';
import { Response } from '../protocols/http';

export class DeleteUserService {
  public async execute(id: string): Promise<Response> {
    await prisma.user.delete({
      where: {
        id
      }
    });

    return {
      statusCode: 200
    };
  }
}
