import React, { useMemo } from "react";
import Datatable, { createTheme } from "react-data-table-component";
import { paginationOptions } from "../domain/table-data/constant";
import { standingsColumns } from "domain/table-data/tables-columns";
import { setParticipantResults } from "utils/score-utils";
import { TitleBar } from "components/ui/titleBar";
import { Container } from "components/ui/container";
import { useGetTournaments } from "hooks/use-tournaments";
import { LoadingText, LoadingError } from "components/ui/modal/form-ui";

createTheme("pgg-dark-standings", {
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

const PodiumCard = ({
  rank,
  name,
  points,
}: {
  rank: number;
  name: string;
  points: number;
}) => {
  const tone =
    rank === 1
      ? "from-gold/30 to-amber-300/10 border-gold/50 text-gold"
      : rank === 2
      ? "from-silver/30 to-slate-300/10 border-silver/50 text-silver"
      : "from-bronze/30 to-orange-300/10 border-bronze/50 text-bronze";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl glass gradient-border p-5 sm:p-6 ${
        rank === 1 ? "sm:scale-[1.02]" : ""
      }`}
    >
      <div
        className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${tone} blur-2xl opacity-70`}
      />
      <div className="relative flex items-center justify-between">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl border bg-gradient-to-br ${tone} font-display font-bold`}
        >
          {rank}
        </span>
        <div className="text-right">
          <div className="text-3xl sm:text-4xl font-display font-bold gradient-text leading-none">
            {points}
          </div>
          <div className="text-[10px] uppercase tracking-wider text-white/50">
            PTS
          </div>
        </div>
      </div>
      <div className="relative mt-5">
        <div className="text-xs uppercase tracking-wider text-white/40">
          {rank === 1 ? "Lider" : rank === 2 ? "Segundo" : "Tercero"}
        </div>
        <div className="text-lg sm:text-xl font-display font-semibold text-white">
          {name}
        </div>
      </div>
    </div>
  );
};

const Standings = () => {
  const { data: tournaments, isLoading, isError } = useGetTournaments();

  const results = useMemo(() => {
    const r = setParticipantResults(tournaments);
    return [...r].sort((a, b) => b.points - a.points);
  }, [tournaments]);

  const top3 = results.slice(0, 3);

  return (
    <>
      <TitleBar
        title="Puntos Totales"
        subtitle="Ranking acumulado de todos los jugadores en la PGG Series."
      />
      <Container size="large">
        {!isLoading && !isError && top3.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 sm:mb-8 animate-fade-in-up">
            {/* Re-order podium for visual hierarchy on >= sm: 2-1-3 */}
            {top3[1] && (
              <div className="order-2 sm:order-1">
                <PodiumCard
                  rank={2}
                  name={top3[1].name}
                  points={top3[1].points}
                />
              </div>
            )}
            {top3[0] && (
              <div className="order-1 sm:order-2">
                <PodiumCard
                  rank={1}
                  name={top3[0].name}
                  points={top3[0].points}
                />
              </div>
            )}
            {top3[2] && (
              <div className="order-3 sm:order-3">
                <PodiumCard
                  rank={3}
                  name={top3[2].name}
                  points={top3[2].points}
                />
              </div>
            )}
          </div>
        ) : null}

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
                columns={standingsColumns as any}
                data={results}
                pagination
                paginationComponentOptions={paginationOptions}
                fixedHeader
                fixedHeaderScrollHeight="600px"
                defaultSortAsc={false}
                defaultSortFieldId="points"
                theme="pgg-dark-standings"
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

export default Standings;
