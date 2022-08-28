import { Router } from 'express';

import routerLogin from './login.routes';
import roguterTeams from './teams.routes';

const routes = Router();

routes.use('/login', routerLogin);
routes.use('/teams', roguterTeams);

export default routes;
