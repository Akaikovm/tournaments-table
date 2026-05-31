import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import { useGetTournaments } from "hooks/use-tournaments";
import { setParticipantResults } from "utils/score-utils";

const Slider = () => {
  const { data: tournaments } = useGetTournaments();

  const top3 = useMemo(() => {
    const r = setParticipantResults(tournaments);
    return [...r].sort((a, b) => b.points - a.points).slice(0, 3);
  }, [tournaments]);

  const totalTitles = (player: any) =>
    (player?.tierIrl || 0) +
    (player?.tierA || 0) +
    (player?.tierB || 0) +
    (player?.tierC || 0);
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-24 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-white/80">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400">
                <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-75" />
              </span>
              Temporada 2024 finalizada
            </div>

            <h1 className="mt-5 font-display font-bold leading-[0.95] tracking-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white/95">
                ¿Quien sera el
              </span>
              <span className="mt-1 block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                <Typed
                  className="gradient-text"
                  strings={["Mejor.", "Ganador.", "Vencedor.", "Campeon."]}
                  typeSpeed={90}
                  backSpeed={120}
                  backDelay={1400}
                  loop
                />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/65 leading-relaxed">
              Bienvenido a la <span className="text-white">PGG's Tournament Series</span>:
              torneos, predicciones y estadisticas en un solo lugar — diseñado
              para los que juegan a ganar.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/tournaments-table"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-brand-gradient bg-[length:200%_200%] shadow-[0_12px_36px_rgba(245,158,11,0.40)] hover:bg-[position:100%_50%] hover:shadow-[0_18px_48px_rgba(245,158,11,0.55)] transition-all duration-300"
              >
                Ver Torneos
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/completed-tournaments"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm sm:text-base font-semibold text-white/90 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <span className="text-amber-300">★</span>
                Torneos Finalizados
              </Link>
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
              {[
                { k: "Torneos", v: "50+" },
                { k: "Jugadores", v: "10+" },
                { k: "Series", v: "F1, Quiniela" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl glass px-4 py-3"
                >
                  <div className="text-xl sm:text-2xl font-display font-bold gradient-text">
                    {s.v}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-white/50">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5 relative animate-fade-in-up">
            <div className="relative mx-auto aspect-square max-w-[420px]">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-amber-500/30 via-orange-500/20 to-rose-500/20 blur-3xl" />
              <div className="relative h-full w-full rounded-[2.5rem] glass-strong gradient-border overflow-hidden p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Estadisticas — Top 3
                  </span>
                </div>

                <div className="space-y-3">
                  {top3.length > 0 ? (
                    top3.map((player, i) => {
                      const titles = totalTitles(player);
                      const firstName = player.name.split(" ")[0];
                      return (
                        <div
                          key={player.name}
                          className="flex items-center justify-between rounded-2xl bg-white/[0.04] border border-white/[0.06] px-3 py-2.5"
                          style={{ animationDelay: `${i * 80}ms` }}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span
                              className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-bold shrink-0 ${
                                i === 0
                                  ? "bg-gold/20 text-gold border border-gold/40"
                                  : i === 1
                                  ? "bg-silver/20 text-silver border border-silver/40"
                                  : "bg-bronze/20 text-bronze border border-bronze/40"
                              }`}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="min-w-0">
                              <div className="text-sm text-white font-semibold truncate">
                                {firstName}
                              </div>
                              <div className="text-[10px] uppercase tracking-wider text-white/40">
                                {titles} {titles === 1 ? "titulo" : "titulos"}
                              </div>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="text-base font-display font-bold gradient-text">
                              {player.points}
                            </div>
                            <div className="text-[10px] uppercase tracking-wider text-white/40">
                              PTS
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <>
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-2xl bg-white/[0.03] border border-white/[0.06] px-3 py-2.5 animate-pulse"
                        >
                          <div className="flex items-center gap-3">
                            <span className="h-8 w-8 rounded-xl bg-white/[0.06]" />
                            <div className="space-y-1.5">
                              <div className="h-3 w-20 rounded bg-white/[0.06]" />
                              <div className="h-2.5 w-12 rounded bg-white/[0.04]" />
                            </div>
                          </div>
                          <div className="space-y-1.5 text-right">
                            <div className="h-3.5 w-10 rounded bg-white/[0.06] ml-auto" />
                            <div className="h-2.5 w-6 rounded bg-white/[0.04] ml-auto" />
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>

                <Link
                  to="/standings"
                  className="flex items-center justify-between rounded-2xl bg-amber-500/10 border border-amber-400/20 px-3 py-2.5 hover:bg-amber-500/15 transition-colors"
                >
                  <span className="text-xs text-white/70">
                    Ver tabla completa
                  </span>
                  <span className="text-xs font-semibold text-amber-200 inline-flex items-center gap-1">
                    Estadisticas
                    <span>→</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
