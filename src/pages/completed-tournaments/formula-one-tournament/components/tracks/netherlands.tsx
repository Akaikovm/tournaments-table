import React from "react";
import { netherlandsResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Netherlands() {
  return (
    <TrackTemplate
      trackName="Circuit Zandvoort"
      trackImage="/tracks/netherlands.png"
      trackAlt="Netherlands"
      raceNumber={14}
      results={netherlandsResults}
    />
  );
}

export default Netherlands;
