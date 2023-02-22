import React, { useState } from "react";
import Datatable, { createTheme } from "react-data-table-component";
import { paginationOptions } from "../domain/table-data/constant";
import { TitleBar } from "components/ui/titleBar";
import { useGetTournaments } from "hooks/use-tournaments";
import { Button } from "components/ui/button";
import { useDisclosure } from "components/ui/modal/use-disclosure";
import { TournamentDetailsModal } from "components/tournament-details-modal";
import { AddTournamentsModal } from "components/add-tournaments-modal";

const TournamentsTable = () => {
  const { data: tournaments } = useGetTournaments();
  const [tournamentDetail, setTournamentDetail] = useState();
  const [toggleCleared, setToggleCleared] = React.useState(false);

  const {
    isOpen: TournamentDetailsModalIsOpen,
    onClose: TournamentDetailsModalOnClose,
    onOpen: TournamentDetailsModalOnOpen,
  } = useDisclosure();

  const {
    isOpen: AddTournamentModalIsOpen,
    onClose: AddTournamentModalIsOnClose,
    onOpen: AddTournamentModalIsOnOpen,
  } = useDisclosure();

  const handleClickedRow = (selectedRows: any) => {
    setTournamentDetail(selectedRows);
    TournamentDetailsModalOnOpen();

    if (toggleCleared) {
      setToggleCleared(false);
    } else {
      setToggleCleared(true);
    }
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
  ];

  createTheme("dark", {
    background: {
      default: "transparent",
    },
  });

  return (
    <>
      <div className="relative">
        <TitleBar
          title="Torneos"
          action={
            <Button
              data-testid="addAppointmentNote"
              className="mr-4"
              variant="primary"
              onClick={AddTournamentModalIsOnOpen}
            >
              Añadir Torneo
            </Button>
          }
        />
      </div>
      <Datatable
        columns={tournamentsColumns as any}
        data={tournaments}
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="600"
        theme="dark"
        selectableRows
        onSelectedRowsChange={handleClickedRow}
        clearSelectedRows={toggleCleared}
        responsive
        persistTableHead
        selectableRowsNoSelectAll
      />
      <TournamentDetailsModal
        isOpen={TournamentDetailsModalIsOpen}
        onClose={TournamentDetailsModalOnClose}
        tournamentDetail={tournamentDetail}
      />
      <AddTournamentsModal
        isOpen={AddTournamentModalIsOpen}
        onClose={AddTournamentModalIsOnClose}
      />
    </>
  );
};

export default TournamentsTable;
