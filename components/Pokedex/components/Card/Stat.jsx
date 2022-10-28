import clsx from "clsx";
import { settings } from "../../../../pokedex.config.js";

export default function ({ children }) {
  return (
    <>
      <div
        className={clsx(
          ["text-left font-mono text-xs"],
          [settings.style.text.color[1]]
        )}
      >
        <span className="text-xs">{children[0]}</span>
      </div>
      <div className="h-1 w-full rounded-full bg-transparent">
        <div
          className={`${children[1]} h-1 rounded-full`}
          style={{
            width: `${children[2]}%`,
          }}
        ></div>
      </div>
    </>
  );
}
