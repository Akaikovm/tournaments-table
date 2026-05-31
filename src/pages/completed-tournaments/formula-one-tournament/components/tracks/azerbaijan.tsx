import React from "react";
import { azeraijanResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Azerbaijan() {
  return (
    <TrackTemplate
      trackName="Baku City Circuit"
      trackImage="/tracks/azerbaijan.png"
      trackAlt="Azerbaijan"
      raceNumber={4}
      results={azeraijanResults}
    />
  );
}

export default Azerbaijan;
