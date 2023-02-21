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

export function useDeleteAppointment() {
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
