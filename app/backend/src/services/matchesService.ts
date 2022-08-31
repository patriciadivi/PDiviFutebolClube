import { CustomerError } from '../utils/customerError';
import MatchesRepository from '../repository/matchesRepository';
import TeamsRepository from '../repository/teamsRepository';

class MatchesService {
  public ServiceMatchesAll = async () => {
    const resultMatchesServiceAll = await MatchesRepository.RepositoryMatchesAll();
    return resultMatchesServiceAll;
  };

  public ServiceMatchesInProgress = async (inProgress: boolean) => {
    const resultMatchesInProgress = await MatchesRepository.RepositoryMatchesInProgress(inProgress);
    return resultMatchesInProgress;
  };

  public ServiceMatchesFinish = async (finishId: number) => {
    await MatchesRepository.RepositoryMatchesFinish(finishId);
  };

  public ServiceMatchesCreate = async (bodyParams: any) => {
    const { homeTeam, awayTeam } = bodyParams;
    const resultHomeTeam = await TeamsRepository.RepositoryTeamsId(homeTeam);
    const resultAwayTeam = await TeamsRepository.RepositoryTeamsId(awayTeam);

    if (!resultHomeTeam || !resultAwayTeam) {
      throw new CustomerError(404, 'There is no team with such id!');
    }

    const newMtche = {
      ...bodyParams,
      inProgress: true,
    };
    const resultMatchesServiceCreate = await MatchesRepository.RepositoryMatchesCreate(newMtche);
    console.log(resultMatchesServiceCreate);
    return resultMatchesServiceCreate;
  };
}

export default new MatchesService();
