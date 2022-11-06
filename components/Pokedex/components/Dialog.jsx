import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";
import { settings } from "../../../pokedex.config";
import Style from "./Style";
import CodeMirror from "./CodeMirror";
import { table } from "table";

// https://react-chartjs-2.js.org/docs/migration-to-v4#tree-shaking
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

export default function ({ show, data, onClose }) {
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
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="z-40 flex flex-col" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter={settings.headlessui.transition[2].enter}
          enterFrom={settings.headlessui.transition[2].enterFrom}
          enterTo={settings.headlessui.transition[2].enterTo}
          leave={settings.headlessui.transition[2].leave}
          leaveFrom={settings.headlessui.transition[2].leaveFrom}
          leaveTo={settings.headlessui.transition[2].leaveTo}
        >
          <div className="fixed inset-0 bg-black/0" />
        </Transition.Child>

        <div className="fixed inset-0 flex flex-col items-center justify-center overflow-y-auto p-5">
          <Transition.Child
            as={Fragment}
            enter={settings.headlessui.transition[1].enter}
            enterFrom={settings.headlessui.transition[1].enterFrom}
            enterTo={settings.headlessui.transition[1].enterTo}
            leave={settings.headlessui.transition[1].leave}
            leaveFrom={settings.headlessui.transition[1].leaveFrom}
            leaveTo={settings.headlessui.transition[1].leaveTo}
          >
            <Dialog.Panel
              as="fieldset"
              className={clsx(
                "w-full max-w-xl rounded-md p-5",
                settings.style.background.dialog,
                settings.style.border.dialog
              )}
            >
              <legend className="flex flex-row">
                <Style.pokemonImage>
                  <img
                    src={
                      data.sprites?.versions["generation-v"]["black-white"]
                        .animated.front_default
                    }
                    alt={data.name}
                  />
                </Style.pokemonImage>
              </legend>

              {/* <Dialog.Title></Dialog.Title> */}

              <Dialog.Description as="div" className="flex flex-col gap-y-12">
                <CodeMirror>
                  {`# ${data.name?.toUpperCase()} (${data.id})\n${table(
                    [
                      ["height", `${data.height}dm`],
                      ["weight", `${data.weight}hg`],
                      [
                        "type",
                        data.types
                          ?.map((element) => element.type.name)
                          .join(", "),
                      ],
                    ],
                    settings.table
                  )}`}
                </CodeMirror>

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
              </Dialog.Description>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
