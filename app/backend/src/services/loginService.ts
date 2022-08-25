import validateUserPassword from '../helpers/validateUserPassword';
import { IServiceInterfaceLogin } from '../interfaces/IServiceInterfaceLogin';
import CustomerError from '../utils/customerError';
import tokenGenerate from '../helpers/tokenGenerate';
import LoginRepository from '../repository/loginRepository';

export default class NewLoginService implements IServiceInterfaceLogin{
  
  constructor(private modelLogin: LoginRepository) {
  }

    public resultServiceLogin = async (email: string, password: string): Promise<string> => {
      const resultUserModel = await this.modelLogin.resultLogin(email)
      console.log(resultUserModel);
      

      if (!resultUserModel) throw new CustomerError(401, 'Incorrect email or password');

      validateUserPassword(password, resultUserModel.password)

      return tokenGenerate(resultUserModel);
    
  }
}