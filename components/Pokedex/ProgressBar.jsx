// https://flowbite.com/docs/components/progress/
import clsx from "clsx";
import { settings } from "../../pokedex.config";

export default function ({ text, bgColor, width }) {
  return (
    <div className="flex flex-col items-start">
      <span
        className={clsx(
          "font-mono text-xs",
          settings.tailwindcss.text.color[1]
        )}
      >
        <small>{text}</small>
      </span>

      <div className="h-1 w-full rounded-full bg-transparent">
        <div
          className={clsx("h-1 rounded-full", bgColor)}
          style={{
            width: `${width}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
