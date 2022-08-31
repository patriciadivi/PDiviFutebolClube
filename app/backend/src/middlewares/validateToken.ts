import { Request, Response, NextFunction } from 'express';
import { CustomerError } from '../utils/customerError';
import { decryptTokenfunc } from '../helpers/decryptTokenfunc';

const valiteToken = (req: Request, _res: Response, next: NextFunction): void => {
  const { homeTeam, awayTeam } = req.body;
  const { authorization } = req.headers;

  if (homeTeam === awayTeam) {
    throw new CustomerError(401, 'It is not possible to create a match with two equal teams');
  }
  if (!authorization) throw new CustomerError(401, 'Token must be a valid token');
  const token = decryptTokenfunc(authorization as string);

  if (!token) throw new CustomerError(401, 'Token must be a valid token');

  const { role } = JSON.parse(JSON.stringify(token));

  if (!role) throw new CustomerError(401, 'Incorrect email or password');

  next();
};

export default valiteToken;
