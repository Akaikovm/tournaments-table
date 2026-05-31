import React from "react";
import RaceResults from "../raceResults";

export interface TrackTemplateProps {
  trackName: string;
  trackImage: string;
  trackAlt: string;
  raceNumber: number;
  results: any[];
}

const TrackTemplate = ({
  trackName,
  trackImage,
  trackAlt,
  raceNumber,
  results,
}: TrackTemplateProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 animate-fade-in">
      <div className="rounded-3xl glass gradient-border p-5 sm:p-6">
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
          Circuit
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
          {trackName}
        </h2>
        <div className="mt-5 h-56 sm:h-72 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] flex items-center justify-center overflow-hidden">
          <img
            src={process.env.PUBLIC_URL + trackImage}
            alt={trackAlt}
            className="max-h-full max-w-full object-contain p-4"
          />
        </div>
      </div>

      <div>
        <div className="mb-3 px-1">
          <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
            Resultados Carrera {raceNumber}
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
            <span className="gradient-text">Race {raceNumber}</span>
          </h2>
        </div>
        <RaceResults results={results} />
      </div>
    </div>
  );
};

export default TrackTemplate;
