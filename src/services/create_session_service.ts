import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { auth } from '../config/auth';
import { prisma } from '../prisma';
import { Response } from '../protocols/http';

const { secret, expiresIn } = auth;

export class CreateSessionService {
  public async execute(request: any): Promise<Response> {
    const requiredFields = ['email', 'password'];

    for (const field of requiredFields) {
      if (!request[field]) {
        return {
          statusCode: 400,
          body: {
            message: `Missing field: ${field}`
          }
        };
      }
    }

    const user = await prisma.user.findFirst({
      where: {
        email: request.email
      }
    });

    if (!user) {
      return {
        statusCode: 400,
        body: {
          message: 'User does not exists'
        }
      };
    }

    const passwordMatch = await compare(request.password, user.password);

    if (!passwordMatch) {
      return {
        statusCode: 401,
        body: {
          message: 'User/password does not match'
        }
      };
    }

    const token = sign(
      {
        id: user.id
      },
      secret,
      {
        expiresIn
      }
    );

    return {
      statusCode: 201,
      body: {
        token,
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
