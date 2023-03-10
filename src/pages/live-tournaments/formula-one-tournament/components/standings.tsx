import React from "react";
import {
  constructorChampionship,
  driversChampionship,
} from "domain/data/race-results/constant";

const Standings = () => {
  return (
    <div className="text-white">
      <div className="text-2xl mt-4 text-center">Campeonato de Pilotos</div>
      {driversChampionship.length ? (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <table className="table-auto w-full mt-8">
              <thead>
                <tr>
                  <th className="px-4 py-2">Posición</th>
                  <th className="px-4 py-2">Piloto</th>
                  <th className="px-4 py-2">Equipo</th>
                  <th className="px-4 py-2">Puntos</th>
                </tr>
              </thead>
              <tbody>
                {driversChampionship.map((result, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-black" : "bg-black"}
                  >
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{result.driver}</td>
                    <td className="border px-4 py-2">{result.team}</td>
                    <td className="border px-4 py-2">{result.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            {constructorChampionship.length && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-2xl mt-10 text-center">
                  Campeonato de Constructores
                </div>
                <table className="table-auto w-full mt-8">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Posición</th>
                      <th className="px-4 py-2">Equipo</th>
                      <th className="px-4 py-2">Puntos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {constructorChampionship.map((result, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-black" : "bg-black"}
                      >
                        <td className="border px-4 py-2">{index + 1}</td>

                        <td className="border px-4 py-2">{result.team}</td>
                        <td className="border px-4 py-2">{result.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      ) : (
        <h1 className="text-2xl mt-4 text-center">
          No hay estadisticas para mostrar
        </h1>
      )}
    </div>
  );
};

export default Standings;
