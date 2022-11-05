import ProgressBar from "./ProgressBar";
import clsx from "clsx";
import { settings } from "../../../pokedex.config";
import Image from "next/image";
import UI from "./UI";

export default function ({ prop1, data, onClick }) {
  const reduceArray = [
    data.stats[0].base_stat,
    data.stats[1].base_stat,
    data.stats[2].base_stat,
  ].reduce((a, b) => a + b, 0);

  return (
    <div
      className={clsx(
        "flex scale-90 cursor-pointer flex-row items-center gap-1 rounded-md py-2 duration-75 ease-in-out hover:animate-pulse active:translate-y-1",
        settings.style.background.card,
        settings.style.border.card,
        {
          [settings.style.color.green[0][1]]: prop1 === 0,
        },
        {
          [settings.style.color.red[0][1]]: prop1 === 1,
        },
        {
          [settings.style.color.blue[0][1]]: prop1 === 2,
        }
      )}
      onClick={onClick}
    >
      <UI.pokemonImage>
        <Image
          height="100%"
          width="100%"
          src={data.sprites.front_default}
          alt={data.name}
        />
      </UI.pokemonImage>
      <div className="flex w-28 flex-col gap-y-1">
        <ProgressBar>
          {[
            data.stats[0].base_stat,
            settings.style.color.green[1],
            (data.stats[0].base_stat / reduceArray) * 100,
          ]}
        </ProgressBar>
        <ProgressBar>
          {[
            data.stats[1].base_stat,
            settings.style.color.red[1],
            (data.stats[1].base_stat / reduceArray) * 100,
          ]}
        </ProgressBar>
        <ProgressBar>
          {[
            data.stats[2].base_stat,
            settings.style.color.blue[1],
            (data.stats[2].base_stat / reduceArray) * 100,
          ]}
        </ProgressBar>
      </div>
    </div>
  );
}
