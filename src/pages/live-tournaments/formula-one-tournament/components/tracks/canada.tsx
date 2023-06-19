import React from "react";
import { canadaResults } from "domain/data/race-results/constant";
import RaceResults from "../raceResults";

function Canada() {
  return (
    <div className="text-white block md:flex">
      <div className="block md:flex-1 md:w-1/2">
        <h1 className="text-2xl mt-4 text-center">CIRCUIT GILLES-VILLENEUVE</h1>
        <img
          src={process.env.PUBLIC_URL + "/tracks/canada.png"}
          alt="Canada"
          className="ml-5 mt-20 w-full md:w-2/3 lg:w-2/3"
        />
      </div>
      <div className="block md:flex-1 md:w-1/2">
        <h1 className="text-2xl mt-4 text-center">RESULTADOS CARRERA 8</h1>
        <RaceResults results={canadaResults} />
      </div>
    </div>
  );
}

export default Canada;
