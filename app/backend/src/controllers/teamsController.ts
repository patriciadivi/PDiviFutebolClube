import { Request, Response } from "express";
import TeamsService from '../services/teamsService';

class TeamsController {

  ControllerTeamsAll = async (_req: Request, res: Response) => {
    const resultTeamsServiceAll = await TeamsService.ServiceTeamsAll();
    return res.status(200).json(resultTeamsServiceAll);
  };

  ControllerTeamsId = async (req: Request, res: Response) => {
    const { id } = req.params;
    // console.log(req.params);
    const resultTeamsServiceId = await TeamsService.ServiceTeamsByAppId(id)
    return res.status(200).json(resultTeamsServiceId);

  };
}

export default new TeamsController();
