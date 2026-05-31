import React from "react";
import { hungaryResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Hungary() {
  return (
    <TrackTemplate
      trackName="Hungaroring"
      trackImage="/tracks/hungary.png"
      trackAlt="Hungary"
      raceNumber={12}
      results={hungaryResults}
    />
  );
}

export default Hungary;
