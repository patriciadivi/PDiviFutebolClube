import { Router } from 'express';
import TeamsController from '../controllers/teamsController';

const roguterTeams = Router();

roguterTeams.get('/', TeamsController.ControllerTeamsAll);

export default roguterTeams;
