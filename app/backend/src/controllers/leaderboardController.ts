import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

class LeaderboardController {
  ControllerLeaderboardAll = async (_req: Request, res: Response) => {
    const resultLeaderboardAll = await LeaderboardService.ServiceLeaderboardAll();
    // console.log(resultLeaderboardAll);

    return res.status(200).json(resultLeaderboardAll);
  };
}

export default new LeaderboardController();
