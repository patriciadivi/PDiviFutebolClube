import * as jwt from 'jsonwebtoken';
// import { JwtPayload } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { CustomerError } from '../utils/customerError';

dotenv.config();

const jwtSecret = process.env.JWT_SECRET || 'secret2694Divi';

export const decryptTokenfunc = (paramsToken: string) => {
  try {
    const data = jwt.verify(paramsToken, jwtSecret) as { data: jwt.JwtPayload };
    // const { role } = JSON.parse(JSON.stringify(data.data));
    // console.log(role);
    if (!data) throw new CustomerError(401, 'Token must be a valid token');
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export default decryptTokenfunc;
