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
              El formato de Clasificacion sera el mismo de la F1, pero solo una
              Q.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              la IA correra con un nivel de dificultad de 65.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Las Carreras tendran una distancia de 50%.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Las Carreras se correran en modo multijugador clasico porque
              tenemos jugadores Cross
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
          <li>
            <span className="relative right-2">
              Si el circuito es callejero se correra sin daños y si no se
              correra con daños reducidos.
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Rules;
