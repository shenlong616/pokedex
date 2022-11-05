import Slideout from "./Slideout";
import clsx from "clsx";
import { settings } from "../../pokedex.config";

export default function ({ children }) {
  return (
    <Slideout position="top">
      <div
        className={clsx(
          "flex flex-row items-baseline gap-x-1 py-3 text-2xl font-medium",
          settings.style.background.header
        )}
      >
        {children}
      </div>
    </Slideout>
  );
}
