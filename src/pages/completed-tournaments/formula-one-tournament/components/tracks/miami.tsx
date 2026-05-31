import React from "react";
import { miamiResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Miami() {
  return (
    <TrackTemplate
      trackName="Miami International Autodrome"
      trackImage="/tracks/miami.png"
      trackAlt="Miami"
      raceNumber={5}
      results={miamiResults}
    />
  );
}

export default Miami;
