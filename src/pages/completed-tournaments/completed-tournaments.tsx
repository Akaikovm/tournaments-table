import React from "react";
import { TitleBar } from "components/ui/titleBar";
import { Container } from "components/ui/container";
import { useNavigate } from "react-router-dom";
import { getQuinielaChampion } from "domain/utils/quiniela-leaderboard";

interface TournamentItem {
  title: string;
  description: string;
  emoji: string;
  to: string;
  accent: string;
  champion?: string;
  year: string;
}

const CompletedTournaments = () => {
  const navigate = useNavigate();

  const items: TournamentItem[] = [
    {
      title: "Formula 1 2024",
      description:
        "Temporada finalizada: pilotos, calendario y campeonato completos.",
      emoji: "🏎️",
      to: "/formula-1-2024",
      accent: "from-amber-500/30 via-orange-500/20 to-rose-500/15",
      champion: "Sebastian Villamizar",
      year: "2024",
    },
    {
      title: "Formula 1 2023",
      description:
        "Temporada completa: reglas, pilotos, calendario y resultados finales.",
      emoji: "🏁",
      to: "/formula-1-2023",
      accent: "from-orange-500/30 via-rose-500/20 to-amber-400/15",
      champion: "Sebastian Villamizar",
      year: "2023",
    },
    {
      title: "Quiniela Copa America / Eurocopa 2024",
      description:
        "Pool de predicciones de futbol — resultados y tabla final por jugador.",
      emoji: "⚽",
      to: "/americas-and-euro-cup-2024",
      accent: "from-emerald-500/25 via-amber-400/20 to-amber-300/10",
      champion: getQuinielaChampion(),
      year: "2024",
    },
  ];

  return (
    <>
      <TitleBar
        title="Torneos Completados"
        subtitle="Archivo historico de torneos finalizados y sus campeones."
      />
      <Container size="large">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 animate-fade-in-up">
          {items.map((item) => (
            <button
              key={item.to}
              type="button"
              onClick={() => navigate(item.to)}
              className="group relative overflow-hidden rounded-3xl glass gradient-border p-6 sm:p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${item.accent} blur-3xl opacity-80 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-white/70">
                    Finalizado · {item.year}
                  </span>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 group-hover:bg-white/10 group-hover:text-white transition-all">
                  →
                </span>
              </div>
              <h3 className="relative mt-5 font-display text-xl sm:text-2xl font-bold text-white">
                {item.title}
              </h3>
              <p className="relative mt-2 text-sm text-white/65 leading-relaxed">
                {item.description}
              </p>
              {item.champion ? (
                <div className="relative mt-4 flex">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold">
                    <span>★</span>
                    <span>Campeon: {item.champion}</span>
                  </span>
                </div>
              ) : null}
              <div className="relative mt-5 flex">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200">
                  Ver Torneo
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CompletedTournaments;
