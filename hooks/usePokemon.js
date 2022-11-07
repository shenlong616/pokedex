// https://swr.vercel.app/docs/getting-started#make-it-reusable
import useSWR from "swr";
import { settings } from "../pokedex.config";

export default function usePokemon(parameter) {
  const { data, error } = useSWR(
    `${settings.api}/pokemon/${parameter}`,
    settings.swr.fetcher
  );

  return {
    data: data,
    // isLoading: !error && !data,
    // isError: error,
  };
}
