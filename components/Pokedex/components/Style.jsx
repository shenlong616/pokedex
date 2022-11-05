import { settings } from "../../../pokedex.config";
import clsx from "clsx";

function UI() {
  return null;
}

UI.pokemonImage = function ({ children }) {
  return <div className="-scale-x-100 select-none">{children}</div>;
};

UI.pokemonName = function ({ children }) {
  return (
    <div
      className={clsx(
        "select-all text-xs font-medium",
        settings.style.text.color[0]
      )}
    >
      {children}
    </div>
  );
};

export default UI;
