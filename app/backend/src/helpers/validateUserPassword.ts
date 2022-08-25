import * as bcrypt from 'bcryptjs';
import CustomerError from '../utils/customerError';

const validateUserPassword = (password: string, passwordCompare: string) => {
  const validationPassword = bcrypt.compareSync(password, passwordCompare);

  if (!validationPassword) {
    throw new CustomerError(401, 'Incorrect email or password')
  }

  return validationPassword;

};

export default validateUserPassword;