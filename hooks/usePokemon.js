// https://swr.vercel.app/docs/getting-started#make-it-reusable
import useSWR from "swr";
import { settings } from "../pokedex.config";

export default function usePokemon(parameter) {
  const { data, error } = useSWR(
    `${settings.api}/pokemon/${parameter}`,
    (...args) => fetch(...args).then((res) => res.json())
  );

  return {
    data: data,
    // isLoading: !error && !data,
    // isError: error,
  };
}
