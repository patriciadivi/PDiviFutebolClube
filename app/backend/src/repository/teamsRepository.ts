import Teams from '../database/models/TeamsModel';

class TeamsRepository {

  public RepositoryTeamsAll = async () => {
    const resultModeAll = await Teams.findAll();
    return resultModeAll as [];
  };

  RepositoryTeamsId = async (idParam: string) => {
    const idToRepository = Number(idParam);
    const resultModeId = await Teams.findOne({ where: { id: idToRepository }});
    return resultModeId as Teams;
  };
}

export default new TeamsRepository();