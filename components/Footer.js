import Slideout from "./Slideout";

export default function Footer({ children }) {
  return (
    <Slideout prop1="bottom">
      <footer className="bg-black text-center font-mono font-medium">
        {children}
      </footer>
    </Slideout>
  );
}
