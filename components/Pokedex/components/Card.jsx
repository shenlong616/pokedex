import ProgressBar from "./ProgressBar";
import clsx from "clsx";
import { settings } from "../../../pokedex.config";
import Image from "next/image";

export default function ({ prop1, response }) {
  const reduceArray = [
    response.stats[0].base_stat,
    response.stats[1].base_stat,
    response.stats[2].base_stat,
  ].reduce((a, b) => a + b, 0);

  return (
    <div
      className={clsx(
        [
          "flex scale-90 cursor-pointer select-none flex-row flex-nowrap items-center rounded-md py-0.5 duration-75 ease-in-out hover:animate-pulse active:scale-75",
        ],
        [settings.style.background.card, settings.style.border.card],
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
    >
      <div>
        <Image
          height="100%"
          width="100%"
          src={response.sprites.front_default}
          alt={response.name}
          className="-scale-x-100"
        />
      </div>
      <div className="w-28 flex-auto">
        <ProgressBar>
          {[
            response.stats[0].base_stat,
            settings.style.color.green[1],
            (response.stats[0].base_stat / reduceArray) * 100,
          ]}
        </ProgressBar>
        <div className="my-0.5">
          <ProgressBar>
            {[
              response.stats[1].base_stat,
              settings.style.color.red[1],
              (response.stats[1].base_stat / reduceArray) * 100,
            ]}
          </ProgressBar>
        </div>
        <ProgressBar>
          {[
            response.stats[2].base_stat,
            settings.style.color.blue[1],
            (response.stats[2].base_stat / reduceArray) * 100,
          ]}
        </ProgressBar>
      </div>
    </div>
  );
}
