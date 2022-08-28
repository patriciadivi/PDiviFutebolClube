import Teams from '../database/models/TeamsModel';

class TeamsRepository {

  public RepositoryTeamsAll = async () => {
    const resultModeAll = await Teams.findAll();
    return resultModeAll as [];
  };
}

export default new TeamsRepository();