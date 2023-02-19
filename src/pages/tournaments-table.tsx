import React, { useContext } from "react";
import Datatable, { createTheme } from "react-data-table-component";
import { paginationOptions } from "../domain/table-data/constant";
import { Link } from "react-router-dom";
import { AppContext } from "components/context/provider";
import { TitleBar } from "components/ui/titleBar";
import { useTournaments } from "hooks/use-tournaments";

const TournamentsTable = () => {
  const [, setState] = useContext(AppContext);
  const { data: tournaments } = useTournaments();

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
    <>
      <div className="relative">
        <TitleBar title="Torneos" />
      </div>
      <Datatable
        columns={tournamentsColumns as any}
        data={tournaments}
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="600"
        theme="dark"
      />
    </>
  );
};

export default TournamentsTable;
