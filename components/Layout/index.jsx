import Header from "./Header";
import Footer from "./Footer";
import NoiseTexture from "./NoiseTexture";
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
          <small
            className={clsx(
              ["font-mono text-xs font-normal"],
              [settings.style.text.color[1]]
            )}
          >
            v{settings.version}
          </small>
        </Header>
        <div className={`${settings.style.background.body} py-4`}>
          <div className="container mx-auto h-full">{children}</div>
        </div>
        <Footer>
          <small className={settings.style.text.color[1]}>
            {settings.footer}
          </small>
        </Footer>
      </main>
    </>
  );
}
