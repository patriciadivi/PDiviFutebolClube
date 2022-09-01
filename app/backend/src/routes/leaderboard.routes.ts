import { Router } from 'express';
import LoginController from '../controllers/leaderboardController';

const routerLeaderboard = Router();

routerLeaderboard.get('/home', LoginController.ControllerLeaderboardAll);

export default routerLeaderboard;
