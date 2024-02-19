import React from "react";

const Tiers = () => {
  return (
    <div className="p-6 pt-4 pb-4 mb-12 relative text-white">
      <h1 className="font-semibold  uppercase mb-8">Tier Points</h1>
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
    </div>
  );
};

export default Tiers;
