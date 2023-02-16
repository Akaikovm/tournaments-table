export const columns = [
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
    },
    {
        name: "Sub Campeon",
        selector: "runnerUp",
        sortable: true,
    },
    {
        name: "Equipo Sub Campeon",
        selector: "runnerUpTeam",
        sortable: true,
    },
];

export const paginationOptions = {
    rowsPerPageText: "Filas por pagina",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
};

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
