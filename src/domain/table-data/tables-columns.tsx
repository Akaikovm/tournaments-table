import React from "react";

const numberCell = (n: number, color = "text-white/85") => (
  <span className={`inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-white/[0.05] border border-white/[0.06] px-2 text-xs font-semibold ${color}`}>
    {n}
  </span>
);

export const titleColumns = [
  {
    name: "Jugador",
    id: "name",
    selector: (row: any) => row.name,
    sortable: true,
    sortFunction: (a: any, b: any) =>
      String(a.name ?? "").localeCompare(String(b.name ?? "")),
    cell: (row: any) => (
      <span className="font-semibold text-white">{row.name}</span>
    ),
  },
  {
    name: "Titulos IRL",
    id: "tierIrl",
    selector: (row: any) => row.tierIrl ?? 0,
    sortable: true,
    sortFunction: (a: any, b: any) => (a.tierIrl ?? 0) - (b.tierIrl ?? 0),
    hide: "md" as any,
    cell: (row: any) => numberCell(row.tierIrl, "text-rose-200"),
  },
  {
    name: "Titulos Tier A",
    id: "tierA",
    selector: (row: any) => row.tierA ?? 0,
    sortable: true,
    sortFunction: (a: any, b: any) => (a.tierA ?? 0) - (b.tierA ?? 0),
    cell: (row: any) => numberCell(row.tierA, "text-amber-200"),
  },
  {
    name: "Titulos Tier B",
    id: "tierB",
    selector: (row: any) => row.tierB ?? 0,
    sortable: true,
    sortFunction: (a: any, b: any) => (a.tierB ?? 0) - (b.tierB ?? 0),
    hide: "md" as any,
    cell: (row: any) => numberCell(row.tierB, "text-orange-200"),
  },
  {
    name: "Titulos Tier C",
    id: "tierC",
    selector: (row: any) => row.tierC ?? 0,
    sortable: true,
    sortFunction: (a: any, b: any) => (a.tierC ?? 0) - (b.tierC ?? 0),
    hide: "md" as any,
    cell: (row: any) => numberCell(row.tierC, "text-emerald-200"),
  },
];

const podiumBadge = (i: number) => {
  if (i === 0)
    return "bg-gold/15 text-gold border border-gold/40";
  if (i === 1)
    return "bg-silver/15 text-silver border border-silver/40";
  if (i === 2)
    return "bg-bronze/15 text-bronze border border-bronze/40";
  return "bg-white/[0.04] text-white/70 border border-white/[0.08]";
};

export const standingsColumns = [
  {
    name: "Pos",
    id: "pos",
    width: "70px",
    cell: (_: any, index: number) => (
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold ${podiumBadge(
          index
        )}`}
      >
        {index + 1}
      </span>
    ),
  },
  {
    name: "Jugador",
    id: "name",
    selector: (row: any) => row.name,
    sortable: true,
    sortFunction: (a: any, b: any) =>
      String(a.name ?? "").localeCompare(String(b.name ?? "")),
    cell: (row: any) => (
      <span className="font-semibold text-white">{row.name}</span>
    ),
  },
  {
    name: "Puntos Totales",
    id: "points",
    selector: (row: any) => row.points ?? 0,
    sortable: true,
    sortFunction: (a: any, b: any) => (a.points ?? 0) - (b.points ?? 0),
    cell: (row: any) => (
      <span className="inline-flex items-center gap-1.5">
        <span className="text-base font-display font-bold gradient-text">
          {row.points}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-white/40">
          PTS
        </span>
      </span>
    ),
  },
  {
    name: "IRL",
    id: "tierIrl",
    selector: (row: any) => row.tierIrl ?? 0,
    sortable: true,
    sortFunction: (a: any, b: any) => (a.tierIrl ?? 0) - (b.tierIrl ?? 0),
    hide: "md" as any,
    cell: (row: any) => numberCell(row.tierIrl, "text-rose-200"),
  },
  {
    name: "Tier A",
    id: "tierA",
    selector: (row: any) => row.tierA ?? 0,
    sortable: true,
    sortFunction: (a: any, b: any) => (a.tierA ?? 0) - (b.tierA ?? 0),
    hide: "md" as any,
    cell: (row: any) => numberCell(row.tierA, "text-amber-200"),
  },
  {
    name: "Tier B",
    id: "tierB",
    selector: (row: any) => row.tierB ?? 0,
    sortable: true,
    sortFunction: (a: any, b: any) => (a.tierB ?? 0) - (b.tierB ?? 0),
    hide: "md" as any,
    cell: (row: any) => numberCell(row.tierB, "text-orange-200"),
  },
  {
    name: "Tier C",
    id: "tierC",
    selector: (row: any) => row.tierC ?? 0,
    sortable: true,
    sortFunction: (a: any, b: any) => (a.tierC ?? 0) - (b.tierC ?? 0),
    hide: "md" as any,
    cell: (row: any) => numberCell(row.tierC, "text-emerald-200"),
  },
  {
    name: "Subcampeonatos",
    id: "runnerUp",
    selector: (row: any) => row.runnerUp ?? 0,
    sortable: true,
    sortFunction: (a: any, b: any) => (a.runnerUp ?? 0) - (b.runnerUp ?? 0),
    hide: "md" as any,
    cell: (row: any) => numberCell(row.runnerUp, "text-silver"),
  },
];
