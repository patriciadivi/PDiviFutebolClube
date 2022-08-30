import Teams from '../database/models/TeamsModel';
import Matches from '../database/models/MatchesModel';

class MatchesRepository {

  public RepositoryMatchesAll = async () => {
    const resultMatchesModelAll = await Matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return resultMatchesModelAll
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
}

export default new MatchesRepository();