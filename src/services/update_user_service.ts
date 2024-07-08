import { prisma } from '../prisma';

interface Request {
  body?: any;
}

interface Response {
  statusCode: number;
  body?: any;
}

export class UpdateUserService {
  public async execute(request: Request): Promise<Response> {
    const user = await prisma.user.findFirst({
      where: {
        id: request.body.id
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

    if (request.body.name) {
      user.name = request.body.name;
    }

    if (request.body.email) {
      const userAlreadyExists = await prisma.user.findFirst({
        where: {
          email: request.body.email
        }
      });

      if (userAlreadyExists) {
        return {
          statusCode: 400,
          body: {
            message: 'User already exists'
          }
        };
      }

      user.email = request.body.email;
    }

    const userUpdated = await prisma.user.update({
      where: {
        id: request.body.id
      },
      data: {
        name: user.name,
        email: user.email
      }
    });

    return {
      statusCode: 200,
      body: {
        user: {
          id: userUpdated.id,
          name: userUpdated.name,
          email: userUpdated.email,
          createdAt: userUpdated.createdAt,
          updatedAt: userUpdated.updatedAt
        }
      }
    };
  }
}
