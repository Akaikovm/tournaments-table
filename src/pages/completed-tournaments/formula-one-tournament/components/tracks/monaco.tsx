import React from "react";
import { monacoResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Monaco() {
  return (
    <TrackTemplate
      trackName="Circuit de Monaco"
      trackImage="/tracks/monaco.png"
      trackAlt="Monaco"
      raceNumber={7}
      results={monacoResults}
    />
  );
}

export default Monaco;
