import useSWR from "swr";
import { settings } from "../pokedex.config";

export default function usePokemon() {
  const { data } = useSWR(`${settings.api}/pokemon`, settings.swr.fetcher);

  return {
    count: data?.count,
  };
}
