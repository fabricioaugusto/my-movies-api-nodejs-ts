import { Request, Response } from 'express'
import { makeCreateUserService } from '../factories/user/make-create-user-service'
import { ApiController } from '../../../shared/presentation/protocols/api-controller'
import { makeUpdateUserService } from '../factories/user/make-update-user-service'

export class UserController implements ApiController {
  async create (request: Request, response: Response): Promise<Response> {
    const createUser = makeCreateUserService()
    const res = await createUser.execute({ body: request.body })
    delete res.body.password
    return response.status(res.statusCode).json(res)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateUser = makeUpdateUserService()
    const res = await updateUser.execute({ body: request.body })
    return response.status(res.statusCode).json(res)
  }
}
