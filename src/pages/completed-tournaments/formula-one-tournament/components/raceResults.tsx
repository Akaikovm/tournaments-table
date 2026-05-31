import React from "react";

export interface RaceResultsProps {
  results: any[];
}

const podiumColor = (i: number) => {
  if (i === 0) return "bg-gold/15 text-gold border border-gold/40";
  if (i === 1) return "bg-silver/15 text-silver border border-silver/40";
  if (i === 2) return "bg-bronze/15 text-bronze border border-bronze/40";
  return "bg-white/[0.04] text-white/70 border border-white/[0.08]";
};

function RaceResults(props: RaceResultsProps) {
  const { results } = props;

  if (!results.length) {
    return (
      <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] py-10 text-center text-white/55 text-sm">
        No hay Resultados
      </div>
    );
  }

  return (
    <div className="rounded-3xl glass gradient-border overflow-hidden">
      <div className="hidden sm:grid grid-cols-12 gap-3 px-4 py-2.5 text-[10px] uppercase tracking-wider text-white/45 border-b border-white/5">
        <span className="col-span-1 text-center">Pos</span>
        <span className="col-span-5">Piloto</span>
        <span className="col-span-4">Equipo</span>
        <span className="col-span-2 text-right">Puntos</span>
      </div>
      <div className="px-2 py-2 space-y-1">
        {results.map((result, index) => (
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
    </div>
  );
}

export default RaceResults;
