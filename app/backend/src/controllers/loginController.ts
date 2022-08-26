import { Request, Response } from 'express';
import NewLoginService from '../services/loginService';
import { IServiceInterfaceLogin } from '../interfaces/index';

export default class NewLoginController {
  private service = NewLoginService;

  constructor(private serviceLogin: IServiceInterfaceLogin) {}

  public ControllerLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const resultToken = await this.serviceLogin.resultServiceLogin(email, password);
    return res.status(200).json({ token: resultToken });
  };

  public ControllerLoginValidate = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    await this.service.resultServiceLoginValidate(authorization as string);
    return res.status(200).json({ role: 'admin' });
  };
}
