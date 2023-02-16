import React, { useContext } from "react";
import { AppContext } from "components/context/provider";

const TournamentDetails = () => {
  const [state] = useContext(AppContext);

  console.log("state", state);
  return (
    <div className="p-6 pt-4 pb-4 mb-12 relative text-white">
      <h1>Campeon</h1>
      {state.champion}
    </div>
  );
};

export default TournamentDetails;
