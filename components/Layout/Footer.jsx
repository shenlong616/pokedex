import Slideout from "./Slideout";
import clsx from "clsx";
import { settings } from "../../pokedex.config";

export default function ({ children }) {
  return (
    <Slideout position="bottom">
      <footer
        className={clsx(
          "flex flex-col py-1 font-mono font-medium",
          settings.tailwindcss.background.color.footer
        )}
      >
        {children}
      </footer>
    </Slideout>
  );
}
