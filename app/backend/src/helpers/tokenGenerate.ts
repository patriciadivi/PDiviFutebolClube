import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { IUserInterface } from '../interfaces/IUserInterface';

dotenv.config();

const tokenGenerate = (data: IUserInterface) => {
  const { id, username, role, email } = data;
  const newUser = { id, username, role, email };
  const token = jwt.sign({ data: newUser }, process.env.JWT_SECRET || 'secret2694Divi', {
    expiresIn: '365d',
    algorithm: 'HS256',
  });
  return token;
};

export default tokenGenerate;
