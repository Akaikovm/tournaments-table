import React from "react";
import Datatable, { createTheme } from "react-data-table-component";
import { paginationOptions } from "../domain/table-data/constant";
import { standingsColumns } from "domain/table-data/tables-columns";
import { setParticipantScores } from "utils/score-utils";
import { TitleBar } from "components/ui/titleBar";

createTheme("dark", {
  background: {
    default: "transparent",
  },
});

const Standings = () => {
  return (
    <>
      <div className="relative">
        <TitleBar title="Puntos Totales" />
      </div>
      <Datatable
        columns={standingsColumns as any}
        data={setParticipantScores()}
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="600"
        defaultSortAsc={false}
        defaultSortFieldId="points"
        theme="dark"
      />
    </>
  );
};

export default Standings;
