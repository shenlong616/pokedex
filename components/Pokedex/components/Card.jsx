import ProgressBar from "./ProgressBar";
import clsx from "clsx";
import { settings } from "../../../pokedex.config";
import Image from "next/image";
import Imagee from "./ui/Imagee";

export default function ({ prop1, data }) {
  const reduceArray = [
    data.stats[0].base_stat,
    data.stats[1].base_stat,
    data.stats[2].base_stat,
  ].reduce((a, b) => a + b, 0);

  return (
    <div
      className={clsx(
        [
          "flex scale-90 cursor-pointer flex-row flex-nowrap items-center rounded-md py-0.5 duration-75 ease-in-out hover:animate-pulse active:scale-75",
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
      <Imagee>
        <Image
          height="100%"
          width="100%"
          src={data.sprites.front_default}
          alt={data.name}
        />
      </Imagee>
      <div className="w-28 flex-auto">
        <ProgressBar>
          {[
            data.stats[0].base_stat,
            settings.style.color.green[1],
            (data.stats[0].base_stat / reduceArray) * 100,
          ]}
        </ProgressBar>
        <div className="my-0.5">
          <ProgressBar>
            {[
              data.stats[1].base_stat,
              settings.style.color.red[1],
              (data.stats[1].base_stat / reduceArray) * 100,
            ]}
          </ProgressBar>
        </div>
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
