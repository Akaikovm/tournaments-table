import React from "react";
import { greatBritainResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function GreatBritain() {
  return (
    <TrackTemplate
      trackName="Silverstone Circuit"
      trackImage="/tracks/greatBritain.png"
      trackAlt="Great Britain"
      raceNumber={11}
      results={greatBritainResults}
    />
  );
}

export default GreatBritain;
