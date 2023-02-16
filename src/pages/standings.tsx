import React from "react";
import Datatable, { createTheme } from "react-data-table-component";
import { paginationOptions } from "../domain/table-data/constant";
import { standingsColumns } from "domain/table-data/tables-columns";
import { setParticipantScores } from "utils/score-utils";

createTheme("dark", {
  background: {
    default: "transparent",
  },
});

const Standings = () => {
  return (
    <div className="mt-5">
      <Datatable
        columns={standingsColumns as any}
        data={setParticipantScores()}
        title="Puntos Totales"
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="600"
        defaultSortAsc={false}
        defaultSortFieldId="points"
        theme="dark"
      />
    </div>
  );
};

export default Standings;
