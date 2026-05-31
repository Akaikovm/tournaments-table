import React from "react";
import { saudiArabiaResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function SaudiArabia() {
  return (
    <TrackTemplate
      trackName="Jeddah Corniche Circuit"
      trackImage="/tracks/saudiarabia.png"
      trackAlt="SaudiArabia"
      raceNumber={2}
      results={saudiArabiaResults}
    />
  );
}

export default SaudiArabia;
