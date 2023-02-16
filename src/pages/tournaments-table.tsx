import React from "react";
import Datatable from "react-data-table-component";
import { paginationOptions } from "../domain/table-data/constant";
import { tournaments } from "../domain/data/constant";
import { tournamentsColumns } from "domain/table-data/tables-columns";

const TournamentsTable = () => {
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
      />
    </div>
  );
};

export default TournamentsTable;
