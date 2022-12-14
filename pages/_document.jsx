// https://nextjs.org/docs/advanced-features/custom-document
import { Html, Head, Main, NextScript } from "next/document";
import { settings } from "../pokedex.config";

export default function () {
  return (
    <Html lang="en">
      <Head />
      <body className={settings.tailwindcss.background.color.document}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
