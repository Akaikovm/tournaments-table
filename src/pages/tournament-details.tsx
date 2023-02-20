import React, { useContext } from "react";
import { AppContext } from "components/context/provider";
import { TitleBar } from "components/ui/titleBar";

const TournamentDetails = () => {
  const [tournamentDetails] = useContext(AppContext);

  return (
    <>
      <div className="relative">
        <TitleBar title="Detalles de Torneo" />
      </div>
      <div className="mt-8 text-white ml-5">
        {tournamentDetails?.selectedRows?.length ? (
          <div>
            {tournamentDetails.selectedRows.map((tournament: any) => {
              return (
                <div key={tournament.id}>
                  <ul>
                    <li>
                      <span>{`Fecha: ${tournament.date}`}</span>
                    </li>
                    <li>
                      <span>{`Juego: ${tournament.game}`}</span>
                    </li>
                    <li>
                      <span>{`Campeon: ${tournament.champion}`}</span>
                    </li>
                    <li>
                      <span>{`Tier: ${tournament.tier}`}</span>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-8">
            <span className="text-sm font-semibold text-red-700">
              No hay Detalles de Torneo
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default TournamentDetails;
