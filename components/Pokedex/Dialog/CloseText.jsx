import { useState } from "react";
import { settings } from "../../../pokedex.config";

export default function ({ ...rest }) {
  const [state, setState] = useState(settings.text.CloseText[0]);

  return (
    <div
      className="flex cursor-pointer flex-col text-xs"
      onMouseEnter={() => setState(settings.text.CloseText[1])}
      onMouseLeave={() => setState(settings.text.CloseText[0])}
      {...rest}
    >
      {state}
    </div>
  );
}
