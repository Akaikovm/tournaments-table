import React from "react";
import { spainResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Spain() {
  return (
    <TrackTemplate
      trackName="Circuit de Barcelona-Catalunya"
      trackImage="/tracks/spain.png"
      trackAlt="Spain"
      raceNumber={8}
      results={spainResults}
    />
  );
}

export default Spain;
