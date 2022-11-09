// https://swr.vercel.app/docs/getting-started#make-it-reusable
import useSWR from "swr";
import { settings } from "../pokedex.config";

export default function (parameter) {
  const { data, error } = useSWR(parameter, settings.swr.fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
