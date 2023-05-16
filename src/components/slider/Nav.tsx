import Link from "next/link";
import React, { useRef } from "react";
import { BiTimeFive } from "react-icons/bi";
import Appearpart from "./Appearpart";
import {
  MarketingNav,
  analyticsNav,
  productsNav,
  usersNav,
} from "@/data/productsnav";
import { AiOutlineSetting } from "react-icons/ai";
function Nav() {
  let [click, setclick] = React.useState(false);

  function onclickofproduct(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    let element = (e.target as HTMLAnchorElement).parentElement;
    if (element?.getAttribute("id") === "overview") {
      document
        .getElementById("overviewicon")
        ?.classList.toggle("iconstylebackgroundgreen");
      document
        .getElementById("settingsicon")
        ?.classList.remove("iconstylebackgroundgreen");
    } else {
      document
        .getElementById("settingsicon")
        ?.classList.toggle("iconstylebackgroundgreen");
      document
        .getElementById("overviewicon")
        ?.classList.remove("iconstylebackgroundgreen");
    }
  }
  return (
    <nav>
      <ul>
        <li>
          <Link
            href="/"
            className="d-flex align-items-center mb-3"
            onClick={(e) => onclickofproduct(e)}
            id="overview"
          >
            <BiTimeFive
              className={
                click
                  ? "iconstyle iconstylebackgroundgreen mr-3"
                  : "iconstyle mr-3"
              }
              id="overviewicon"
            />
            <div className="m-0">Overview</div>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/products">
            <Appearpart data={productsNav} name="Products" />
          </Link>
        </li>
        <li>
          <Link href="/dashboard/analytics">
            <Appearpart data={analyticsNav} name="Analytics" />
          </Link>
        </li>
        <li>
          <Link href="/dashboard/marketing">
            <Appearpart data={MarketingNav} name="Marketing" />
          </Link>
        </li>
        <li>
          <Link href="/dashboard/users">
            <Appearpart data={usersNav} name="Users" />
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings"
            className="d-flex align-items-center mb-3"
            onClick={(e) => onclickofproduct(e)}
            id="settings"
          >
            <AiOutlineSetting
              className={
                click
                  ? "iconstyle iconstylebackgroundgreen mr-3"
                  : "iconstyle mr-3"
              }
              id="settingsicon"
            />
            <div className="m-0">Settings</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
