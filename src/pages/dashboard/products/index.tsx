import ButtonPrint from "@/components/common/ButtonPrint";
import Select from "@/components/common/Select";
// import Table from "@/components/products/Table";
import Seo from "@/components/common/seo";
import Search from "@/components/common/Search";
import Breadcrumbs from "@/components/products/Breadcrumb ";
import { productsNav } from "@/data/products";
import { useRouter } from "next/router";
import React from "react";
import Table from "@/components/common/Table";
import {  columsProducts } from "@/data/columsProduct";
// import {Tab as Table} from "@/components/common/Table";
// import { Breadcrumb } from ";

function index() {
  let router = useRouter();
  let url = router.route.slice(10).replace("/products", "");
  let data = "";
  if (!url) {
    data = "";
  } else {
    data = url;
  }
  return (
    <>
      <Seo pageTitle="Products" />
      <div className="m-5">
        <Breadcrumbs data={data} />
        <Search />
        <div className="stylerow row">
          <div className="col-12 col-md-6 col-lg-6">
            <h3 className="colorblue mb-5">All Products</h3>
          </div>

          {/* <Table data={productsNav} /> */}
          <Table columsresult={columsProducts} data={productsNav} />
        </div>
        <div className="spancolor p-2">
          Showing {productsNav.length} of {productsNav.length} Results
        </div>
        <ButtonPrint data="Print" />
      </div>
    </>
  );
}

export default index;
