import { Request, Response } from "express";
import TeamsService from '../services/teamsService';

class TeamsController {
  
   ControllerTeamsAll = async (req: Request, res: Response) => {
    const resultTeamsServiceAll = await TeamsService.ServiceTeamsAll()
    console.log('resultTeamsServiceAll', resultTeamsServiceAll);
    
    return res.status(200).json(resultTeamsServiceAll);
  };
}

export default new TeamsController();
