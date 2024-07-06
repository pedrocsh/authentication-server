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

    return {
      statusCode: 201
    }
  }
}
