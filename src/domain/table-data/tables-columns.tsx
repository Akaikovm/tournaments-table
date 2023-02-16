export const titleColumns = [
  {
    name: "Jugador",
    selector: "name",
    sortable: true,
  },
  {
    name: "Torneos IRL",
    selector: "tierIrl",
    sortable: true,
    grow: 2,
  },
  {
    name: "Torneos Tier A",
    selector: "tierA",
    sortable: true,
  },
  {
    name: "Torneos Tier B",
    selector: "tierB",
    sortable: true,
  },
  {
    name: "Torneos Tier C",
    selector: "tierC",
    sortable: true,
  },
];

export const standingsColumns = [
  {
    name: "Jugador",
    selector: "name",
    sortable: true,
  },
  {
    name: "Puntos Totales",
    selector: "points",
    sortable: true,
    id: "points",
    grow: 4,
  },
];
