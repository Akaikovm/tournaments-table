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

    return {
      ...userPrediction,
      totalPoints: totalPoints,
      predictions: updatedMatchList,
    };
  });

  const sortedPlayers = updatedUserScoreList.sort(
    (a, b) => b.totalPoints - a.totalPoints
  );

  const getPointsBadge = (points: number) => {
    switch (points) {
      case 6:
        return "bg-emerald-500/25 border border-emerald-400/40 text-emerald-200";
      case 4:
        return "bg-teal-500/20 border border-teal-400/40 text-teal-200";
      case 3:
        return "bg-amber-500/20 border border-amber-400/40 text-amber-200";
      case 2:
        return "bg-orange-500/25 border border-orange-400/40 text-orange-200";
      case 1:
        return "bg-rose-400/20 border border-rose-300/40 text-rose-100";
      case 0:
        return "bg-rose-600/25 border border-rose-500/40 text-rose-200";
      default:
        return "bg-white/[0.05] border border-white/[0.08] text-white/70";
    }
  };

  const getRankColor = (index: number, user: string) => {
    if (user !== "Resultados") {
      if (index === 1) return "text-gold";
      if (index === 2) return "text-silver";
      if (index === 3) return "text-bronze";
    }
    return "text-white";
  };

  const getOnlyDate = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

  useEffect(() => {
    let filtered = resultList;
    if (filterDate) {
      const today = new Date();
      filtered = resultList.filter((match) => {
        const matchDate = new Date(match.date);
        return getOnlyDate(matchDate) === getOnlyDate(today);
      });
    }
    setFilteredResults(filtered);
  }, [filterDate]);

  return (
    <div className="text-white">
      {/* Filter bar */}
      <div className="mb-4 flex flex-col sm:flex-row gap-3">
        <label className="inline-flex items-center gap-2 rounded-2xl glass px-4 py-2.5 cursor-pointer hover:bg-white/[0.06] transition-colors text-sm">
          <input
            type="checkbox"
            checked={showAllPoints}
            onChange={() => setShowAllPoints(!showAllPoints)}
            className="h-4 w-4 rounded border-white/30 bg-white/5 text-brand-500 focus:ring-brand-400/40"
          />
          Ver puntos por juego
        </label>
        <label className="inline-flex items-center gap-2 rounded-2xl glass px-4 py-2.5 cursor-pointer hover:bg-white/[0.06] transition-colors text-sm">
          <input
            type="checkbox"
            checked={filterDate}
            onChange={() => setFilterDate(!filterDate)}
            className="h-4 w-4 rounded border-white/30 bg-white/5 text-brand-500 focus:ring-brand-400/40"
          />
          Solo juegos de hoy
        </label>
      </div>

      {/* Legend */}
      <div className="mb-4 flex flex-wrap gap-2 text-[11px]">
        {[
          { v: 6, l: "Exacto" },
          { v: 4, l: "Diferencia" },
          { v: 3, l: "Resultado" },
          { v: 2, l: "Parcial" },
          { v: 1, l: "Casi" },
          { v: 0, l: "Fallo" },
        ].map((x) => (
          <span
            key={x.v}
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-semibold ${getPointsBadge(
              x.v
            )}`}
          >
            <span className="font-bold">{x.v}</span>
            <span className="opacity-80">{x.l}</span>
          </span>
        ))}
      </div>

      {/* Results matrix */}
      <div className="rounded-3xl glass gradient-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="sticky top-0 backdrop-blur-md bg-ink-900/70">
              <tr>
                <th className="px-3 py-3 text-left text-[10px] uppercase tracking-wider text-white/50 font-semibold border-b border-white/10 w-64">
                  Partido
                </th>
                {sortedPlayers.map((player, index) => (
                  <th
                    key={`player-${index}`}
                    className={`px-3 py-3 text-center text-[11px] uppercase tracking-wider font-bold border-b border-white/10 ${getRankColor(
                      index + 1,
                      player.user
                    )}`}
                  >
                    <div className="flex flex-col items-center gap-0.5">
                      <span>{player.user}</span>
                      <span className="text-[10px] font-display font-bold gradient-text">
                        {player.totalPoints} PTS
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredResults.map((prediction: any, index: number) => (
                <tr
                  key={index}
                  className="border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors"
                >
                  <td className="px-3 py-3 whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-1.5">
                        <img
                          src={countryLogos[prediction.localTeam]}
                          alt={prediction.localTeam}
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-md ring-1 ring-white/10 object-cover"
                        />
                        <span className="text-xs sm:text-sm text-white/85 font-medium">
                          {prediction.localTeam}
                        </span>
                      </div>
                      <span className="text-white/30 text-xs">vs</span>
                      <div className="flex items-center gap-1.5">
                        <img
                          src={countryLogos[prediction.awayTeam]}
                          alt={prediction.awayTeam}
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-md ring-1 ring-white/10 object-cover"
                        />
                        <span className="text-xs sm:text-sm text-white/85 font-medium">
                          {prediction.awayTeam}
                        </span>
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
                        className="px-3 py-3 text-center whitespace-nowrap cursor-pointer"
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
                              className={`inline-flex items-center justify-center min-w-[3rem] rounded-full px-2 py-0.5 text-[11px] font-bold transition-colors ${getPointsBadge(
                                playerMatch.points
                              )}`}
                            >
                              {playerMatch.points} PTS
                            </span>
                          ) : (
                            <span className="text-white/85 font-display font-semibold">
                              {playerMatch.scoreLocal} - {playerMatch.scoreAway}
                            </span>
                          )
                        ) : (
                          <span className="text-white/20">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-3 text-[11px] text-white/40 text-center">
        Pasa el cursor / toca una celda para ver los puntos otorgados.
      </p>
    </div>
  );
};

export default AmericasAndEuroTournamentTable;
