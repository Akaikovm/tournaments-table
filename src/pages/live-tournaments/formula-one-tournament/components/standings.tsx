import React from "react";
import {
  constructorChampionship,
  driversChampionship,
} from "domain/data/race-results/results2024";

const Standings = () => {
  return (
    <div className="text-white mt-4">
      <div className="flex w-full max-w-screen-xs md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h1 className="pl-3 text-2xl font-bold">F1 2024 Driver Standings</h1>
      </div>
      <div className="mt-4 w-full justify-center mx-auto max-w-screen-xs md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-xl">
        {driversChampionship.length ? (
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4 mx-6 md:mx-0">
            <div className="flex gap-4">
              <p className="text-xs font-bold text-gray-800 mt-2 text-center w-1/5">
                Pos
              </p>
              <p className="text-xs font-bold text-gray-800 mt-2 text-center w-2/5">
                Piloto
              </p>
              <p className="text-xs font-bold text-gray-800 mt-2 text-center w-2/5">
                Equipo
              </p>
              <p className="text-xs font-bold text-gray-800 mt-2 text-center w-1/5">
                Puntos
              </p>
            </div>
            {driversChampionship.map((result: any, index) => (
              <div
                className={`flex gap-4 text-gray-800 ${
                  index !== driversChampionship.length - 1
                    ? "border-b border-gray-300"
                    : ""
                }`}
                key={index}
              >
                <p className="text-xs mt-2 text-center w-1/5">{index + 1}</p>
                <p className="text-xs mt-2 text-center w-2/5">
                  {result.driver}
                </p>
                <p className="text-xs mt-2 text-center w-2/5">{result.team}</p>
                <p className="text-xs mt-2 text-center w-1/5">
                  {result.points}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-white mt-10 text-center">
            No hay resultados de carrera
          </div>
        )}
      </div>

      <div className="flex w-full max-w-screen-xs md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h1 className="pl-3 text-2xl font-bold">
          F1 2024 Constructor Standings
        </h1>
      </div>
      <div className="mt-4 w-full justify-center mx-auto max-w-screen-xs md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-xl">
        {constructorChampionship.length ? (
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4 mx-6 md:mx-0">
            <div className="flex gap-4">
              <p className="text-xs font-bold text-gray-800 mt-2 text-center w-1/5">
                Pos
              </p>
              <p className="text-xs font-bold text-gray-800 mt-2 text-center w-2/5">
                Equipo
              </p>
              <p className="text-xs font-bold text-gray-800 mt-2 text-center w-1/5">
                Puntos
              </p>
            </div>
            {constructorChampionship.map((result: any, index) => (
              <div
                className={`flex gap-4 text-gray-800 ${
                  index !== constructorChampionship.length - 1
                    ? "border-b border-gray-300"
                    : ""
                }`}
                key={index}
              >
                <p className="text-xs mt-2 text-center w-1/5">{index + 1}</p>
                <p className="text-xs mt-2 text-center w-2/5">{result.team}</p>
                <p className="text-xs mt-2 text-center w-1/5">
                  {result.points}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-white mt-10 text-center">
            No hay resultados de carrera
          </div>
        )}
      </div>
    </div>
  );
};

export default Standings;
