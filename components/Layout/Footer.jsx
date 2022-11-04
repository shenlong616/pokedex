import Slideout from "./Slideout";
import clsx from "clsx";
import { settings } from "../../pokedex.config";

export default function ({ children }) {
  return (
    <Slideout prop1="bottom">
      <footer
        className={clsx(
          ["flex flex-row items-baseline justify-center font-mono font-medium"],
          [settings.style.background.footer]
        )}
      >
        {children}
      </footer>
    </Slideout>
  );
}
