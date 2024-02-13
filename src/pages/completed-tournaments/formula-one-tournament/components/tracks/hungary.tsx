import React from "react";
import { hungaryResults } from "domain/data/race-results/constant";
import RaceResults from "../raceResults";

function Hungary() {
  return (
    <div className="text-white block md:flex">
      <div className="block md:flex-1 md:w-1/2">
        <h1 className="text-2xl mt-4 text-center">HUNGARORING</h1>
        <img
          src={process.env.PUBLIC_URL + "/tracks/hungary.png"}
          alt="Hungary"
          className="ml-5 mt-20 w-full md:w-2/3 lg:w-2/3"
        />
      </div>
      <div className="block md:flex-1 md:w-1/2">
        <h1 className="text-2xl mt-4 text-center">RESULTADOS CARRERA 12</h1>
        <RaceResults results={hungaryResults} />
      </div>
    </div>
  );
}

export default Hungary;
