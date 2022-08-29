import TeamsRepository from '../repository/teamsRepository';

class TeamsService {

  public ServiceTeamsAll = async () => {
    const resultTeamsRepository = await TeamsRepository.RepositoryTeamsAll(); 
    return resultTeamsRepository;
  };

  public ServiceTeamsByAppId = async (id: string) => {
    const resultTeamsRepositoryId = await TeamsRepository.RepositoryTeamsId(id);
    return resultTeamsRepositoryId;
  };
}

export default new TeamsService();