import { Request, Response, NextFunction } from 'express';
import CustomerError from '../utils/customerError';


const loginValidateMiddlewares = (req: Request, _res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  // const regex: string = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+).(.[a-z]{2,3})$';

  const regex = new RegExp(
    '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+).(.[a-z]{2,3})$',
  );

  if (!email || !password) throw new CustomerError(400, 'All fields must be filled');

  if (!regex.test(email) || password.length < 6) throw new CustomerError(401, 'Incorrect email or password')

  next();
}

export default loginValidateMiddlewares;

