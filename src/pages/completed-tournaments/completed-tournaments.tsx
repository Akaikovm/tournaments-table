import React from "react";
import { TitleBar } from "components/ui/titleBar";
import { Button } from "components/ui/button";
import { useNavigate } from "react-router-dom";

const CompletedTournaments = () => {
  const navigate = useNavigate();

  const seeF1TournamentHandle = () => {
    navigate("/formula-1-2023");
  };

  return (
    <>
      <div className="relative">
        <TitleBar
          title="Formula 1 2023"
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
    </>
  );
};

export default CompletedTournaments;
