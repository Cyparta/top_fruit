import ButtonPrint from "@/components/ButtonPrint";
import Select from "@/components/Select";
import Table from "@/components/Table";
import Seo from "@/components/common/seo";
import Search from "@/components/overview/Search";
import Breadcrumbs from "@/components/products/Breadcrumb ";
import { productsNav } from "@/data/products";
import { useRouter } from "next/router";
import React from "react";
// import { Breadcrumb } from ";

function index() {
  let router = useRouter();
  let url = router.route.slice(10).replace("/products", "");
  let data = "";
  if (!url) {
    data = "";
  } else {
    data = url;
    // console.log(url);
  }
  return (
    <>
      <Seo pageTitle="Products" />
      <div className="m-5">
        <Breadcrumbs data={data} />
        <Search />
        <div className="stylerow row">
          <div className="col-12 col-md-6 col-lg-6">
            <h3>All Products</h3>
          </div>
          <div className="col-12 col-md-6 col-lg-6 row">
            <div className="col-12 col-md-6 col-lg-6">
              <Search />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <Select />
            </div>
          </div>
          <Table data={productsNav} />
        </div>
        <p className="spancolor p-2">
          Showing {productsNav.length} of {productsNav.length} Results
        </p>
        <ButtonPrint />
      </div>
    </>
  );
}

export default index;
