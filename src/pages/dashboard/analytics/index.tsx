import Breadcrumbs from "@/components/analytics/Breadcrumb ";
import Cards from "@/components/analytics/Cards";
import Search from "@/components/common/Search";
import Seo from "@/components/common/seo";
import { useRouter } from "next/router";
import React from "react";

function index() {
  let router = useRouter();
  let url = router.route.slice(10).replace("/analytics", "");
  let data = "";
  if (!url) {
    data = "";
  } else {
    data = url;
  }
  return (
    <>
      <Seo pageTitle="analytics" />
      <div className="m-5">
        <Breadcrumbs data={data} />
        <Search />
        <Cards />
      </div>
    </>
  );
}

export default index;
