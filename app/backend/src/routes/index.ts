import { Router } from 'express';

import routerLogin from './login.routes';
import routerTeams from './teams.routes';
import routerMatches from './matches.routes';

const routes = Router();

routes.use('/login', routerLogin);
routes.use('/teams', routerTeams);
routes.use('/matches', routerMatches);

export default routes;
