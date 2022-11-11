import { settings } from "../pokedex.config";
import clsx from "clsx";

function UI() {
  return null;
}

UI.Image = function ({ children }) {
  return <div className="-scale-x-100 select-none">{children}</div>;
};

UI.Heading = function ({ children }) {
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

UI.Card = function ({ children, className, ...rest }) {
  return (
    <div
      className={clsx(
        "rounded-md border border-zinc-800 bg-zinc-900",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

UI.Dialog = function ({ children, className, ...rest }) {
  return (
    <fieldset
      className={clsx(
        "rounded-md border border-zinc-800 bg-zinc-900",
        className
      )}
      {...rest}
    >
      {children}
    </fieldset>
  );
};

export default UI;
