import { prisma } from '../prisma';

interface Response {
  statusCode: number;
  body?: any;
}

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
