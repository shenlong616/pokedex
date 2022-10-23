import Slideout from "./Slideout";

export default function Header({ children }) {
  return (
    <Slideout prop1="top">
      <h1 className="py-2 text-center text-2xl font-medium">{children}</h1>
    </Slideout>
  );
}
