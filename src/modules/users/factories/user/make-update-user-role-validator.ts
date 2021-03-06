import {
  RequiredFieldValidator,
  ValidatorComposite
} from '../../../../shared/presentation/helpers/validators'
import { Validator } from '../../../../shared/presentation/helpers/validators/protocols/validator'

export const makeUpdateUserRoleValidator = (): ValidatorComposite => {
  const validators: Validator[] = []
  for (const field of ['id']) {
    validators.push(new RequiredFieldValidator(field))
  }
  return new ValidatorComposite(validators)
}
