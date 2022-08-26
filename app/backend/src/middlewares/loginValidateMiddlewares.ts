import { Request, Response, NextFunction } from 'express';
import { CustomerError } from '../utils/customerError';
import { regexEmail } from '../utils/emailRegex';

const loginValidateMiddlewares = (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) throw new CustomerError(400, 'All fields must be filled');

  if (!regexEmail.test(email) || password.length < 6) {
    throw new CustomerError(401, 'Incorrect email or password');
  }

  next();
};

export default loginValidateMiddlewares;
