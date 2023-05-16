import Link from "next/link";
import React from "react";
import image1 from "../../../public/assets/image/fruit.png";
import Image from "next/image";
import Nav from "./Nav";
import Seo from "../common/seo.js";

// import {styles} from "../../public/assets/scss/component/"
function Slider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Seo pageTitle="top fruit" />
      <div className="d-flex">
        <div className="position-fixed styletosliderofdashboard vh-100 ">
          <Image src={image1} alt={""} style={{ marginBottom: "35px" }} />
          <Nav />
        </div>
        <main className="themainpartofdash w-100">{children}</main>
      </div>
    </>
  );
}

export default Slider;
