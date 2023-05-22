import Breadcrumbs from "@/components/analytics/Breadcrumb ";
import ButtonPrint from "@/components/common/ButtonPrint";
import Inputdata from "@/components/common/Inputdata";
import Search from "@/components/common/Search";
import Seo from "@/components/common/seo";
import AddImage from "@/components/products/AddImage";
// import Breadcrumbs from "@/components/products/Breadcrumb ";
import { useRouter } from "next/router";
import React from "react";

function Categories() {
  let router = useRouter();
  let url = router.route.slice(10).replace("/products", "");
  let data = "";
  if (!url) {
    data = "addproducts";
  } else {
    url = url.replace("/", "");
    data = url;
  }
  return (
    <>
      <Seo pageTitle="categories" />
      <div className="m-5">
        <Breadcrumbs data={data} mainnav="products" />

        <Search />
        <div className="styletoaddphoto d-flex  align-items-center justify-content-evenly my-5">
          <AddImage />
          <div className="w-50 m-5">
            <Inputdata
              name="categorynumber"
              desc="Please Enter Category number"
              title="Category Number"
            />
            <Inputdata
              name="categoryname"
              desc="Please Enter category name"
              title="Category name"
            />
          </div>
        </div>
        <ButtonPrint data="Add" />
      </div>
    </>
  );
}

export default Categories;
