import Image from "next/image";
import Stat from "./Stat";
import clsx from "clsx";
import Tilt from "react-parallax-tilt";
import { settings } from "../../../../pokedex.config";

export default function ({ response }) {
  const { stats, sprites, species } = response;

  const array = [stats[0].base_stat, stats[1].base_stat, stats[2].base_stat];

  const getHighestElement = array.findIndex(
    (element) => element === Math.max(...array)
  );

  const totalArray = array.reduce((a, b) => a + b, 0);

  return (
    <Tilt
      tiltMaxAngleX={settings.tilt.tiltMaxAngleX}
      tiltMaxAngleY={settings.tilt.tiltMaxAngleY}
    >
      <div
        className={clsx(
          [
            "grid scale-100 cursor-pointer select-none grid-cols-2 rounded-md border p-1 transition-all duration-150 ease-out hover:animate-pulse active:scale-90",
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
              settings.style.color.green[2],
              (stats[0].base_stat / totalArray) * 100,
            ]}
          </Stat>
          <div className="my-0.5">
            <Stat>
              {[
                array[1],
                settings.style.color.red[2],
                (stats[1].base_stat / totalArray) * 100,
              ]}
            </Stat>
          </div>
          <Stat>
            {[
              array[2],
              settings.style.color.blue[2],
              (stats[2].base_stat / totalArray) * 100,
            ]}
          </Stat>
        </div>
      </div>
    </Tilt>
  );
}
