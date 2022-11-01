import Slideout from "./Slideout";
import Alert from "../Alert";

export default function ({ children }) {
  return (
    <Slideout prop1="top">
      <h1 className="py-2 text-center text-2xl font-medium">{children}</h1>
      <Alert>alert</Alert>
    </Slideout>
  );
}
