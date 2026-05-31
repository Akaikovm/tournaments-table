import React from "react";
import { canadaResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Canada() {
  return (
    <TrackTemplate
      trackName="Circuit Gilles-Villeneuve"
      trackImage="/tracks/canada.png"
      trackAlt="Canada"
      raceNumber={9}
      results={canadaResults}
    />
  );
}

export default Canada;
