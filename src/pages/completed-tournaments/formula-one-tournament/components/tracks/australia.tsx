import React from "react";
import { australiaResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Australia() {
  return (
    <TrackTemplate
      trackName="Albert Park Grand Prix Circuit"
      trackImage="/tracks/australia.png"
      trackAlt="Australia"
      raceNumber={3}
      results={australiaResults}
    />
  );
}

export default Australia;
