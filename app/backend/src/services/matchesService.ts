import MatchesRepository from '../repository/matchesRepository';
// import Matches from '../database/models/MatchesModel';

class MatchesService {

  public ServiceMatcherAll = async () => {
    const resultMatchesServiceAll = await MatchesRepository.RepositoryMatchesAll()
    return resultMatchesServiceAll;

  }

  public ServiceMatcherInProgress = async (inProgress: boolean) => {
    const resultMatchesServiceInProgress = await MatchesRepository.RepositoryMatchesInProgress(inProgress)
    return resultMatchesServiceInProgress;
  };
}

export default new MatchesService();