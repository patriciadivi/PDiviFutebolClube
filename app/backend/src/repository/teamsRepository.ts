import Teams from '../database/models/TeamsModel';

class TeamsRepository {

  public RepositoryTeamsAll = async (): Promise<Teams[]> => {
    const resultModeAll = await Teams.findAll();
    return resultModeAll;
  };

  RepositoryTeamsId = async (idParam: string) => {
    const idToRepository = Number(idParam);
    const resultModeId = await Teams.findOne({ where: { id: idToRepository }});
    return resultModeId as Teams;
  };
}

export default new TeamsRepository();