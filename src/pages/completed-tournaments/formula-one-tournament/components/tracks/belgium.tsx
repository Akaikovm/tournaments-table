import React from "react";
import { belgiumResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Belgium() {
  return (
    <TrackTemplate
      trackName="Circuit de Spa-Francorchamps"
      trackImage="/tracks/belgium.png"
      trackAlt="Belgium"
      raceNumber={13}
      results={belgiumResults}
    />
  );
}

export default Belgium;
