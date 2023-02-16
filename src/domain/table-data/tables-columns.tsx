import { Link } from "react-router-dom";

export const tournamentsColumns = [
  {
    name: "Torneo",
    selector: "tournament",
    sortable: true,
  },
  {
    name: "Season",
    selector: "season",
    sortable: true,
  },
  {
    name: "Fecha",
    selector: "date",
    sortable: true,
  },
  {
    name: "Plataforma",
    selector: "platform",
    sortable: true,
  },
  {
    name: "Juego",
    selector: "game",
    sortable: true,
    grow: 2,
  },
  {
    name: "Jugadores",
    selector: "players",
    sortable: true,
  },
  {
    name: "Tier",
    selector: "tier",
    sortable: true,
  },
  {
    name: "Campeon",
    selector: "champion",
    sortable: true,
    grow: 2,
  },
  {
    name: "Equipo Campeon",
    selector: "championTeam",
    sortable: true,
    grow: 2,
  },
  {
    name: "Sub Campeon",
    selector: "runnerUp",
    sortable: true,
    grow: 2,
  },
  {
    name: "Equipo Sub Campeon",
    selector: "runnerUpTeam",
    sortable: true,
    grow: 2,
  },
  {
    name: "Detalles",
    button: true,
    cell: (row: any) => (
      <Link to={{ pathname: `/tournament-details` }}>Ver Detalles</Link>
    ),
  },
];

export const titleColumns = [
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
