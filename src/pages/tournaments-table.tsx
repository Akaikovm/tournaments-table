import React, { useMemo, useState } from "react";
import Datatable, { createTheme } from "react-data-table-component";
import { paginationOptions } from "../domain/table-data/constant";
import { TitleBar } from "components/ui/titleBar";
import { Container } from "components/ui/container";
import { useGetTournaments } from "hooks/use-tournaments";
import { Button } from "components/ui/button";
import { useDisclosure } from "components/ui/modal/use-disclosure";
import { TournamentDetailsModal } from "components/tournament-details-modal";
import { AddTournamentsModal } from "components/add-tournaments-modal";
import { LoadingText, LoadingError } from "components/ui/modal/form-ui";
import { FiPlus, FiSearch } from "react-icons/fi";

createTheme("pgg-dark", {
  text: {
    primary: "rgba(255,255,255,0.92)",
    secondary: "rgba(255,255,255,0.65)",
  },
  background: { default: "transparent" },
  context: { background: "rgba(99,102,241,0.15)", text: "white" },
  divider: { default: "rgba(255,255,255,0.06)" },
  button: { default: "rgba(255,255,255,0.85)", hover: "white", focus: "white", disabled: "rgba(255,255,255,0.3)" },
  highlightOnHover: { default: "rgba(99,102,241,0.08)", text: "white" },
});

const tierBadge = (tier?: string) => {
  if (!tier) return "";
  const t = tier.trim().toUpperCase();
  if (t === "IRL")
    return "bg-rose-500/15 border border-rose-400/30 text-rose-200";
  if (t === "A")
    return "bg-amber-500/15 border border-amber-400/30 text-amber-200";
  if (t === "B")
    return "bg-orange-500/15 border border-orange-400/30 text-orange-200";
  if (t === "C")
    return "bg-emerald-500/15 border border-emerald-400/30 text-emerald-200";
  return "bg-white/10 border border-white/20 text-white/80";
};

const TournamentsTable = () => {
  const { data: tournaments, isLoading, isError } = useGetTournaments();
  const [tournamentDetail, setTournamentDetail] = useState();
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [search, setSearch] = useState("");

  const {
    isOpen: TournamentDetailsModalIsOpen,
    onClose: TournamentDetailsModalOnClose,
    onOpen: TournamentDetailsModalOnOpen,
  } = useDisclosure();

  const {
    isOpen: AddTournamentModalIsOpen,
    onClose: AddTournamentModalIsOnClose,
    onOpen: AddTournamentModalIsOnOpen,
  } = useDisclosure();

  const handleClickedRow = (selectedRows: any) => {
    setTournamentDetail(selectedRows);
    TournamentDetailsModalOnOpen();
    setToggleCleared((v) => !v);
  };

  const tournamentsColumns = [
    {
      name: "Fecha",
      selector: (row: any) => row.date,
      sortable: true,
      hide: "md" as any,
    },
    {
      name: "Plataforma",
      selector: (row: any) => row.platform,
      sortable: true,
      hide: "md" as any,
    },
    {
      name: "Juego",
      selector: (row: any) => row.game,
      sortable: true,
      cell: (row: any) => (
        <span className="font-semibold text-white">{row.game}</span>
      ),
    },
    {
      name: "Tier",
      selector: (row: any) => row.tier,
      sortable: true,
      cell: (row: any) => (
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-bold ${tierBadge(
            row.tier
          )}`}
        >
          {row.tier}
        </span>
      ),
    },
    {
      name: "Campeon",
      selector: (row: any) => row.champion,
      sortable: true,
      cell: (row: any) => (
        <span className="inline-flex items-center gap-2">
          <span className="text-gold">★</span>
          <span className="text-white">{row.champion}</span>
        </span>
      ),
    },
    {
      name: "Sub Campeon",
      selector: (row: any) => row.runnerUp,
      sortable: true,
      hide: "md" as any,
      cell: (row: any) => (
        <span className="text-white/75">{row.runnerUp}</span>
      ),
    },
  ];

  const filtered = useMemo(() => {
    if (!tournaments) return [];
    if (!search) return tournaments;
    const q = search.toLowerCase();
    return tournaments.filter((t: any) =>
      [t.game, t.champion, t.runnerUp, t.platform, t.tier, t.date]
        .filter(Boolean)
        .some((v: string) => v.toString().toLowerCase().includes(q))
    );
  }, [tournaments, search]);

  return (
    <>
      <TitleBar
        title="Torneos Agregados"
        subtitle="Lista de todos los torneos registrados en la serie."
        action={
          <Button
            variant="primary"
            onClick={AddTournamentModalIsOnOpen}
            className="inline-flex items-center gap-2"
          >
            <FiPlus className="h-4 w-4" />
            Añadir Torneo
          </Button>
        }
      />

      <Container size="large">
        <div className="rounded-3xl glass gradient-border overflow-hidden animate-fade-in-up">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between p-4 sm:p-5 border-b border-white/5">
            <div className="relative flex-1 max-w-md">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por juego, campeon, plataforma..."
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-white/40 focus:outline-none focus:border-amber-400/70 focus:ring-2 focus:ring-amber-400/30 hover:border-white/20 transition-all"
              />
            </div>
            <div className="text-xs uppercase tracking-wider text-white/50">
              {filtered.length} torneos
            </div>
          </div>

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
                columns={tournamentsColumns as any}
                data={filtered}
                pagination
                paginationComponentOptions={paginationOptions}
                fixedHeader
                fixedHeaderScrollHeight="600px"
                theme="pgg-dark"
                selectableRows={false}
                onSelectedRowsChange={handleClickedRow}
                clearSelectedRows={toggleCleared}
                onRowClicked={(row) =>
                  handleClickedRow({ selectedRows: [row] })
                }
                pointerOnHover
                highlightOnHover
                responsive
                persistTableHead
              />
            </div>
          )}
        </div>
      </Container>

      <TournamentDetailsModal
        isOpen={TournamentDetailsModalIsOpen}
        onClose={TournamentDetailsModalOnClose}
        tournamentDetail={tournamentDetail}
      />
      <AddTournamentsModal
        isOpen={AddTournamentModalIsOpen}
        onClose={AddTournamentModalIsOnClose}
      />
    </>
  );
};

export default TournamentsTable;
