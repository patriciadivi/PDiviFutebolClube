import { Request, Response } from 'express';
import { IServiceInterfaceLogin } from '../interfaces/IServiceInterfaceLogin';

export default class NewLoginController {
  // private _serviceLogin: IServiceInterfaceLogin;

  constructor(private serviceLogin: IServiceInterfaceLogin) {
    // this._serviceLogin = serviceLogin;
    // this.ControllerLogin = this.ControllerLogin.bind(this);
  }

  public ControllerLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    // console.log(req.body);
    const resultToken = await this.serviceLogin.resultServiceLogin(email, password);
    return res.status(200).json({ token: resultToken });
    
  }
}