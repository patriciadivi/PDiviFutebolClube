import TeamsRepository from './teamsRepository';
import MatchesRepository from './matchesRepository';

class LeaderboardRepository {
  public RepositoryLeaderboardAll = async () => {
    const resultSearchTeamsArray = await MatchesRepository.RepositoryMatchesFinished();
    const teams = await TeamsRepository.RepositoryTeamsAll();
    const teamsArr = teams.map((team) => resultSearchTeamsArray
      .filter((matches) => matches.homeTeam === team.id));
    // console.log('>>>', teamsArr);
    return teamsArr;

    // console.log('>>', teams);
    // const resultSearchTeamsArray = await Promis
    //   .all(teams.map(async (team: any) => {
    //     const [resultMatches]: any = await MatchesRepository.RepositoryMatchesFinished(team.id);
    //     return { teamName: team.teamName, resultMatches: resultMatches.dataValues };
    //   }));
    // console.log(resultSearchTeamsArray);
    // console.log('Repository>>>>', resultSearchTeamsArray[0].resultMaches.teamHome.teams);

    // return resultSearchTeamsArray;
  };
}

export default new LeaderboardRepository();
