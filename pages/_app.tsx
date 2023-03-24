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
          defer
          data-website-id="1ee88476-5feb-41d2-9165-307c722b9765"
          src="https://umami-production-7e38.up.railway.app/hawk.js"
        />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
