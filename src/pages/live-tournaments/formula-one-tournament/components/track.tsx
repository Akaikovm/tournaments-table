import React from "react";
import RaceResults from "../../../completed-tournaments/formula-one-tournament/components/raceResults";

function Track({
  trackName,
  trackNumber,
  trackResults,
  trackAlt,
  trackCountry,
}: any) {
  return (
    <div className="text-white block md:flex">
      <div className="block md:flex-1 md:w-1/2">
        <h1 className="text-2xl mt-4 text-center">{trackName}</h1>
        <img
          src={process.env.PUBLIC_URL + `/tracks/${trackCountry}.png`}
          alt={trackAlt}
          className="ml-5 mt-20 w-full md:w-2/3 lg:w-2/3"
        />
      </div>
      <div className="block md:flex-1 md:w-1/2">
        <h1 className="text-2xl mt-4 text-center">
          RESULTADOS CARRERA {trackNumber}
        </h1>
        <RaceResults results={trackResults} />
      </div>
    </div>
  );
}

export default Track;
