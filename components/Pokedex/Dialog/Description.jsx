import CodeMirror from "../../CodeMirror";
import { table } from "table";
import { settings } from "../../../pokedex.config";
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
import useSWR from "../../../hooks/useSWR";
import _function1 from "../../../function/_function1";
import _function2 from "../../../function/_function2";
import convert from "convert";
import capitalize from "lodash/capitalize";

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
    `${settings.pokeapi.endpoint.pokemonSpecies}/${data.id}`
  );

  const object = { array: { 1: [], 2: [] } };

  data.stats.forEach((element) => {
    object.array[1].push(element.base_stat);
    object.array[2].push(element.stat.name);
  });

  return (
    <div className="flex flex-col items-center gap-y-2 sm:flex-row sm:gap-x-2">
      <div className="w-full max-w-xs sm:max-w-lg">
        <CodeMirror>
          {`# ${data.name.toUpperCase()} (${data.id})\n${table(
            [
              ["Height", convert(data.height, "decimetres").to("best")],
              ["Weight", convert(data.weight, "hectograms").to("best")],
              [
                "Type",
                data.types
                  .map((element) => capitalize(element.type.name))
                  .join(", "),
              ],
              [
                "Egg groups",
                pokemonSpecies?.egg_groups
                  .map((element) => capitalize(element.name))
                  .join(", "),
              ],
              [
                "Abilities",
                data.abilities
                  .map((element) => {
                    return element.is_hidden
                      ? `[^${capitalize(element.ability.name)}]`
                      : capitalize(element.ability.name);
                  })
                  .join(", "),
              ],
            ],
            settings.table
          )}\n${table(
            [
              ["Experience [^1]", data.base_experience],
              [
                "Happiness [^2]",
                _function2(pokemonSpecies?.base_happiness, 255),
              ],
              [
                "Capture rate [^3]",
                _function2(pokemonSpecies?.capture_rate, 255),
              ],
            ],
            settings.table
          )}\n${table(
            [
              ["Baby", _function1(pokemonSpecies?.is_baby)],
              ["Legendary", _function1(pokemonSpecies?.is_legendary)],
              ["Mythical", _function1(pokemonSpecies?.is_mythical)],
            ],
            settings.table
          )}\n[^Ability name]: Hidden ability.\n[^1]: The base experience gained for defeating this Pok??mon.\n[^2]: The happiness when caught by a normal Pok??ball; up to 255. The higher the number, the happier the Pok??mon.\n[^3]: The base capture rate; up to 255. The higher the number, the easier the catch.`}
        </CodeMirror>
      </div>

      <div className="w-96">
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
    </div>
  );
}
