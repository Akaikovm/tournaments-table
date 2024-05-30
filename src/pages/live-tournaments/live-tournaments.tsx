import React from "react";
import { TitleBar } from "components/ui/titleBar";
import { Button } from "components/ui/button";
import { useNavigate } from "react-router-dom";

const LiveTournaments = () => {
  const navigate = useNavigate();

  const seeF1TournamentHandle = () => {
    navigate("/formula-1-2024");
  };

  const seeEuroAmericasCupHandle = () => {
    navigate("/americas-and-euro-cup-2024");
  };

  return (
    <>
      <div className="relative">
        <TitleBar
          title="Formula 1 2024"
          action={
            <Button
              className="mr-4"
              variant="primary"
              onClick={seeF1TournamentHandle}
            >
              Ver Torneo
            </Button>
          }
        />
        <span className="block w-full border border-black"></span>
      </div>
      <div className="relative">
        <TitleBar
          title="Quiniela Copa America / Eurocopa 2024"
          action={
            <Button
              className="mr-4"
              variant="primary"
              onClick={seeEuroAmericasCupHandle}
            >
              Ver Torneo
            </Button>
          }
        />
        <span className="block w-full border border-black"></span>
      </div>
    </>
  );
};

export default LiveTournaments;
