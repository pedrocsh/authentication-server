import { prisma } from '../prisma'

interface Response {
  statusCode: number
  body?: any
}

export class CreateUserService {
  public async execute(request: any): Promise<Response> {
    const requiredFields = ['name', 'email', 'password']

    for (const field of requiredFields) {
      if (!request[field]) {
        return {
          statusCode: 400,
          body: `Missing field: ${field}`
        }
      }
    }

    await prisma.user.create({
      data: {
        name: request.name,
        email: request.email,
        password: request.password
      }
    })

    return {
      statusCode: 201
    }
  }
}
