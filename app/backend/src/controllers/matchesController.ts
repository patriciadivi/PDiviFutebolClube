import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';

class Matchescontroller {
  ControllerMatchesAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    if (inProgress) {
      const boolParams = (inProgress === 'true');
      const resultMatchesInprogress = await MatchesService.ServiceMatchesInProgress(boolParams);
      return res.status(200).json(resultMatchesInprogress);
    }

    const resultMatchesServiceAll = await MatchesService.ServiceMatchesAll();
    return res.status(200).json(resultMatchesServiceAll);
  };

  public ControllerMatchesCreate = async (req: Request, res: Response) => {
    const { body } = req;
    const resultMatchesControllerCreate = await MatchesService.ServiceMatchesCreate(body);
    return res.status(201).json(resultMatchesControllerCreate);
  };

  public ControllerMatchesFinish = async (req: Request, res: Response) => {
    const { id } = req.params;
    await MatchesService.ServiceMatchesFinish(+id);
    return res.status(200).json({ message: 'Finished' });
  };

  public ControllerMatchesId = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    await MatchesService.ServiceMatchesId(body, +id);
    res.status(200).json({ message: 'Update done successfully' });
  };
}

export default new Matchescontroller();
