import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

// Font files can be colocated inside of `assets`

const dDinFont = localFont({
  src: [
    {
      path: "../assets/fonts/d-din/D-DIN.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/d-din/D-DIN-Bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={dDinFont.className}>
      <Component {...pageProps} />
    </div>
  );
}
