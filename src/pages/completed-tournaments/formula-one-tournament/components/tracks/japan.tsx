import React from "react";
import { japanResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Japan() {
  return (
    <TrackTemplate
      trackName="Suzuka International Racing Course"
      trackImage="/tracks/japan.png"
      trackAlt="Japan"
      raceNumber={17}
      results={japanResults}
    />
  );
}

export default Japan;
