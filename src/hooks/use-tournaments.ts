import { http } from "common-http";
import { useQuery } from "react-query";

const getTournaments = async () => {
  const { data } = await http.get("/tournament");
  return data;
};

export function useTournaments() {
  return useQuery(["tournament"], () => getTournaments());
}
