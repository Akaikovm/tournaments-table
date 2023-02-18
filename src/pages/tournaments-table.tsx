import React, { useContext } from "react";
import Datatable, { createTheme } from "react-data-table-component";
import { paginationOptions } from "../domain/table-data/constant";
import { tournaments } from "../domain/data/constant";
import { Link } from "react-router-dom";
import { AppContext } from "components/context/provider";

const TournamentsTable = () => {
  const [, setState] = useContext(AppContext);

  const handleTournamentDetails = (tournament: any) => {
    setState(tournament);
  };

  const tournamentsColumns = [
    {
      name: "Fecha",
      selector: "date",
      sortable: true,
    },
    {
      name: "Plataforma",
      selector: "platform",
      sortable: true,
    },
    {
      name: "Juego",
      selector: "game",
      sortable: true,
      grow: 1,
    },
    {
      name: "Tier",
      selector: "tier",
      sortable: true,
    },
    {
      name: "Campeon",
      selector: "champion",
      sortable: true,
    },
    {
      name: "Sub Campeon",
      selector: "runnerUp",
      sortable: true,
    },
    {
      name: "Detalles",
      button: true,
      cell: (tournament: any) => (
        <Link
          onClick={() => handleTournamentDetails(tournament)}
          to={{ pathname: `/tournament-details` }}
        >
          Ver Detalles
        </Link>
      ),
    },
  ];

  createTheme("dark", {
    background: {
      default: "transparent",
    },
  });

  return (
    <div className="mt-5">
      <Datatable
        columns={tournamentsColumns as any}
        data={tournaments}
        title="PGG's Tournament Series"
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="600"
        theme="dark"
      />
    </div>
  );
};

export default TournamentsTable;
