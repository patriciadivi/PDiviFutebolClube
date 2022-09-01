import { Router } from 'express';

import routerLogin from './login.routes';
import routerTeams from './teams.routes';
import routerMatches from './matches.routes';
import routerLeaderboard from './leaderboard.routes';

const routes = Router();

routes.use('/login', routerLogin);
routes.use('/teams', routerTeams);
routes.use('/matches', routerMatches);
routes.use('/leaderboard', routerLeaderboard);

export default routes;
