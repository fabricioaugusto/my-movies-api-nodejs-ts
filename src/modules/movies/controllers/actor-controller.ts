import { ApiController } from '../../../shared/presentation/protocols/api-controller'
import { Request, Response } from 'express'
import { makeCreateActorService } from '../factories/actor/make-create-actor-service'
import ListActorService from '../services/actor/list-actor-service'

export default class ActorController implements ApiController {
  async create (request: Request, response: Response): Promise<Response> {
    const createActor = makeCreateActorService()
    const res = await createActor.execute({ body: request.body })
    return response.status(res.statusCode).json(res)
  }

  async index (request: Request, response: Response): Promise<Response> {
    const listActor = new ListActorService()
    const res = await listActor.execute()
    return response.status(res.statusCode).json(res)
  }
}
