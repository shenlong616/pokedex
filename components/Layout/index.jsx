import Header from "./Header";
import Footer from "./Footer";
import NoiseTexture from "../NoiseTexture";
import { settings } from "../../pokedex.config.js";
import clsx from "clsx";

export default function ({ children }) {
  return (
    <>
      <NoiseTexture />
      <main
        className={clsx(
          ["inset-0 antialiased"],
          [settings.style.text.color[0]]
        )}
      >
        <Header>
          {settings.title}{" "}
          <span
            className={clsx(
              ["font-mono text-xs font-normal"],
              [settings.style.text.color[1]]
            )}
          >
            v{settings.version}
          </span>
        </Header>
        <div className={clsx(["py-4"], [settings.style.background.document])}>
          <div className="container mx-auto h-full">{children}</div>
        </div>
        <Footer>
          <span className={clsx(["text-xs"], [settings.style.text.color[1]])}>
            {settings.footer}
          </span>
        </Footer>
      </main>
    </>
  );
}
