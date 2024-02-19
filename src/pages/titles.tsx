import React from "react";
import Datatable, { createTheme } from "react-data-table-component";
import { paginationOptions } from "../domain/table-data/constant";
import { titleColumns } from "domain/table-data/tables-columns";
import { setParticipantResults } from "utils/score-utils";
import { TitleBar } from "components/ui/titleBar";
import { useGetTournaments } from "hooks/use-tournaments";

createTheme("dark", {
  background: {
    default: "transparent",
  },
});

const Titles = () => {
  const { data: tournaments } = useGetTournaments();
  return (
    <>
      <div className="relative">
        <TitleBar title="Palmares" />
      </div>
      <Datatable
        columns={titleColumns as any}
        data={setParticipantResults(tournaments)}
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="600"
        defaultSortAsc={false}
        theme="dark"
        responsive
        persistTableHead
      />
    </>
  );
};

export default Titles;
