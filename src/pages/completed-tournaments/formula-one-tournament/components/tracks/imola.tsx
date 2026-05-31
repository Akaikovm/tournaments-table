import React from "react";
import { imolaResults } from "domain/data/race-results/constant";
import TrackTemplate from "./track-template";

function Imola() {
  return (
    <TrackTemplate
      trackName="Autodromo Enzo e Dino Ferrari"
      trackImage="/tracks/imola.png"
      trackAlt="Imola"
      raceNumber={6}
      results={imolaResults}
    />
  );
}

export default Imola;
