import { settings } from "../../../pokedex.config";
import clsx from "clsx";

function UI() {
  return null;
}

UI.pokemonImage = ({ children }) => (
  <div className="-scale-x-100 select-none">{children}</div>
);

UI.pokemonName = ({ children }) => (
  <div
    className={clsx(
      ["select-all text-xs font-medium"],
      [settings.style.text.color[0]]
    )}
  >
    {children}
  </div>
);

export default UI;
