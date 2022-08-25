import UserModel from '../database/models/UserModel';
import { IUserInterface } from '../interfaces/IUserInterface';

export default class LoginRepository {
  private userModel = UserModel;

  public resultLogin = async (email: string): Promise<IUserInterface> => {
    const resultUser = await this.userModel.findOne({ where: { email }, raw: true });

    return resultUser as IUserInterface;
  };
}
