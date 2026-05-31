import React from "react";
import { bahrainResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Bahrain() {
  return (
    <TrackTemplate
      trackName="Bahrain International Circuit"
      trackImage="/tracks/bahrain.png"
      trackAlt="Bahrain"
      raceNumber={1}
      results={bahrainResults}
    />
  );
}

export default Bahrain;
