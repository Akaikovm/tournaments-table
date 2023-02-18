import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const Rules = () => {
  return (
    <>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-red-500 font-bold p-2">QUIEN VA A MEAR A QUIEN?</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Juega con nosotros.
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Quieres ser el mas
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={["PRO", "GUEVO", "MION"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Ven y participa ahora en la PGG's Tournament Series
          </p>
          <Link
            to={{ pathname: `/tournaments-table` }}
            className="bg-red-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black"
          >
            Ver Torneos
          </Link>
        </div>
      </div>
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
