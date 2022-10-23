import Header from "./Header";
import Footer from "./Footer";
import Noise from "./Noise";
import { settings } from "../pokedex.config.js";

export default function Layout({ children }) {
  return (
    <>
      <Noise />
      <main className="text-slate-100 antialiased">
        <Header>
          {settings.title}
          <small className="pl-1 font-mono text-xs font-normal text-slate-400">
            v{settings.version}
          </small>
        </Header>
        <div className="bg-zinc-900 py-4">
          <div className="container mx-auto h-full">{children}</div>
        </div>
        <Footer>
          <small className="text-slate-400">footer</small>
        </Footer>
      </main>
    </>
  );
}
