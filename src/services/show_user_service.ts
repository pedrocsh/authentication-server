import { prisma } from '../prisma';
import { Response } from '../protocols/http';

export class ShowUserService {
  public async execute(id: string): Promise<Response> {
    const user = await prisma.user.findFirst({
      where: {
        id
      }
    });

    if (!user) {
      return {
        statusCode: 404,
        body: {
          message: 'User not found'
        }
      };
    }

    return {
      statusCode: 200,
      body: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        }
      }
    };
  }
}
