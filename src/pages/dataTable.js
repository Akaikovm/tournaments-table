import React from "react";
import Datatable from "react-data-table-component";
import { columns, paginationOptions } from "../domain/table-data/constant";
import { tournaments } from "../domain/data/constant";

const DataTable = () => {
  return (
    <div className="mt-5">
      <Datatable
        columns={columns}
        data={tournaments}
        title="Torneos Amigos Giusti"
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="600"
      />
    </div>
  );
};

export default DataTable;
