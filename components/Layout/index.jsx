import Header from "./Header";
import Footer from "./Footer";
import NoiseTexture from "../NoiseTexture";
import { settings } from "../../pokedex.config";
import clsx from "clsx";

export default function ({ children }) {
  return (
    <>
      <NoiseTexture />
      <main
        className={clsx(
          "inset-0 flex flex-col items-center gap-y-5 antialiased",
          settings.style.text.color[0]
        )}
      >
        <Header>
          <h1>{settings.title}</h1>
          <span
            className={clsx(
              "font-mono text-xs font-normal",
              settings.style.text.color[1]
            )}
          >
            v{settings.version}
          </span>
        </Header>
        <div className={clsx("container", settings.style.background.document)}>
          {children}
        </div>
        <Footer>
          <span className="text-xs">{settings.footer}</span>
        </Footer>
      </main>
    </>
  );
}
