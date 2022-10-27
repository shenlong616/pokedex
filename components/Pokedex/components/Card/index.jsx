import Image from "next/image";
import Stat from "./Stat";
import clsx from "clsx";
import { Transition } from "@headlessui/react";
import Tilt from "react-parallax-tilt";
import { settings } from "../../../../pokedex.config";
import { useState } from "react";
import Dialog from "./Dialog";

export default function ({ response }) {
  const { stats, sprites, species, name } = response;

  const array = [stats[0].base_stat, stats[1].base_stat, stats[2].base_stat];

  const getHighestElement = array.findIndex(
    (element) => element === Math.max(...array)
  );

  const totalArray = array.reduce((a, b) => a + b, 0);

  // Dialog
  const [state, setState] = useState(false);

  return (
    <>
      <Dialog prop1={state} prop2={() => setState(false)} />
      <Transition
        show={true}
        appear
        enter={settings.headlessui.transition[0].enter}
        enterFrom={settings.headlessui.transition[0].enterFrom}
        enterTo={settings.headlessui.transition[0].enterTo}
      >
        <Tilt tiltMaxAngleX={6} tiltMaxAngleY={3}>
          <div
            className={clsx(
              [
                "grid scale-90 cursor-pointer select-none grid-cols-2 rounded-md border p-1 transition-all duration-150 ease-in-out hover:scale-100 hover:animate-pulse active:translate-y-1.5",
              ],
              [settings.style.background.card, settings.style.border.card],
              {
                [settings.style.color.green[1]]: getHighestElement === 0,
              },
              {
                [settings.style.color.red[1]]: getHighestElement === 1,
              },
              {
                [settings.style.color.blue[1]]: getHighestElement === 2,
              }
            )}
            onClick={() => setState(true)}
          >
            <Image
              src={sprites.front_default}
              width={"100%"}
              height={"100%"}
              alt={species.name}
              // onLoadingComplete={() => {}}
            />
            <div className="self-center">
              <Stat>
                {[
                  array[0],
                  "bg-green-500",
                  (stats[0].base_stat / totalArray) * 100,
                ]}
              </Stat>
              <div className="my-0.5">
                <Stat>
                  {[
                    array[1],
                    "bg-red-500",
                    (stats[1].base_stat / totalArray) * 100,
                  ]}
                </Stat>
              </div>
              <Stat>
                {[
                  array[2],
                  "bg-blue-500",
                  (stats[2].base_stat / totalArray) * 100,
                ]}
              </Stat>
            </div>
          </div>
        </Tilt>
        <small className="select-all font-mono font-medium">{name}</small>
      </Transition>
    </>
  );
}
