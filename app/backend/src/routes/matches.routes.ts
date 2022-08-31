import { Router } from 'express';
import validateToken from '../middlewares/validateToken';
import Matchescontroller from '../controllers/matchesController';

const routesMatches = Router();

routesMatches.get('/', Matchescontroller.ControllerMatchesAll);
routesMatches.post('/', validateToken, Matchescontroller.ControllerMatchesCreate);
routesMatches.patch('/:id/', Matchescontroller.ControllerMatchesId);
routesMatches.patch('/:id/finish', Matchescontroller.ControllerMatchesFinish);

export default routesMatches;
