import ButtonPrint from "@/components/ButtonPrint";
import Select from "@/components/Select";
import Table from "@/components/Table";
import Seo from "@/components/common/seo";
import Search from "@/components/overview/Search";
import Breadcrumbs from "@/components/products/Breadcrumb ";
import { productsNav } from "@/data/products";
import { useRouter } from "next/router";
import React from "react";

function addproduct() {
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
      <Seo pageTitle="add product" />
      <div className="m-5">
        <Breadcrumbs data={data} />
        <Search />
        <div className="stylerow row">
          <div className="col-12 col-md-8 col-lg-8">
            <h3>All Products</h3>
          </div>
          <div className="col-12 col-md-4 col-lg-4 row">
            <div className="col-12 col-md-6 col-lg-6">
              <Search />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <Select />
            </div>
          </div>
          <Table data={productsNav} />
        </div>
      </div>
      <Breadcrumbs data={data} />
    </>
  );
}

export default addproduct;
