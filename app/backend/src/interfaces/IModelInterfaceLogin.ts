import { IUserInterface } from './IUserInterface';

export interface IModelInterfaceLogin {
  resultModelLogin(email: string): Promise<IUserInterface>;
}
