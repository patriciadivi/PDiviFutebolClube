// import { CustomerError } from '../utils/customerError';
import TeamsRepository from '../repository/teamsRepository';

class TeamsService {
  public ServiceTeamsAll = async () => {
    const resultTeamsRepository = await TeamsRepository.RepositoryTeamsAll();
    return resultTeamsRepository;
  };

  public ServiceTeamsByAppId = async (id: string) => {
    const resultTeamsRepositoryId = await TeamsRepository.RepositoryTeamsId(id);

    // if (resultTeamsRepositoryId.count < 2) throw new CustomerError(401, 'There is no team with such id!');
    return resultTeamsRepositoryId;
  };
}

export default new TeamsService();
