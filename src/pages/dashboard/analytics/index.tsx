import Breadcrumbs from "@/components/common/Breadcrumb";
import Cards from "@/components/analytics/Cards";
import Search from "@/components/common/Search";
import Select from "@/components/common/Select";
import Table from "@/components/common/Table";
import Seo from "@/components/common/seo";
import { columsProductsinanalys } from "@/data/columsProduct";
// import Table from "@/components/products/Table";
import { productsNav } from "@/data/products";
import { breadcrumdsname, mainnav } from "@/features/analytics/analyticsSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

function index() {
  let router = useRouter();
  let dispatch = useDispatch();
  let url = router.route.slice(10).replace("/analytics", "");
  let data = "";
  if (!url) {
    dispatch(breadcrumdsname("analytics"));
    dispatch(mainnav("analytics"));

    data = "";
  } else {
    dispatch(breadcrumdsname(url));
    data = url;
  }
  return (
    <>
      <Seo pageTitle="analytics" />
      <div className="m-5">
        <Breadcrumbs data={data} mainnav={"analytics"} />
        <Search />
        <Cards />
        <div className="stylerow mt-5 row">
          <div className="col-12 col-md-6 col-lg-6">
            <h3 className="colorblue mb-5">All Products</h3>
          </div>

          <Table
            columsresult={columsProductsinanalys}
            data={productsNav}
            selectvalue="category"
          />
        </div>
        <div className="spancolor p-2">
          Showing {productsNav.length} of {productsNav.length} Results
        </div>
      </div>
    </>
  );
}

export default index;
