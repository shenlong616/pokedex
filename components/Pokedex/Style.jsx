import { settings } from "../../pokedex.config";
import clsx from "clsx";

function Style() {
  return null;
}

Style.pokemonImage = function ({ children }) {
  return <div className="-scale-x-100 select-none">{children}</div>;
};

Style.pokemonName = function ({ children }) {
  return (
    <div
      className={clsx(
        "select-all text-xs font-medium",
        settings.tailwindcss.text.color[0]
      )}
    >
      {children}
    </div>
  );
};

export default Style;
