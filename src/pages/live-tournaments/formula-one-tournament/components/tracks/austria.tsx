import React from "react";
import { austriaResults } from "domain/data/race-results/constant";
import RaceResults from "../raceResults";

function Austria() {
  return (
    <div className="text-white block md:flex">
      <div className="block md:flex-1 md:w-1/2">
        <h1 className="text-2xl mt-4 text-center">RED BULL RING</h1>
        <img
          src={process.env.PUBLIC_URL + "/tracks/austria.png"}
          alt="Austria"
          className="ml-5 mt-20 w-full md:w-2/3 lg:w-2/3"
        />
      </div>
      <div className="block md:flex-1 md:w-1/2">
        <h1 className="text-2xl mt-4 text-center">RESULTADOS CARRERA 9</h1>
        <RaceResults results={austriaResults} />
      </div>
    </div>
  );
}

export default Austria;
