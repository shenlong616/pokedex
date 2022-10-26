import Image from "next/image";
import Stat from "./Stat";
import clsx from "clsx";
import { Transition } from "@headlessui/react";
import Tilt from "react-parallax-tilt";
import { settings } from "../../../../pokedex.config";

export default function ({ response }) {
  const { stats, sprites, species, name } = response;

  const array = [stats[0].base_stat, stats[1].base_stat, stats[2].base_stat];

  const getHighestElement = array.findIndex(
    (element) => element === Math.max(...array)
  );

  const totalArray = array.reduce((a, b) => a + b, 0);

  return (
    <Transition
      show={true}
      appear
      enter="transition-all ease-in-out duration-300"
      enterFrom="opacity-0 translate-y-2/3 skew-y-12"
      enterTo="opacity-100 translate-y-0 skew-y-0"
    >
      <Tilt tiltMaxAngleX={6} tiltMaxAngleY={3}>
        <div
          className={clsx(
            [
              "grid scale-90 cursor-pointer select-none grid-cols-2 rounded-md border p-1 transition duration-150 ease-in-out hover:scale-100 hover:animate-pulse active:translate-y-1.5",
            ],
            [settings.styles.background.card, settings.styles.border.card],
            {
              "hover:shadow-xl hover:shadow-green-500 hover:ring-1 hover:ring-green-500 hover:ring-offset-2 hover:ring-offset-green-500":
                getHighestElement === 0,
            },
            {
              "hover:shadow-xl hover:shadow-red-500 hover:ring-1 hover:ring-red-500 hover:ring-offset-2 hover:ring-offset-red-500":
                getHighestElement === 1,
            },
            {
              "hover:shadow-xl hover:shadow-blue-500 hover:ring-1 hover:ring-blue-500 hover:ring-offset-2 hover:ring-offset-blue-500":
                getHighestElement === 2,
            }
          )}
          // onClick={() => alert(`${id} - ${name} `)}
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
  );
}
