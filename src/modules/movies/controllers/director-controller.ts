import { ApiController } from '../../../shared/protocols/api-controller'
import { Request, Response } from 'express'
import { makeCreateDirectorService } from '../factories/director/make-create-director-service'
import ListDirectorService from '../services/director/list-director-service'

export default class DirectorController implements ApiController {
  async create (request: Request, response: Response): Promise<Response> {
    const createDirector = makeCreateDirectorService()
    const res = await createDirector.execute({ body: request.body })
    return response.json(res)
  }

  async index (request: Request, response: Response): Promise<Response> {
    const listDirector = new ListDirectorService()
    const res = await listDirector.execute()
    return response.json(res)
  }
}
