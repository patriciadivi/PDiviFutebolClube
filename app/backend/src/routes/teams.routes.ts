import { Router } from 'express';
import TeamsController from '../controllers/teamsController';

const routerTeams = Router();

routerTeams.get('/', TeamsController.ControllerTeamsAll);
routerTeams.get('/:id', TeamsController.ControllerTeamsId);

export default routerTeams;
