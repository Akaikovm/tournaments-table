import React from "react";

const Rules = () => {
  return (
    <>
      <div className="p-6 pt-4 pb-4 mb-12 relative text-white">
        <ul className="list-disc list-inside pl-3">
          <li>
            <span className="relative right-2">
              Los puntos seran repartidos de la misma manera que en la formula
              1.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              El formato de Clasificacion sera el mismo de la F1.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              la IA correra con un nivel de dificultad de 65.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Las Carreras tendran una distancia de 25%.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              De no poderse crear el modo liga desde el juego por tener usuarios
              crossplay el torneo sera jugado en modo carrera amistosa con las
              normativas correspondientes.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Cualquier accidente de carrera podria ser estudiado y causar
              penalizacion para dicho piloto luego de cada carrera.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Luego de la 3era Vuelta cuando se active el DRS la carrera sera
              tomada como valida y no habra repeticiones.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Los pilotos podran correr con las ayudas que quieran.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Si por alguna razon se cancela el torneo, quedaran como campeon y
              subcampeon los pilotos que de momento esten en 1er y 2do lugar.
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Rules;
