import TeamsRepository from '../repository/teamsRepository';

class TeamsService {

  public ServiceTeamsAll = async () => {
    const resultTeamsRepository = await TeamsRepository.RepositoryTeamsAll(); 
    return resultTeamsRepository;
  };
}

export default new TeamsService();