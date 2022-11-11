import { useState } from "react";
import { settings } from "../../../pokedex.config";
import clsx from "clsx";

export default function ({ ...rest }) {
  const [state, setState] = useState(settings.text.CloseButtonText[0]);

  return (
    <div
      className={clsx(
        "flex cursor-pointer flex-col text-xs",
        settings.tailwindcss.text.color[1]
      )}
      onMouseEnter={() => setState(settings.text.CloseButtonText[1])}
      onMouseLeave={() => setState(settings.text.CloseButtonText[0])}
      {...rest}
    >
      {state}
    </div>
  );
}
