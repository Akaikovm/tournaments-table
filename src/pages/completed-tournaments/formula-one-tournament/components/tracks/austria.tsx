import React from "react";
import { austriaResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Austria() {
  return (
    <TrackTemplate
      trackName="Red Bull Ring"
      trackImage="/tracks/austria.png"
      trackAlt="Austria"
      raceNumber={10}
      results={austriaResults}
    />
  );
}

export default Austria;
