import React from "react";
import { singaporeResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Singapore() {
  return (
    <TrackTemplate
      trackName="Marina Bay Street Circuit"
      trackImage="/tracks/singapore.png"
      trackAlt="Singapore"
      raceNumber={16}
      results={singaporeResults}
    />
  );
}

export default Singapore;
