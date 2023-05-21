import Breadcrumbs from "@/components/analytics/Breadcrumb ";
import Cards from "@/components/analytics/Cards";
import ButtonPrint from "@/components/common/ButtonPrint";
import Search from "@/components/common/Search";
import Table from "@/components/common/Table";
// import Table from "@/components/common/Table";
import Seo from "@/components/common/seo";
import { columsAnalysics, revenuedata } from "@/data/columnsAnaly";
import { breadcrumdsname, mainnav } from "@/features/analytics/analyticsSlice";
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
    dispatch(mainnav("analytics"));
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
        {/* <Table data={}/> */}
        <div className="stylerow mt-5 row">
          <div className="col-12 col-md-6 col-lg-6">
            <h3 className="colorblue mb-5">revenue</h3>
          </div>
          <Table
            columsresult={columsAnalysics}
            data={revenuedata}
            selectvalue="returns"
          />
        </div>
        <div className="spancolor p-2">
          Showing {revenuedata.length} of {revenuedata.length} Results
        </div>
        <ButtonPrint data="Print" />
      </div>
    </>
  );
}

export default revenue;
