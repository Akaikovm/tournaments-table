import React from "react";

export interface RaceResultsProps {
  results: any[];
}

function RaceResults(props: RaceResultsProps) {
  const { results } = props;
  return (
    <div>
      {results.length ? (
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
              {results.map((result, index) => (
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
      ) : (
        <h1 className="text-2xl mt-4 text-center">No hay Resultados</h1>
      )}
    </div>
  );
}

export default RaceResults;
