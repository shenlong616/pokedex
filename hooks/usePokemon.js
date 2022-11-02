// https://swr.vercel.app/docs/getting-started#make-it-reusable
import useSWR from "swr";
import axios from "axios";

import { settings } from "../pokedex.config";

export default function usePokemon(parameter) {
  const { data, error } = useSWR(
    `${settings.api}/pokemon/${parameter}`,
    // https://swr.vercel.app/docs/data-fetching#axios
    (parameter) => axios.get(parameter).then((res) => res.data)
  );

  return {
    data: data,
    // isLoading: !error && !data,
    // isError: error,
  };
}
