import React from "react";
import Datatable from "react-data-table-component";
import { paginationOptions } from "../domain/table-data/constant";
import { titleColumns } from "domain/table-data/tables-columns";
import { setParticipantScores } from "utils/score-utils";

const Titles = () => {
  return (
    <div className="mt-5">
      <Datatable
        columns={titleColumns as any}
        data={setParticipantScores()}
        title="Titulos"
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="600"
        defaultSortAsc={false}
      />
    </div>
  );
};

export default Titles;
