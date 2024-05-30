import React from "react";

import userPredictions from "domain/data/games-fixture/users-prediction-list";

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
  const sortedPlayers = userPredictions.sort(
    (a, b) => b.totalPoints - a.totalPoints
  );

  return (
    <div className="overflow-x-auto bg-gray-800 text-white">
      <table className="min-w-full divide-y divide-white">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Participante
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Puntos Totales
            </th>
            {/* display if the game is already played */}
            {/* {userPredictions[0].predictions.map((prediction, index) =>
              prediction.gamePlayed ? (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {prediction.localTeam} vs {prediction.awayTeam}
                </th>
              ) : null
            )} */}
            {userPredictions[0].predictions.map((prediction, index) => (
              <th
                key={index}
                className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider"
              >
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center mb-2">
                    <img
                      src={countryLogos[prediction.localTeam]}
                      alt={prediction.localTeam}
                      className="w-6 h-6"
                    />
                    <span className="text-xs">{prediction.localTeam}</span>
                  </div>
                  <div className="text-xs">vs</div>
                  <div className="flex flex-col items-center mt-2">
                    <img
                      src={countryLogos[prediction.awayTeam]}
                      alt={prediction.awayTeam}
                      className="w-6 h-6"
                    />
                    <span className="text-xs">{prediction.awayTeam}</span>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white">
          {sortedPlayers.map((player, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-left whitespace-nowrap">
                {player.user}
              </td>
              <td className="px-6 py-4 text-left whitespace-nowrap">
                {player.totalPoints}
              </td>
              {/* display if the game is already played */}
              {/* {participante.predictions.map((prediction, idx) =>
                prediction.gamePlayed ? (
                  <td key={idx} className="px-6 py-4 whitespace-nowrap">
                    {prediction.scoreLocal} - {prediction.scoreAway}
                  </td>
                ) : null
              )} */}
              {player.predictions.map((player, index) => (
                <td
                  key={index}
                  className="px-6 py-4 text-center whitespace-nowrap"
                >
                  {player.scoreLocal} - {player.scoreAway}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmericasAndEuroTournamentTable;
