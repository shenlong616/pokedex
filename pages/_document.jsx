// https://nextjs.org/docs/advanced-features/custom-document
import { Html, Head, Main, NextScript } from "next/document";

export default function () {
  return (
    <Html>
      <Head />
      <body className="bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
