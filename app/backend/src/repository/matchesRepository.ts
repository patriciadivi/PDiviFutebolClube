import Teams from '../database/models/TeamsModel';
import Matches from '../database/models/MatchesModel';
import IResultCreate from '../interfaces/IResultCreate';

class MatchesRepository {
  public RepositoryMatchesAll = async () => {
    const resultMatchesModelAll = await Matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return resultMatchesModelAll;
  };

  public RepositoryMatchesInProgress = async (inPro: boolean) => {
    const resultMatchesModelInProgress = await Matches.findAll({
      where: { inProgress: inPro },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return resultMatchesModelInProgress;
  };

  public RepositoryMatchesCreate = async (newMtcheCreate: IResultCreate) => {
    const resultCreate = Matches.create(newMtcheCreate);
    console.log('created >>>>>>>>>>', resultCreate);
    return resultCreate;
  };

  public RepositoryMatchesFinish = async (finishId: number) =>
    Matches.update({ inProgress: false }, { where: { id: finishId } });

  public RepositoryMatchesId = async (bodyParams: object, id: number) =>
    Matches.update(bodyParams, { where: { id } });

  public RepositoryMatchesFinished = async () => {
    const resultFinishedMatches = await Matches.findAll(
      { where: { inProgress: false },
        include: [
          { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } }],
      },
    );
    return resultFinishedMatches;
  };
}

export default new MatchesRepository();
