import { Router } from 'express';
import TeamsController from '../controllers/teamsController';

const roguterTeams = Router();

roguterTeams.get('/', TeamsController.ControllerTeamsAll);
roguterTeams.get('/:id', TeamsController.ControllerTeamsId);

export default roguterTeams;
