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
    <div className="text-white">
      {/* Participant name */}
      <div className="rounded-3xl glass gradient-border p-5 sm:p-6 mb-5">
        <label
          htmlFor="participant"
          className="block text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold mb-2"
        >
          Nombre del participante
        </label>
        <input
          id="participant"
          type="text"
          placeholder="Tu nombre..."
          className="w-full sm:w-80 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-400/70 focus:ring-2 focus:ring-brand-400/30 hover:border-white/20 transition-all"
          onChange={(e) => setParticipantName(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map((match, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl glass gradient-border p-5"
          >
            <div className="text-center text-[11px] uppercase tracking-wider text-white/55">
              {formatDate(match?.date)}
            </div>
            <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={countryLogos[match?.localTeam]}
                    className="max-h-9 max-w-9 object-contain"
                    alt={`${match?.localTeam} logo`}
                  />
                </div>
                <span className="text-xs font-semibold text-white truncate max-w-full">
                  {match?.localTeam}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  value={scores[index].local}
                  onChange={(e) => {
                    const updatedScores = [...scores];
                    updatedScores[index].local = parseInt(e.target.value) || 0;
                    setScores(updatedScores);
                  }}
                  className="w-12 h-12 text-center text-base font-display font-bold rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-400/70 focus:ring-2 focus:ring-brand-400/30"
                />
                <span className="text-white/40 text-lg">−</span>
                <input
                  type="number"
                  value={scores[index].away}
                  onChange={(e) => {
                    const updatedScores = [...scores];
                    updatedScores[index].away = parseInt(e.target.value) || 0;
                    setScores(updatedScores);
                  }}
                  className="w-12 h-12 text-center text-base font-display font-bold rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-400/70 focus:ring-2 focus:ring-brand-400/30"
                />
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={countryLogos[match?.awayTeam]}
                    className="max-h-9 max-w-9 object-contain"
                    alt={`${match?.awayTeam} logo`}
                  />
                </div>
                <span className="text-xs font-semibold text-white truncate max-w-full">
                  {match?.awayTeam}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {valuesSaved && (
        <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200 text-center">
          Resultados guardados — copia y envia al admin.
        </div>
      )}

      {copySuccess && (
        <div className="mt-3 text-sm text-white/65 text-center">
          {copySuccess}
        </div>
      )}

      <div className="sticky bottom-4 mt-8">
        <div className="mx-auto max-w-md rounded-2xl glass-strong gradient-border p-3 flex items-center gap-3">
          <Button
            variant="secondary"
            fullWidth
            disabled={!participantName.length}
            onClick={handleSaveResults}
          >
            Guardar
          </Button>
          <Button
            variant="primary"
            fullWidth
            disabled={!valuesSaved}
            onClick={() => {
              copyToClipboard();
              setValuesSaved(false);
              alert(
                "Resultados copiados en portapapeles, enviar al admin."
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
