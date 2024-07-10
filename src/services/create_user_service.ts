import { hash } from 'bcryptjs';
import { prisma } from '../prisma';
import { Response } from '../protocols/http';

export class CreateUserService {
  public async execute(request: any): Promise<Response> {
    const requiredFields = ['name', 'email', 'password'];

    for (const field of requiredFields) {
      if (!request[field]) {
        return {
          statusCode: 400,
          body: `Missing field: ${field}`
        };
      }
    }

    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email: request.email
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

    const passwordHash = await hash(request.password, 8);
    const user = await prisma.user.create({
      data: {
        name: request.name,
        email: request.email,
        password: passwordHash
      },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return {
      statusCode: 201,
      body: {
        user
      }
    };
  }
}
