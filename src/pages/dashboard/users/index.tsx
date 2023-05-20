import ButtonPrint from "@/components/common/ButtonPrint";
import Inputdata from "@/components/common/Inputdata";
import Search from "@/components/common/Search";
import Select from "@/components/common/Select";
import Seo from "@/components/common/seo";
import Breadcrumbs from "@/components/products/Breadcrumb ";
import Table from "@/components/products/Table";
import { productsNav } from "@/data/products";
import { useRouter } from "next/router";
import React from "react";

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
    <div className="user">
      <Seo pageTitle="users" />

      {/* ------ Bread Crumb -------*/}
      <Breadcrumbs data={data} />
      {/* ------ seatch -------*/}
      <div className="m-5">
        <div className="d-flex justify-content-between gap-10">
          <Search />
          <div>
            <button className="btn btn-add" style={{ background: "rgba(64, 170, 84, 1)", color: "rgba(44, 48, 102, 1)", padding: "16px", fontSize: "30px" }}>
              +
            </button>
          </div>
        </div>
        <div className="stylerow row">
          <div className="col-12 col-md-6 col-lg-6">
            <h3 className="colorblue mb-5">All Products</h3>
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
        <div className="spancolor p-2">
          Showing {productsNav.length} of {productsNav.length} Results
        </div>

        <ButtonPrint data="print"/>
      </div>
    </div>
  );
}

export default index;
