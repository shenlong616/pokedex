// https://nextjs.org/docs/advanced-features/custom-document
import { Html, Head, Main, NextScript } from "next/document";
import { settings } from "../pokedex.config.js";

export default function () {
  return (
    <Html>
      <Head />
      <body className={settings.styles.background.body}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
