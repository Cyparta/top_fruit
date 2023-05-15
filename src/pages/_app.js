import { useEffect } from "react";
import "../app/globals.css";
import Slider from "@/components/Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.json";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import "../index.scss";
import Seo from "@/components/common/seo";
// import "href='' rel='stylesheet'";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Seo
        pageTitle="top fruit"
      />
      <Slider>
        <Component {...pageProps} />
      </Slider>{" "}
    </>
  );
}

export default MyApp;
