// https://css-tricks.com/the-slideout-footer/
import clsx from "clsx";

export default function ({ position, children }) {
  return (
    <div
      className={clsx(
        "sticky -z-[1] flex flex-col",
        { "top-0": position === "top" },
        { "bottom-0": position === "bottom" }
      )}
    >
      {children}
    </div>
  );
}
