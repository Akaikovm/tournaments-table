import React from "react";
import { italyResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Italy() {
  return (
    <TrackTemplate
      trackName="Autodromo Nazionale Monza"
      trackImage="/tracks/italy.png"
      trackAlt="Italy"
      raceNumber={15}
      results={italyResults}
    />
  );
}

export default Italy;
