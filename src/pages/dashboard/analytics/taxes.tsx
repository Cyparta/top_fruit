import Breadcrumbs from "@/components/analytics/Breadcrumb ";
import Cards from "@/components/analytics/Cards";
import Search from "@/components/common/Search";
import Table from "@/components/common/Table";
import Seo from "@/components/common/seo";
import { taxAnalysics, taxdata } from "@/data/columnsAnaly";
import { breadcrumdsname, mainnav } from "@/features/analytics/analyticsSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

function taxes() {
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
        <div className="stylerow mt-5 row">
          <div className="col-12 col-md-6 col-lg-6">
            <h3 className="colorblue mb-5">revenue</h3>
          </div>
          <Table
            columsresult={taxAnalysics}
            data={taxdata}
            selectvalue="client_type"
          />
        </div>
        <div className="spancolor p-2">
          Showing {taxdata.length} of {taxdata.length} Results
        </div>
      </div>
    </>
  );
}

export default taxes;
