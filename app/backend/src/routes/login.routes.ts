import { Router } from 'express';
import LoginRepository from '../repository/loginRepository';
import LoginController from '../controllers/loginController';
import LoginService from '../services/loginService';
import middlewares from '../middlewares/index';

const newLoginRepository = new LoginRepository();
const newLoginService = new LoginService(newLoginRepository);
const newLoginController = new LoginController(newLoginService);

const routerLogin = Router();

routerLogin.post('/', middlewares.loginValidateMiddlewares, newLoginController.ControllerLogin);

// Router para test
// routerLogin.get('/test', (_req, res) => {
//   res.status(200).json({ message: 'Login successful' });
// });

export default routerLogin;
