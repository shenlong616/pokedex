import CodeMirror from "../../../../CodeMirror";
import { table } from "table";
import { settings } from "../../../../../pokedex.config";
import {
  Chart,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import useSWR from "../../../../../hooks/useSWR";
import _Is from "./_Is";
import _Percent from "./_Percent";
import convert from "convert";

export default function ({ data }) {
  Chart.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const { data: pokemonSpecies } = useSWR(
    `${settings.api}/pokemon-species/${data.id}`
  );

  const object = { array: { 1: [], 2: [] } };

  data.stats?.forEach((element) => {
    object.array[1].push(element.base_stat);
    object.array[2].push(element.stat.name);
  });

  return (
    <div className="flex flex-col md:flex-row md:gap-x-1">
      <div className="w-full">
        <Radar
          datasetIdKey={data.name}
          options={settings.chart}
          data={{
            labels: object.array[2],
            datasets: [
              {
                label: "Base stat",
                data: object.array[1],
              },
            ],
          }}
        />
      </div>

      <div className="w-full">
        <CodeMirror>
          {`# ${data.name?.toUpperCase()} (${
            data.id
          })\n## Basic information\n${table(
            [
              ["height", `${convert(data.height, "decimetres").to("best")}`],
              ["weight", `${convert(data.weight, "hectograms").to("best")}`],
              [
                "type",
                data.types?.map((element) => element.type.name).join(", "),
              ],
              [
                "egg_groups",
                `${pokemonSpecies?.egg_groups
                  ?.map((element) => element.name)
                  .join(", ")}`,
              ],
            ],
            settings.table
          )}\n## Base score\n${table(
            [
              ["experience", `${data.base_experience}`],
              ["happiness", _Percent(pokemonSpecies?.base_happiness, 255)],
              ["capture_rate", _Percent(pokemonSpecies?.capture_rate, 255)],
            ],
            settings.table
          )}\n## Is\n${table(
            [
              ["baby", `${_Is(pokemonSpecies?.is_baby)}`],
              ["legendary", `${_Is(pokemonSpecies?.is_legendary)}`],
              ["mythical", `${_Is(pokemonSpecies?.is_mythical)}`],
            ],
            settings.table
          )}`}
        </CodeMirror>
      </div>
    </div>
  );
}
