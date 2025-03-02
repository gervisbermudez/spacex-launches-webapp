import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>SpaceX Launches</title>
      <body className={`bg-app-bg text-app-white`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
