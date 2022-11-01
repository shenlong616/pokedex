import Slideout from "./Slideout";
import clsx from "clsx";
import { settings } from "../../pokedex.config";

export default function ({ children }) {
  return (
    <Slideout prop1="top">
      <h1
        className={clsx(
          ["py-2 text-center text-2xl font-medium"],
          [settings.style.background.header]
        )}
      >
        {children}
      </h1>
    </Slideout>
  );
}
