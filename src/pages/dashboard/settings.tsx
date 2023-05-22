import Search from "@/components/common/Search";
import Seo from "@/components/common/seo";
// import Breadcrumbs from '@/components/products/Breadcrumb ';
import Breadcrumbs from "@/components/analytics/Breadcrumb ";
import Tabs from "@/components/settings/tabs";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
function settings() {
  return (
    <>
      <div className="settings">
        <Seo pageTitle="Products" />
        <div className="m-5">
          {/* ------ Bread Crumb -------*/}
          {/* <Breadcrumbs data={data} /> */}
          {/* <Breadcrumbs data={data}/> */}
          <Link
            href="/dashboard/settings"
            style={{
              fontSize: "12px !important",
              textDecoration: "none",
              margin: "20px 0px",
              display: "inline-block",
              fontWeight: "400",
              color: "#121212",
            }}
          >
            Settings
          </Link>
          {/*------- Search ------*/}
          <Search />
          {/*------- main Section ------*/}
          <div>
            <h3 className="colorblue mt-4">Settings</h3>
            <div className="line mb-4"></div>
            <Tabs />
          </div>
        </div>
      </div>
    </>
  );
}

export default settings;
