import ProgressBar from "./ProgressBar";
import clsx from "clsx";
import { settings } from "../../pokedex.config";
import Image from "next/legacy/image";

export default function ({ prop1, data, onClick }) {
  const reduceArray = [
    data.stats[0].base_stat,
    data.stats[1].base_stat,
    data.stats[2].base_stat,
  ].reduce((a, b) => a + b, 0);

  return (
    <div
      className={clsx(
        "flex scale-90 cursor-pointer flex-row items-center gap-x-2 py-2 duration-75 ease-in-out active:translate-y-1",
        settings.tailwindcss.card,
        {
          [settings.tailwindcss.groupColor.green[1]]: prop1 === 0,
        },
        {
          [settings.tailwindcss.groupColor.red[1]]: prop1 === 1,
        },
        {
          [settings.tailwindcss.groupColor.blue[1]]: prop1 === 2,
        }
      )}
      onClick={onClick}
    >
      <Image
        height="100%"
        width="100%"
        src={data.sprites.front_default}
        alt={data.name}
        className={settings.tailwindcss.image}
      />

      <div className="flex w-28 flex-col gap-y-1">
        <ProgressBar
          text={data.stats[0].base_stat}
          bgColor={settings.tailwindcss.groupColor.green[0]}
          width={(data.stats[0].base_stat / reduceArray) * 100}
        />

        <ProgressBar
          text={data.stats[1].base_stat}
          bgColor={settings.tailwindcss.groupColor.red[0]}
          width={(data.stats[1].base_stat / reduceArray) * 100}
        />

        <ProgressBar
          text={data.stats[2].base_stat}
          bgColor={settings.tailwindcss.groupColor.blue[0]}
          width={(data.stats[2].base_stat / reduceArray) * 100}
        />
      </div>
    </div>
  );
}
