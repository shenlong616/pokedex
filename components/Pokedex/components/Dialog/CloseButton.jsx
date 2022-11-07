import { settings } from "../../../../pokedex.config";
import clsx from "clsx";

export default function ({ onClose }) {
  return (
    <div
      className={clsx("cursor-pointer text-xs", settings.style.text.color[1])}
      onClick={onClose}
    >
      Click here or outside to close the dialog box.
    </div>
  );
}
