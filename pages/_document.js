// https://nextjs.org/docs/advanced-features/custom-document
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="inset-0 bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
