import { HttpResponse } from './protocols/http'
import { ServerError, UnauthorizedError } from '../errors'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})

export const ok = (body: any): HttpResponse => ({
  statusCode: 200,
  body: body
})

export const created = (body: any): HttpResponse => ({
  statusCode: 201,
  body: body
})
