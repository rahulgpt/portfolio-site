import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="lg:w-[53rem] md:px-10 px-4">
        <Nav />
        <Script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="2da8b4e0-b7bd-4069-a792-2aed114a4c2a"
        />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
