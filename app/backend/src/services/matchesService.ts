import MatchesRepository from '../repository/matchesRepository';
// import Matches from '../database/models/MatchesModel';

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

  public ServiceMatchesCreate = async (bodyParams: object) => {
    console.log(bodyParams);
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
