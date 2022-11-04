import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";
import { settings } from "../../../pokedex.config";
import UI from "./UI";

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

Chart.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function ({ prop1, prop2, data }) {
  const object = { array: { 1: [], 2: [] } };

  data.stats?.forEach((element) => {
    object.array[1].push(element.base_stat);
    object.array[2].push(element.stat.name);
  });

  return (
    <Transition appear show={prop2} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={prop1}>
        <Transition.Child
          as={Fragment}
          enter={settings.headlessui.transition[2].enter}
          enterFrom={settings.headlessui.transition[2].enterFrom}
          enterTo={settings.headlessui.transition[2].enterTo}
          leave={settings.headlessui.transition[2].leave}
          leaveFrom={settings.headlessui.transition[2].leaveFrom}
          leaveTo={settings.headlessui.transition[2].leaveTo}
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full flex-col items-center justify-center p-5 text-center">
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
                  [
                    "w-full max-w-xl transform overflow-hidden rounded-md p-5 text-left align-middle",
                  ],
                  [
                    settings.style.background.dialog,
                    settings.style.border.dialog,
                  ]
                )}
              >
                <legend className="flex flex-row items-center">
                  <UI.pokemonImage>
                    <img
                      src={
                        data.sprites?.versions["generation-v"]["black-white"]
                          .animated.front_default
                      }
                      alt={data.name}
                    />
                  </UI.pokemonImage>

                  <UI.pokemonName>
                    <span className={"ml-1"}>{data.name}</span>
                  </UI.pokemonName>
                </legend>

                {/* <Dialog.Title></Dialog.Title> */}

                <Dialog.Description
                  as="div"
                  className="flex flex-col text-center"
                >
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
        </div>
      </Dialog>
    </Transition>
  );
}
