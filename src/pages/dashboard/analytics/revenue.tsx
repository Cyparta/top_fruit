import Breadcrumbs from "@/components/analytics/Breadcrumb ";
import Cards from "@/components/analytics/Cards";
import ButtonPrint from "@/components/common/ButtonPrint";
import Search from "@/components/common/Search";
// import Table from "@/components/common/Table";
import Seo from "@/components/common/seo";
import { breadcrumdsname } from "@/features/analytics/analyticsSlice";
import { useRouter } from "next/router";
import React from "react";
// import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";

function revenue() {
  let router = useRouter();
  let dispatch = useDispatch();
  let url = router.route.slice(10).replace("/analytics", "");
  let data = "";
  if (!url) {
    dispatch(breadcrumdsname("analytics"));
    data = "";
  } else {
    url = url.replace("/", "");
    dispatch(breadcrumdsname(url));
    data = url;
  }
  return (
    <>
      <Seo pageTitle="analytics" />
      <div className="m-5">
        <Breadcrumbs data={data} />
        <Search />
        <Cards />
        <ButtonPrint data="Print"/>
        {/* <Table/> */}
      </div>
    </>
  );
}

export default revenue;
