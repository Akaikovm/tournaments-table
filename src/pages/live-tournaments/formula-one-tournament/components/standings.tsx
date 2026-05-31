import React from "react";
import {
  constructorChampionship,
  driversChampionship,
} from "domain/data/race-results/results2024";

const podiumColor = (i: number) => {
  if (i === 0)
    return "bg-gold/15 text-gold border border-gold/40";
  if (i === 1)
    return "bg-silver/15 text-silver border border-silver/40";
  if (i === 2)
    return "bg-bronze/15 text-bronze border border-bronze/40";
  return "bg-white/[0.04] text-white/70 border border-white/[0.08]";
};

const Section = ({
  title,
  subtitle,
  children,
  empty,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  empty?: boolean;
}) => (
  <section className="rounded-3xl glass gradient-border overflow-hidden">
    <div className="flex items-center justify-between px-5 sm:px-6 pt-5">
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
          {subtitle}
        </div>
        <h3 className="font-display text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
    <div className={`px-2 sm:px-3 ${empty ? "py-10" : "py-3"}`}>
      {children}
    </div>
  </section>
);

const Standings = () => {
  return (
    <div className="text-white space-y-5">
      <Section
        title="F1 2024 Driver Standings"
        subtitle="Drivers Championship"
        empty={!driversChampionship.length}
      >
        {driversChampionship.length ? (
          <>
            {/* Header */}
            <div className="hidden sm:grid grid-cols-12 gap-3 px-3 py-2 text-[10px] uppercase tracking-wider text-white/45">
              <span className="col-span-1 text-center">Pos</span>
              <span className="col-span-5">Piloto</span>
              <span className="col-span-4">Equipo</span>
              <span className="col-span-2 text-right">Puntos</span>
            </div>
            <div className="space-y-1">
              {driversChampionship.map((result: any, index: number) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-3 px-3 py-2.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] transition-colors"
                >
                  <span className="col-span-2 sm:col-span-1 flex items-center justify-center">
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold ${podiumColor(
                        index
                      )}`}
                    >
                      {index + 1}
                    </span>
                  </span>
                  <span className="col-span-7 sm:col-span-5 flex items-center font-semibold text-white truncate">
                    {result.driver}
                  </span>
                  <span className="col-span-3 sm:col-span-4 flex items-center text-sm text-white/70 truncate">
                    {result.team}
                  </span>
                  <span className="col-span-12 sm:col-span-2 flex items-center justify-end gap-1.5">
                    <span className="text-base font-display font-bold gradient-text">
                      {result.points}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/40">
                      PTS
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center text-white/50">
            No hay resultados de carrera
          </div>
        )}
      </Section>

      <Section
        title="F1 2024 Constructor Standings"
        subtitle="Constructors Championship"
        empty={!constructorChampionship.length}
      >
        {constructorChampionship.length ? (
          <>
            <div className="hidden sm:grid grid-cols-12 gap-3 px-3 py-2 text-[10px] uppercase tracking-wider text-white/45">
              <span className="col-span-1 text-center">Pos</span>
              <span className="col-span-9">Equipo</span>
              <span className="col-span-2 text-right">Puntos</span>
            </div>
            <div className="space-y-1">
              {constructorChampionship.map((result: any, index: number) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-3 px-3 py-2.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] transition-colors"
                >
                  <span className="col-span-2 sm:col-span-1 flex items-center justify-center">
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold ${podiumColor(
                        index
                      )}`}
                    >
                      {index + 1}
                    </span>
                  </span>
                  <span className="col-span-7 sm:col-span-9 flex items-center font-semibold text-white truncate">
                    {result.team}
                  </span>
                  <span className="col-span-3 sm:col-span-2 flex items-center justify-end gap-1.5">
                    <span className="text-base font-display font-bold gradient-text">
                      {result.points}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/40">
                      PTS
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center text-white/50">
            No hay resultados de carrera
          </div>
        )}
      </Section>
    </div>
  );
};

export default Standings;
