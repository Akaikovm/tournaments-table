import React from "react";
import Datatable, { createTheme } from "react-data-table-component";
import { paginationOptions } from "../domain/table-data/constant";
import { titleColumns } from "domain/table-data/tables-columns";
import { setParticipantScores } from "utils/score-utils";
import { TitleBar } from "components/ui/titleBar";

createTheme("dark", {
  background: {
    default: "transparent",
  },
});

const Titles = () => {
  return (
    <>
      <div className="relative">
        <TitleBar title="Titulos" />
      </div>
      <Datatable
        columns={titleColumns as any}
        data={setParticipantScores()}
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="600"
        defaultSortAsc={false}
        theme="dark"
        responsive
      />
    </>
  );
};

export default Titles;
