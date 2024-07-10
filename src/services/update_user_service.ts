import { compare, hash } from 'bcryptjs';
import { prisma } from '../prisma';
import { Response } from '../protocols/http';

export class UpdateUserService {
  public async execute(request: any): Promise<Response> {
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

    if (request.body.password) {
      if (!request.body.oldPassword) {
        return {
          statusCode: 400,
          body: {
            message: 'Missing param: oldPassword'
          }
        };
      }

      const { password, oldPassword } = request.body;
      const passwordMatch = await compare(oldPassword, user.password);

      if (!passwordMatch) {
        return {
          statusCode: 400,
          body: {
            message: 'Password does not match'
          }
        };
      }

      const passwordHash = await hash(password, 8);

      user.password = passwordHash;
    }

    const userUpdated = await prisma.user.update({
      where: {
        id: request.body.id
      },
      data: {
        name: user.name,
        email: user.email,
        password: user.password
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
