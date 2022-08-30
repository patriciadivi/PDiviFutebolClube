import { Router } from 'express';
import Matchescontroller from '../controllers/matchesController';

const routesMatches = Router();

routesMatches.get('/', Matchescontroller.ControllerMatchesAll);

export default routesMatches;
