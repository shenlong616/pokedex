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

export default function ({ data }) {
  Chart.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );

  const object = { array: { 1: [], 2: [] } };

  data.stats?.forEach((element) => {
    object.array[1].push(element.base_stat);
    object.array[2].push(element.stat.name);
  });

  return (
    <div className="flex flex-row gap-x-5">
      <div className="w-full">
        <CodeMirror>
          {`# ${data.name?.toUpperCase()} (#${data.id})\n${table(
            [
              ["height", `${data.height}dm`],
              ["weight", `${data.weight}hg`],
              [
                "type",
                data.types?.map((element) => element.type.name).join(", "),
              ],
            ],
            settings.table
          )}`}
        </CodeMirror>
      </div>

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
    </div>
  );
}
