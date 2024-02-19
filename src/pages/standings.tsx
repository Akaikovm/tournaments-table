import React from "react";
import Datatable, { createTheme } from "react-data-table-component";
import { paginationOptions } from "../domain/table-data/constant";
import { standingsColumns } from "domain/table-data/tables-columns";
import { setParticipantResults } from "utils/score-utils";
import { TitleBar } from "components/ui/titleBar";
import { useGetTournaments } from "hooks/use-tournaments";

createTheme("dark", {
  background: {
    default: "transparent",
  },
});

const Standings = () => {
  const { data: tournaments } = useGetTournaments();

  return (
    <>
      <div className="relative">
        <TitleBar title="Puntos Totales" />
      </div>
      <Datatable
        columns={standingsColumns as any}
        data={setParticipantResults(tournaments)}
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="600"
        defaultSortAsc={false}
        defaultSortFieldId="points"
        theme="dark"
        responsive
        persistTableHead
      />
    </>
  );
};

export default Standings;
