import { RequiredFieldValidator } from './required-field-validator'
import { MissingParamError } from '../errors'

const makeSut = (): RequiredFieldValidator => {
  return new RequiredFieldValidator('field')
}

describe('Required Field Validator', () => {
  it('Should return error if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('field'))
  })
  it('Should not return anything if the field is validated', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'field' })
    expect(error).toBeFalsy()
  })
})
