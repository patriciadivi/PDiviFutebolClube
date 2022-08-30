import { Request, Response } from "express";
import MatchesService from '../services/matchesService';

class Matchescontroller {

  ControllerMatchesAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    
    if (inProgress) {
      const boolParams = (inProgress === 'true');
      const resultMatchesModelInprogress = await MatchesService.ServiceMatcherInProgress(boolParams);
      return res.status(200).json(resultMatchesModelInprogress);
      
    } 
    const resultMatchesServiceAll = await MatchesService.ServiceMatcherAll();
    return res.status(200).json(resultMatchesServiceAll);
  };

}

export default new Matchescontroller();