import useSWR from "swr";
import { settings } from "../pokedex.config";

export default function usePokemon() {
  const { data } = useSWR(`${settings.api}/pokemon`, (url) =>
    fetch(url).then((response) => response.json())
  );

  return {
    count: data?.count,
  };
}
