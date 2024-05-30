import React, { useEffect, useState } from "react";
import { gamesFixture } from "domain/data/games-fixture/constant";
import { Button } from "components/ui/button";

const Pool = () => {
  const [matches, setMatches] = useState(gamesFixture);
  const [jsonVal, setJsonVal] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [copySuccess, setCopySuccess] = useState("");
  const [valuesSaved, setValuesSaved] = useState(false);
  const [scores, setScores] = useState(
    gamesFixture.map(() => ({ local: 0, away: 0 }))
  );

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

  const handleSaveResults = () => {
    const updatedMatchList = matches.map((game, index) => ({
      ...game,
      scoreLocal: scores[index].local,
      scoreAway: scores[index].away,
    }));

    setValuesSaved(true);
    setMatches(updatedMatchList);
  };

  const getResultList = () => {
    let updatedMatches = matches.map((match) => {
      let { date, ...rest } = match;
      return { ...rest, points: 0, gamePlayed: false };
    });

    const userPrediction = {
      user: participantName,
      totalPoints: 0,
      predictions: updatedMatches.sort((a, b) => a.id - b.id),
    };

    setJsonVal(JSON.stringify(userPrediction));
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(jsonVal);
      setCopySuccess("¡Texto copiado con éxito!");
    } catch (err) {
      setCopySuccess("Falló la copia al portapapeles.");
    }
  };

  const formatDate = (dateString: any) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", options as any);
  };

  useEffect(() => {
    getResultList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matches]);

  return (
    <div className="container mx-auto px-4">
      <div className="text-white mt-2">
        <h4 className="text-sm">Nombre Participante</h4>
        <input
          type="text"
          className="w-60 p-3 text-left bg-gray-700 rounded-lg mt-2"
          onChange={(e) => setParticipantName(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-lg shadow-lg text-white"
          >
            <div className="text-center mb-2">{formatDate(match?.date)}</div>
            <div className="flex h-[90px] items-center justify-between">
              <div className="flex flex-col items-center text-white">
                <img
                  src={countryLogos[match?.localTeam]}
                  className="w-12 h-12 mb-2"
                  alt={`${match?.localTeam} logo`}
                />
                <span>{match?.localTeam}</span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={scores[index].local}
                  onChange={(e) => {
                    const updatedScores = [...scores];
                    updatedScores[index].local = parseInt(e.target.value);
                    setScores(updatedScores);
                  }}
                  className="w-12 p-3 text-center bg-gray-700 rounded-lg"
                />
                <span className="text-lg">-</span>
                <input
                  type="number"
                  value={scores[index].away}
                  onChange={(e) => {
                    const updatedScores = [...scores];
                    updatedScores[index].away = parseInt(e.target.value);
                    setScores(updatedScores);
                  }}
                  className="w-12 p-3 text-center bg-gray-700 rounded-lg"
                />
              </div>
              <div className="flex flex-col items-center text-white">
                <img
                  src={countryLogos[match?.awayTeam]}
                  className="w-12 h-12 mb-2"
                  alt={`${match?.awayTeam} logo`}
                />
                <span>{match?.awayTeam}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {copySuccess && (
        <div className="text-white mt-4 text-center">
          <span>Envia informacion al admin</span>
        </div>
      )}

      {valuesSaved && (
        <div className="text-white mt-4 text-center">
          <span>Resultados Guardados, por favor copiar en portapapeles</span>
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <div className="flex items-center">
          <Button
            className={`mr-4 ${
              !participantName.length
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-red-700"
            }`}
            variant="primary"
            onClick={() => {
              handleSaveResults();
            }}
            disabled={!participantName.length}
          >
            Guardar
          </Button>
          <Button
            className={`${
              !valuesSaved
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-red-700"
            }`}
            variant="primary"
            disabled={!valuesSaved}
            onClick={() => {
              copyToClipboard();
              setValuesSaved(false);
              alert(
                "Resultados copiados en portapapeles, enviar informacion al admin"
              );
            }}
          >
            Copiar Resultados
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pool;
