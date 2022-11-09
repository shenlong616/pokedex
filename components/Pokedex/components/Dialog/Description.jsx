import CodeMirror from "../CodeMirror";
import { table } from "table";
import { settings } from "../../../../pokedex.config";
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
import useSWR from "../../../../hooks/useSWR";

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
                label: "base stat",
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
              ["height", `${data.height / 10}m`],
              ["weight", `${data.weight / 10}kg`],
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
              ["base_experience", `${data.base_experience}`],
              [
                "base_happiness",
                `${pokemonSpecies?.base_happiness} (${Math.round(
                  (pokemonSpecies?.base_happiness / 255) * 100
                )}%)`,
              ],
              [
                "capture_rate",
                `${pokemonSpecies?.capture_rate} (${Math.round(
                  (pokemonSpecies?.capture_rate / 255) * 100
                )}%)`,
              ],
            ],
            settings.table
          )}`}
        </CodeMirror>
      </div>
    </div>
  );
}
