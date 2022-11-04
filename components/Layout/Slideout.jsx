// https://css-tricks.com/the-slideout-footer/
import clsx from "clsx";

export default function ({ prop1, children }) {
  return (
    <div
      className={clsx(
        ["sticky -z-[1] flex flex-col"],
        { "top-0": prop1 === "top" },
        { "bottom-0": prop1 === "bottom" }
      )}
    >
      {children}
    </div>
  );
}
