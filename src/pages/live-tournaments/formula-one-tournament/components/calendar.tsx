import React, { useState } from "react";
import { tracks2024 } from "domain/data/tracks/constant";
import ReactCardFlip from "react-card-flip";

interface FlippedCards {
  [key: string]: boolean;
}

const Calendar = () => {
  const [flippedCards, setFlippedCards] = useState<FlippedCards>({});

  const handleCardClick = (track: any) => {
    setFlippedCards({
      ...flippedCards,
      [track.id]: !flippedCards[track.id],
    });
  };

  return (
    <div className="text-white">
      <div className="flex items-end justify-between mb-5">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
            Schedule
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            <span className="gradient-text">F1 Schedule 2024</span>
          </h2>
        </div>
        <div className="hidden sm:block text-xs text-white/50">
          {tracks2024.length} carreras · click para ver resultados
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {tracks2024.map((track) => (
          <ReactCardFlip
            key={track.id}
            isFlipped={flippedCards[track.id] || false}
            flipDirection="horizontal"
          >
            {/* Front */}
            <button
              type="button"
              onClick={() => handleCardClick(track)}
              className="group relative w-full overflow-hidden rounded-3xl glass gradient-border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-amber-200">
                      Ronda {track.id}
                    </span>
                    {track.trackResults.length ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Completada
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.05] border border-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/55">
                        Pendiente
                      </span>
                    )}
                  </div>
                  <p className="mt-2 inline-flex items-baseline gap-1.5 rounded-xl bg-white/[0.05] border border-white/[0.08] px-3 py-1.5">
                    <span className="font-display text-2xl font-bold text-white leading-none">
                      {track.trackDate}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold">
                      {track.trackMonth}
                    </span>
                  </p>
                </div>
                <img
                  src={track.countryFlag}
                  alt={`${track.trackCountry} flag`}
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl ring-1 ring-white/15 object-cover shadow-soft shrink-0"
                />
              </div>

              <hr className="my-4 border-white/10" />

              <p className="text-base font-display font-bold text-white">
                {track.trackCountry}
              </p>
              <p className="text-xs text-white/55 leading-relaxed line-clamp-2">
                {track.trackName}
              </p>

              <div className="mt-4 h-28 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] flex items-center justify-center overflow-hidden">
                <img
                  src={process.env.PUBLIC_URL + track.trackImage}
                  alt="trackImage"
                  className="max-h-full max-w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </button>

            {/* Back */}
            <button
              type="button"
              onClick={() => handleCardClick(track)}
              className="group relative w-full overflow-hidden rounded-3xl glass gradient-border p-5 text-left transition-all duration-300"
            >
              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-amber-200">
                    Resultados Ronda {track.id}
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-white">
                    {track.trackCountry}
                  </p>
                </div>
                <img
                  src={track.countryFlag}
                  alt={`${track.trackCountry} flag`}
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl ring-1 ring-white/15 object-cover shrink-0"
                />
              </div>

              <hr className="my-3 border-white/10" />

              {track.trackResults.length ? (
                <div className="h-72 overflow-y-auto pr-1">
                  <div className="grid grid-cols-12 gap-2 text-[10px] uppercase tracking-wider text-white/45 px-1 pb-1.5">
                    <span className="col-span-2 text-center">Pos</span>
                    <span className="col-span-5">Piloto</span>
                    <span className="col-span-3">Equipo</span>
                    <span className="col-span-2 text-right">Pts</span>
                  </div>
                  <div className="space-y-1">
                    {track.trackResults.map((result: any, index: number) => (
                      <div
                        key={result.position}
                        className={`grid grid-cols-12 gap-2 rounded-lg px-1.5 py-1.5 text-xs items-center ${
                          result.fastestLap
                            ? "bg-fuchsia-500/10 text-fuchsia-200 border border-fuchsia-400/20"
                            : index < 3
                            ? "bg-white/[0.03] text-white/85"
                            : "text-white/75"
                        }`}
                      >
                        <span className="col-span-2 text-center font-bold">
                          {result.position}
                        </span>
                        <span className="col-span-5 truncate">
                          {result.driverFirstName} {result.driverLastName}
                        </span>
                        <span className="col-span-3 truncate text-white/60">
                          {result.driverTeam}
                        </span>
                        <span className="col-span-2 text-right font-semibold">
                          {result.driverPoints}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-72 flex items-center justify-center text-sm text-white/50">
                  Aun no hay resultados
                </div>
              )}
            </button>
          </ReactCardFlip>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
