import React, { useContext } from "react";
import { AppContext } from "components/context/provider";
import { TitleBar } from "components/ui/titleBar";
import { Container } from "components/ui/container";

const TournamentDetails = () => {
  const [tournamentDetails] = useContext(AppContext);
  const rows = tournamentDetails?.selectedRows ?? [];

  return (
    <>
      <TitleBar
        title="Detalles de Torneo"
        subtitle="Informacion completa del torneo seleccionado."
      />
      <Container size="large">
        {rows.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-fade-in-up">
            {rows.map((tournament: any) => (
              <article
                key={tournament.id}
                className="relative overflow-hidden rounded-3xl glass gradient-border p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-xl font-bold text-white">
                    {tournament.game}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-brand-500/15 border border-brand-400/30 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-brand-200 font-bold">
                    Tier {tournament.tier}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { k: "Fecha", v: tournament.date },
                    { k: "Plataforma", v: tournament.platform },
                    { k: "Campeon", v: tournament.champion },
                    { k: "Subcampeon", v: tournament.runnerUp },
                    {
                      k: "Equipo Campeon",
                      v: tournament.championTeam,
                    },
                    {
                      k: "Equipo Subcampeon",
                      v: tournament.runnerUpTeam,
                    },
                    { k: "Jugadores", v: tournament.players },
                    { k: "Season", v: tournament.season },
                  ]
                    .filter((x) => x.v !== undefined && x.v !== "")
                    .map((field) => (
                      <div
                        key={field.k}
                        className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-3"
                      >
                        <div className="text-[10px] uppercase tracking-wider text-white/40">
                          {field.k}
                        </div>
                        <div className="mt-0.5 text-sm text-white/90 font-semibold truncate">
                          {field.v ?? "—"}
                        </div>
                      </div>
                    ))}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-10 text-center animate-fade-in-up">
            <div className="text-base text-white/70">
              No hay detalles de torneo
            </div>
            <div className="text-sm text-white/40 mt-1">
              Selecciona un torneo desde la tabla para ver mas informacion.
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default TournamentDetails;
