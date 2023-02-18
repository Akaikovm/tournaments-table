import React from "react";

const Rules = () => {
  return (
    <>
      <div className="p-6 pt-4 pb-4 mb-12 relative text-white">
        <h1 className="font-semibold  uppercase mb-8">Da Rules</h1>
        <ul className="list-disc list-inside pl-3">
          <li>
            <span className="relative right-2">
              Todo torneo pre-tabla no sera valido para la tabla pero puede ser
              recordado y de igual forma es un torneo valido para miar a los
              rivales.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Para ser valido el torneo debe involucrar a mas de 1 persona del
              grupo.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Si el torneo no incluye CPU, cualquier nivel de dificultad puede
              ser usado en el juego (caso de que sea videojuego)
            </span>
          </li>
          <li>
            <span className="relative right-2">
              El torneo debe tener un total de mas de 20 partidas entre los
              jugadores involucrados para ser un torneo valido.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Todo torneo debe tener el mismo nivel de dificultad y/o modo de
              juego para todos los jugadores involucrados (caso de que sea
              videojuego).
            </span>
          </li>
          <li>
            <span className="relative right-2">
              El nivel de dificultad y/o modo de juego sera pactado entre los
              jugadores antes de empezar el torneo.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Los torneos pueden ser empezados con 2 personas en el caso de que
              alguno de los otros 2 no quiera participar en dicho torneo bien
              sea porque no le gusta el juego o porque no tiene tiempo para
              participar.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Todo torneo suspendido por X razon dara como campeon y subcampeon
              a los 2 primeros lugares del torneo hasta el momento de la
              cancelacion.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Para empezar algun torneo en estado de ebriedad los 4
              participantes principales deben estar ebrios
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Para que un torneo de algun juego de nintendo que involucre a
              mario bros sea valido los jugadores principales deben dar validez
              previo torneo.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Para un torneo de NBA/NFL/FIFA/NHL los involucrados deben dar
              validez previo torneo.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Si por alguna razon, el torneo comienza y alguno de los jugadores
              no tiene el mismo nivel de dificultad y/o modo de juego y llega a
              ganar, su titulo no sera valido. El titulo sera del segundo lugar.
            </span>
          </li>
          <li>
            <span className="relative right-2">
              Si alguno de los jugadores es encontrado haciendo trampa sera
              descalificado y si llegara a ganar, su titulo no sera valido. El
              titulo sera del segundo lugar.
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Rules;
