import LeaderboardRepository from '../repository/leaderboardRepository';

class LeaderboardService {
  public OrderClassification = (resultTeamRanking: any) => {
    const resultClassification = resultTeamRanking.sort((teamA: any, teamB: any) => {
      if (teamA.totalPoints > teamB.totalPoints) return -1;
      if (teamA.totalPoints < teamB.totalPoints) return 1;

      if (teamA.totalVictories > teamB.totalVictories) return -1;
      if (teamA.totalVictories < teamB.totalVictories) return 1;

      if (teamA.goalsBalance > teamB.goalsBalance) return -1;
      if (teamA.goalsBalance < teamB.goalsBalance) return 1;

      if (teamA.goalsFavor > teamB.goalsFavor) return -1;
      if (teamA.goalsFavor < teamB.goalsFavor) return 1;

      if (teamA.goalsOwn > teamB.goalsOwn) return -1;
      if (teamA.goalsOwn < teamB.goalsOwn) return 1;

      return 0;
    });
    return resultClassification;
  };

  public ServiceGoalsOwn = (paramsResultMatches: any) => {
    const resultGoalsOwn = paramsResultMatches
      .reduce((accumulator: number, counter: any) => accumulator + counter.awayTeamGoals, 0);
    return resultGoalsOwn;
  };

  public ServiceGoalsFavor = (paramsResultMatches: any) => {
    const resultGoalsFavor = paramsResultMatches
      .reduce((accumulator: number, counter: any) => accumulator + counter.homeTeamGoals, 0);
    return resultGoalsFavor;
  };

  public ServiceTotalLosses = (paramsResultMatches: any) => {
    const resultTotalLosses = paramsResultMatches.reduce((accumulator: number, counter: any) => {
      if (counter.homeTeamGoals < counter.awayTeamGoals) return accumulator + 1;
      return accumulator;
    }, 0);
    return resultTotalLosses;
  };

  public ServiceTotalDraws = (paramsResultMatches: any) => {
    const resultServiceTotalDraws = paramsResultMatches
      .reduce((accumulator: number, counter: any) => {
        if (counter.homeTeamGoals === counter.awayTeamGoals) return accumulator + 1;
        return accumulator;
      }, 0);
    return resultServiceTotalDraws;
  };

  public ServiceTotalVictories = (paramsResultMatches: any) => {
    const resultTotalVictories = paramsResultMatches.reduce((accumulator: number, counter: any) => {
      if (counter.homeTeamGoals > counter.awayTeamGoals) return accumulator + 1;
      return accumulator;
    }, 0);
    return resultTotalVictories;
  };

  public ServiceTotalPoints = (paramsResultMatches: any) => {
    // console.log(paramsResultMatches,'<<<<<<<<');
    const resultTotalPoints = paramsResultMatches.reduce((accumulator: number, counter: any) => {
      if (counter.homeTeamGoals > counter.awayTeamGoals) return accumulator + 3;
      if (counter.homeTeamGoals === counter.awayTeamGoals) return accumulator + 1;
      // console.log('>>>>', counter.homeTeamGoals, counter.awayTeamGoals, accumulator);
      // console.log(accumulator);
      return accumulator;
    }, 0);
    return resultTotalPoints;
  };

  public ServiceScoreGames = (paramsTeamName: string, paramsResultMatches: any) => ({
    name: paramsTeamName,
    totalPoints: this.ServiceTotalPoints(paramsResultMatches),
    totalGames: paramsResultMatches.length,
    totalVictories: this.ServiceTotalVictories(paramsResultMatches),
    totalDraws: this.ServiceTotalDraws(paramsResultMatches),
    totalLosses: this.ServiceTotalLosses(paramsResultMatches),
    goalsFavor: this.ServiceGoalsFavor(paramsResultMatches),
    goalsOwn: this.ServiceGoalsOwn(paramsResultMatches),
    goalsBalance: this.ServiceGoalsFavor(paramsResultMatches)
    - this.ServiceGoalsOwn(paramsResultMatches),
    efficiency: +(((this.ServiceTotalPoints(paramsResultMatches)
    / (paramsResultMatches.length * 3)) * 100).toFixed(2)),
  });

  public ServiceLeaderboardAll = async () => {
    const resultServiceLeaderboardAll: any = await LeaderboardRepository.RepositoryLeaderboardAll();
    // console.log(resultServiceLeaderboardAll);
    // console.log('cheguei aqui', resultServiceLeaderboardAll.resultMatches.teamHome.teamName);

    // const newMtche = resultServiceLeaderboardAll.map((tParams: any) =>( {
    //   test: tParams.teamName, test2: tParams.resultMatches }));
    // console.log('newMtche', newMtche);

    const resultTeamRanking = resultServiceLeaderboardAll
      .map((tParams: any) => this.ServiceScoreGames(tParams[0].teamHome.teamName, tParams));
    // console.log(tParams[0].id, '<<<<');
    console.log(resultTeamRanking);
    // const resulFinish = resultTeamRanking.map((result: any) => result.Promise);
    // console.log(resulFinish, '<<<<');
    return this.OrderClassification(resultTeamRanking);

    // return resultServiceLeaderboardAll;
  };
}

export default new LeaderboardService();
