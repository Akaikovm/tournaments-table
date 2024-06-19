import React, { useCallback, useEffect, useState } from "react";
import userPredictions from "domain/data/games-fixture/users-prediction-list";
import resultList from "domain/data/games-fixture/results-list";

const countryLogos: any = {
  Argentina: process.env.PUBLIC_URL + "/soccer-logos/argentina.png",
  Bolivia: process.env.PUBLIC_URL + "/soccer-logos/bolivia.png",
  Brasil: process.env.PUBLIC_URL + "/soccer-logos/brasil.png",
  Canada: process.env.PUBLIC_URL + "/soccer-logos/canada.png",
  Chile: process.env.PUBLIC_URL + "/soccer-logos/chile.png",
  Colombia: process.env.PUBLIC_URL + "/soccer-logos/colombia.png",
  "Costa Rica": process.env.PUBLIC_URL + "/soccer-logos/costa-rica.png",
  Ecuador: process.env.PUBLIC_URL + "/soccer-logos/ecuador.png",
  Jamaica: process.env.PUBLIC_URL + "/soccer-logos/jamaica.png",
  Mexico: process.env.PUBLIC_URL + "/soccer-logos/mexico.png",
  Panama: process.env.PUBLIC_URL + "/soccer-logos/panama.png",
  Paraguay: process.env.PUBLIC_URL + "/soccer-logos/paraguay.png",
  Peru: process.env.PUBLIC_URL + "/soccer-logos/peru.png",
  Uruguay: process.env.PUBLIC_URL + "/soccer-logos/uruguay.png",
  "Estados Unidos": process.env.PUBLIC_URL + "/soccer-logos/usa.png",
  Venezuela: process.env.PUBLIC_URL + "/soccer-logos/venezuela.png",
  Alemania: process.env.PUBLIC_URL + "/soccer-logos/alemania.png",
  Escocia: process.env.PUBLIC_URL + "/soccer-logos/escocia.png",
  Hungria: process.env.PUBLIC_URL + "/soccer-logos/hungria.png",
  Suiza: process.env.PUBLIC_URL + "/soccer-logos/suiza.png",
  España: process.env.PUBLIC_URL + "/soccer-logos/espana.png",
  Croacia: process.env.PUBLIC_URL + "/soccer-logos/croacia.png",
  Italia: process.env.PUBLIC_URL + "/soccer-logos/italia.png",
  Albania: process.env.PUBLIC_URL + "/soccer-logos/albania.png",
  Eslovenia: process.env.PUBLIC_URL + "/soccer-logos/eslovenia.png",
  Dinamarca: process.env.PUBLIC_URL + "/soccer-logos/dinamarca.png",
  Serbia: process.env.PUBLIC_URL + "/soccer-logos/serbia.png",
  Inglaterra: process.env.PUBLIC_URL + "/soccer-logos/inglaterra.png",
  Polonia: process.env.PUBLIC_URL + "/soccer-logos/polonia.png",
  "Paises Bajos": process.env.PUBLIC_URL + "/soccer-logos/paises-bajos.png",
  Austria: process.env.PUBLIC_URL + "/soccer-logos/austria.png",
  Francia: process.env.PUBLIC_URL + "/soccer-logos/francia.png",
  Belgica: process.env.PUBLIC_URL + "/soccer-logos/belgica.png",
  Eslovaquia: process.env.PUBLIC_URL + "/soccer-logos/eslovakia.png",
  Rumania: process.env.PUBLIC_URL + "/soccer-logos/rumania.png",
  Ucrania: process.env.PUBLIC_URL + "/soccer-logos/ukrania.png",
  Turquia: process.env.PUBLIC_URL + "/soccer-logos/turquia.png",
  Georgia: process.env.PUBLIC_URL + "/soccer-logos/georgia.png",
  Portugal: process.env.PUBLIC_URL + "/soccer-logos/portugal.png",
  "Republica Checa":
    process.env.PUBLIC_URL + "/soccer-logos/republica-checa.png",
};

const AmericasAndEuroTournamentTable = () => {
  const [hoverIndex, setHoverIndex] = useState<any>(null);
  const [showAllPoints, setShowAllPoints] = useState(false);
  const [filteredResults, setFilteredResults] = useState<any>([]);
  const [filterDate, setFilterDate] = useState<boolean>(false);

  const getPoints = useCallback((match: any, result: any) => {
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
  }, []);

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

    const newObj = {
      ...userPrediction,
      totalPoints: totalPoints,
      predictions: updatedMatchList,
    };

    return newObj;
  });

  const sortedPlayers = updatedUserScoreList.sort(
    (a, b) => b.totalPoints - a.totalPoints
  );

  const getColorBG = (points: number) => {
    switch (points) {
      case 6:
        return "bg-green-500";
      case 4:
        return "bg-blue-700";
      case 3:
        return "bg-stone-300";
      case 2:
        return "bg-yellow-300";
      case 1:
        return "bg-orange-500";
      case 0:
        return "bg-red-700";
      default:
        return "";
    }
  };

  const getColorClass = (index: number, user: string) => {
    if (user !== "Resultados") {
      if (index === 1) return "gold text-yellow-600";
      if (index === 2) return "silver text-gray-400";
      if (index === 3) return "bronze text-orange-500";
    }
    return "";
  };

  const getOnlyDate = (date: Date) => {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    ).getTime();
  };

  useEffect(() => {
    let filteredResults = resultList;
    if (filterDate) {
      const today = new Date();
      filteredResults = resultList.filter((match) => {
        const matchDate = new Date(match.date);
        return getOnlyDate(matchDate) === getOnlyDate(today);
      });
    }

    setFilteredResults(filteredResults);
  }, [filterDate]);

  return (
    <div className="overflow-x-auto bg-gray-800 text-white p-4">
      <div className="flex justify-center">
        <div className="flex justify-center mb-4 m-auto">
          <label htmlFor="showAllPoints" className="flex items-center">
            <input
              type="checkbox"
              id="showAllPoints"
              checked={showAllPoints}
              onChange={() => setShowAllPoints(!showAllPoints)}
              className="mr-2"
            />
            Ver Puntos por juego
          </label>
        </div>
        <div className="flex justify-center mb-4 m-auto">
          <label htmlFor="filterDate" className="flex items-center">
            <input
              type="checkbox"
              id="filterDate"
              checked={filterDate}
              onChange={() => setFilterDate(!filterDate)}
              className="mr-2"
            />
            Juegos de hoy
          </label>
        </div>
      </div>
      <table className="min-w-full divide-y divide-white text-sm">
        <thead className="sticky top-0 bg-gray-800">
          <tr>
            <th className="px-4 py-3 font-medium uppercase tracking-wider"></th>
            {sortedPlayers.map((player, index) => (
              <th
                key={`player-${index}`}
                className={`px-4 py-3 text-center font-medium uppercase tracking-wider ${getColorClass(
                  index,
                  player.user
                )}`}
              >
                {player.user}
              </th>
            ))}
          </tr>
          <tr>
            <th className="px-4 py-3 font-medium uppercase tracking-wider">
              Partidos
            </th>
            {sortedPlayers.map((player, index) => (
              <th
                key={`points-${index}`}
                className={`px-4 py-3 text-center font-medium uppercase tracking-wider ${getColorClass(
                  index,
                  player.user
                )}`}
              >
                {player.totalPoints} pts
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white">
          {/* Aqui debe ir la condicion para mostrar solo los juegos jugados */}
          {filteredResults.map((prediction: any, index: number) => (
            <tr key={index}>
              <td className="px-4 py-3 text-left whitespace-nowrap">
                <div className="flex items-center justify-center">
                  <div className="flex items-center mr-2">
                    <img
                      src={countryLogos[prediction.localTeam]}
                      alt={prediction.localTeam}
                      className="w-6 h-6"
                    />
                    <span className="ml-1">{prediction.localTeam}</span>
                  </div>
                  <span className="mx-2">vs</span>
                  <div className="flex items-center ml-2">
                    <img
                      src={countryLogos[prediction.awayTeam]}
                      alt={prediction.awayTeam}
                      className="w-6 h-6"
                    />
                    <span className="ml-1">{prediction.awayTeam}</span>
                  </div>
                </div>
              </td>
              {sortedPlayers.map((player, playerIndex) => {
                const playerMatch = player.predictions.find(
                  (pred) => pred.id === prediction.id
                );
                return (
                  <td
                    key={playerIndex}
                    className="px-4 py-3 text-center whitespace-nowrap"
                    onMouseEnter={() =>
                      setHoverIndex({
                        userIndex: playerIndex,
                        matchIndex: index,
                      })
                    }
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    {playerMatch ? (
                      showAllPoints ||
                      (hoverIndex &&
                        hoverIndex.userIndex === playerIndex &&
                        hoverIndex.matchIndex === index) ? (
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium leading-4 cursor-pointer ${getColorBG(
                            playerMatch.points
                          )}`}
                        >
                          {playerMatch.points} PTS
                        </span>
                      ) : (
                        <span>
                          {playerMatch.scoreLocal} - {playerMatch.scoreAway}
                        </span>
                      )
                    ) : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmericasAndEuroTournamentTable;
