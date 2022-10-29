import Image from "next/image";
import Stat from "./Stat";
import clsx from "clsx";
import { settings } from "../../../pokedex.config";

export default function ({ response }) {
  const { stats, sprites, species } = response;

  const array = [stats[0].base_stat, stats[1].base_stat, stats[2].base_stat];

  const getHighestElement = array.findIndex(
    (element) => element === Math.max(...array)
  );

  const totalArray = array.reduce((a, b) => a + b, 0);

  return (
    <div
      className={clsx(
        [
          "grid scale-90 cursor-pointer select-none grid-cols-2 rounded-md p-1 duration-150 ease-out hover:animate-pulse active:scale-75",
        ],
        [settings.style.background.card, settings.style.border.card],
        {
          [settings.style.color.green[0][1]]: getHighestElement === 0,
        },
        {
          [settings.style.color.red[0][1]]: getHighestElement === 1,
        },
        {
          [settings.style.color.blue[0][1]]: getHighestElement === 2,
        }
      )}
    >
      <Image
        src={sprites.front_default}
        width={"100%"}
        height={"100%"}
        alt={species.name}
        className="-scale-x-100"
        // onLoadingComplete={() => {}}
      />
      <div className="self-center">
        <Stat>
          {[
            array[0],
            settings.style.color.green[1],
            (stats[0].base_stat / totalArray) * 100,
          ]}
        </Stat>
        <div className="my-0.5">
          <Stat>
            {[
              array[1],
              settings.style.color.red[1],
              (stats[1].base_stat / totalArray) * 100,
            ]}
          </Stat>
        </div>
        <Stat>
          {[
            array[2],
            settings.style.color.blue[1],
            (stats[2].base_stat / totalArray) * 100,
          ]}
        </Stat>
      </div>
    </div>
  );
}
