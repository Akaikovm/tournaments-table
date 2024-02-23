import React from "react";
import { Accordion } from "keep-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Tiers = () => {
  return (
    <Accordion>
      <Accordion.Panel className="bg-red-700">
        <Accordion.Container className="bg-red-700 text-white group-hover:bg-red-800">
          <Accordion.Title className="font-semibold uppercase text-black">
            Tier Points
          </Accordion.Title>
          <Accordion.Icon>
            <FontAwesomeIcon icon={faPlus} />
          </Accordion.Icon>
        </Accordion.Container>
        <Accordion.Content className="text-black group-hover:bg-red-800">
          <ul className="list-disc list-inside pl-3">
            <li>
              <span className="relative right-2">
                Torneo IRL 7 PTS (Ping Pong/ Wiffle / Futbol/ Poker)
              </span>
            </li>
            <li>
              <span className="relative right-2">
                Torneo Tier A 5 PTS (Videojuego donde juguemos todos)
              </span>
            </li>
            <li>
              <span className="relative right-2">
                Torneo Tier B 3 PTS (torneos mas casuales donde no estamos todo
                (MLB/NBA) dan 3 puntos)
              </span>
            </li>
            <li>
              <span className="relative right-2">
                Torneo Tier C 1 PTS (Torneos donde al menos hay 2 personas)
              </span>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default Tiers;
