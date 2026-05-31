import userPredictions from "domain/data/games-fixture/users-prediction-list";
import resultList from "domain/data/games-fixture/results-list";

const getPoints = (match: any, result: any) => {
  let points = 0;
  const winnerMatch =
    result.scoreLocal > result.scoreAway
      ? "local"
      : result.scoreLocal < result.scoreAway
      ? "away"
      : "tie";

  const winnerPrediction =
    match.scoreLocal > match.scoreAway
      ? "local"
      : match.scoreLocal < match.scoreAway
      ? "away"
      : "tie";

  if (winnerMatch === winnerPrediction) points += 3;
  if (match.scoreLocal === result.scoreLocal) points += 1;
  if (match.scoreAway === result.scoreAway) points += 1;

  const differenceMatch = Math.abs(result.scoreLocal - result.scoreAway);
  const differencePrediction = Math.abs(match.scoreLocal - match.scoreAway);

  if (differenceMatch === differencePrediction) points += 1;

  return points;
};

export interface QuinielaPlayer {
  user: string;
  totalPoints: number;
  predictions: any[];
}

export const computeQuinielaLeaderboard = (): QuinielaPlayer[] => {
  const updatedUserScoreList = userPredictions.map((userPrediction) => {
    let totalPoints = 0;

    const updatedMatchList = userPrediction.predictions.map((match) => {
      const result = resultList.find(
        (res) => res.id === match.id && res.gamePlayed
      );

      if (result) {
        const points = getPoints(match, result);
        totalPoints = totalPoints + points;

        return {
          ...match,
          points: points,
          gamePlayed: true,
        };
      }
      return match;
    });

    return {
      ...userPrediction,
      totalPoints,
      predictions: updatedMatchList,
    };
  });

  return updatedUserScoreList.sort(
    (a, b) => b.totalPoints - a.totalPoints
  ) as QuinielaPlayer[];
};

export const getQuinielaChampion = (): string | undefined =>
  computeQuinielaLeaderboard()[0]?.user;
