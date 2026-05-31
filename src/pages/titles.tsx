import React from "react";
import Datatable, { createTheme } from "react-data-table-component";
import { paginationOptions } from "../domain/table-data/constant";
import { titleColumns } from "domain/table-data/tables-columns";
import { setParticipantResults } from "utils/score-utils";
import { TitleBar } from "components/ui/titleBar";
import { Container } from "components/ui/container";
import { useGetTournaments } from "hooks/use-tournaments";
import { LoadingText, LoadingError } from "components/ui/modal/form-ui";

createTheme("pgg-dark-titles", {
  text: {
    primary: "rgba(255,255,255,0.92)",
    secondary: "rgba(255,255,255,0.65)",
  },
  background: { default: "transparent" },
  context: { background: "rgba(99,102,241,0.15)", text: "white" },
  divider: { default: "rgba(255,255,255,0.06)" },
  button: {
    default: "rgba(255,255,255,0.85)",
    hover: "white",
    focus: "white",
    disabled: "rgba(255,255,255,0.3)",
  },
  highlightOnHover: { default: "rgba(99,102,241,0.08)", text: "white" },
});

const Titles = () => {
  const { data: tournaments, isLoading, isError } = useGetTournaments();
  const results = setParticipantResults(tournaments);

  return (
    <>
      <TitleBar
        title="Palmares"
        subtitle="Titulos conquistados por cada jugador en los distintos tiers."
      />
      <Container size="large">
        <div className="rounded-3xl glass gradient-border overflow-hidden animate-fade-in-up">
          {isLoading ? (
            <div className="p-10 flex justify-center">
              <LoadingText />
            </div>
          ) : isError ? (
            <div className="p-10 flex justify-center">
              <LoadingError />
            </div>
          ) : (
            <div className="px-1 sm:px-2 pb-2">
              <Datatable
                columns={titleColumns as any}
                data={results}
                pagination
                paginationComponentOptions={paginationOptions}
                fixedHeader
                fixedHeaderScrollHeight="600px"
                defaultSortAsc={false}
                defaultSortFieldId="tierA"
                theme="pgg-dark-titles"
                highlightOnHover
                pointerOnHover
                responsive
                persistTableHead
              />
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Titles;
