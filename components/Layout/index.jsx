import Header from "./Header";
import Footer from "./Footer";
import NoiseTexture from "./NoiseTexture";
import { settings } from "../../pokedex.config.js";

export default function ({ children }) {
  return (
    <>
      <NoiseTexture />
      <main className="inset-0 text-slate-100 antialiased">
        <Header>
          {settings.title}
          <small className="pl-1 font-mono text-xs font-normal text-slate-400">
            v{settings.version}
          </small>
        </Header>
        <div className={`${settings.style.background.body} py-4`}>
          <div className="container mx-auto h-full">{children}</div>
        </div>
        <Footer>
          <small className="text-slate-400">{settings.footer}</small>
        </Footer>
      </main>
    </>
  );
}
