import clsx from "clsx";
import { settings } from "../../../pokedex.config.js";

export default function ({ children }) {
  return (
    <>
      <div
        className={clsx(
          ["text-left font-mono text-xs"],
          [settings.style.text.color[1]]
        )}
      >
        <span className="select-all text-xs">
          <small>{children[0]}</small>
        </span>
      </div>
      <div className="h-1 w-full rounded-full bg-transparent">
        <div
          className={clsx(["h-1 rounded-full"], [children[1]])}
          style={{
            width: `${children[2]}%`,
          }}
        ></div>
      </div>
    </>
  );
}
