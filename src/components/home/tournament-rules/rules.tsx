import React from "react";
import { Accordion } from "keep-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Rules = () => {
  return (
    <>
      <Accordion>
        <Accordion.Panel className="bg-red-700">
          <Accordion.Container className="bg-red-700 text-white group-hover:bg-red-800">
            <Accordion.Title className="font-semibold uppercase text-black">
              Da Rules
            </Accordion.Title>
            <Accordion.Icon>
              <FontAwesomeIcon icon={faPlus} />
            </Accordion.Icon>
          </Accordion.Container>
          <Accordion.Content className="text-black group-hover:bg-red-800">
            <ul className="list-disc list-inside pl-3">
              <li>
                <span className="relative right-2">
                  Todo torneo pre-tabla no sera valido para la tabla pero puede
                  ser recordado.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Para ser valido el torneo debe involucrar a mas de 1 persona
                  del grupo.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Si el torneo no incluye CPU, cualquier nivel de dificultad
                  puede ser usado en el juego (caso de que sea videojuego)
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Todo torneo debe tener el mismo nivel de dificultad y/o modo
                  de juego para todos los jugadores involucrados (caso de que
                  sea videojuego).
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  El nivel de dificultad y/o modo de juego sera pactado entre
                  los jugadores antes de empezar el torneo.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Los torneos pueden ser empezados con 2 personas en el caso de
                  que alguno de los otros 2 no quiera participar en dicho torneo
                  bien sea porque no le gusta el juego o porque no tiene tiempo
                  para participar.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Todo torneo suspendido por X razon dara como campeon y
                  subcampeon a los 2 primeros lugares del torneo hasta el
                  momento de la cancelacion.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Para un torneo de NBA/NFL/FIFA/NHL/MLB los involucrados deben
                  dar validez previo torneo.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Si por alguna razon, el torneo comienza y alguno de los
                  jugadores no tiene el mismo nivel de dificultad y/o modo de
                  juego y llega a ganar, su titulo no sera valido. El titulo
                  sera del segundo lugar.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Si alguno de los jugadores es encontrado haciendo trampa sera
                  descalificado y si llegara a ganar, su titulo no sera valido.
                  El titulo sera del segundo lugar.
                </span>
              </li>
              <li>
                <span className="relative right-2">
                  Los subcampeones de cada torneo tambien ganaran puntos para la
                  tabla de standings, ganaran la mitad de lo que gana el campeon
                  dependiendo del tier del torneo
                </span>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default Rules;
