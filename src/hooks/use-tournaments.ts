import { http } from "common-http";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useToasts } from "react-toast-notifications";

//Get Request
const getTournaments = async () => {
  const { data } = await http.get("/tournament");
  return data;
};

export function useGetTournaments() {
  return useQuery(["tournament"], () => getTournaments());
}

//Delete Request
export interface DeleteTournamentPayload {
  id: string;
}

const deleteTournament = async (
  deleteTournamentPayload: DeleteTournamentPayload
) => {
  return http
    .delete(`/tournament`, {
      data: {
        id: deleteTournamentPayload.id,
      },
    })
    .then((res) => res.data);
};

export function useDeleteTournament() {
  const queryClient = useQueryClient();
  const { addToast } = useToasts();

  return useMutation(deleteTournament, {
    onSuccess: (_, payload) => {
      addToast("Tournament Successfully Deleted", {
        appearance: "success",
        autoDismiss: true,
      });
      queryClient.invalidateQueries(["tournament", payload.id]);
      setTimeout(() => {
        queryClient.invalidateQueries();
      }, 1000);
    },
    onError: (err, payload) => {
      const queryKey = ["tournament", payload.id].join("");
      console.log(`Error ${queryKey} ${err}`);
    },
  });
}

//Post Request
export interface AddTournamentPayload {
  champion: string;
  championTeam: string;
  date: string;
  game: string;
  platform: string;
  players: number;
  runnerUp: string;
  runnerUpTeam: string;
  season: number;
  tier: string;
}

const addTournament = async (addTournamentPayload: AddTournamentPayload) => {
  return http
    .post(`/tournament`, {
      champion: addTournamentPayload.champion,
      championTeam: addTournamentPayload.championTeam,
      date: addTournamentPayload.date,
      game: addTournamentPayload.game,
      platform: addTournamentPayload.platform,
      players: addTournamentPayload.players,
      runnerUp: addTournamentPayload.runnerUp,
      runnerUpTeam: addTournamentPayload.runnerUpTeam,
      season: addTournamentPayload.season,
      tier: addTournamentPayload.tier,
    })
    .then((res) => res.data);
};

export function useAddTournament() {
  const queryClient = useQueryClient();
  const { addToast } = useToasts();

  return useMutation(addTournament, {
    onSuccess: (_, payload) => {
      addToast("Tournament Successfully Added", {
        appearance: "success",
        autoDismiss: true,
      });
      queryClient.invalidateQueries(["tournament", payload.date]);
      setTimeout(() => {
        queryClient.invalidateQueries();
      }, 1000);
    },
    onError: (err, payload) => {
      const queryKey = ["tournament", payload.date].join("");
      console.log(`Error ${queryKey} ${err}`);
    },
  });
}
