import { Router } from 'express';

import routerLogin from './login.routes';

const routes = Router();

routes.use('/login', routerLogin);

export default routes;
