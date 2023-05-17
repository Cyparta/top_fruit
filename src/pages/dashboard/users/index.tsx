import Search from "@/components/common/Search";
import Seo from "@/components/common/seo";
import Breadcrumbs from "@/components/products/Breadcrumb ";
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
      <div className="m-3">
        <div className="d-flex">
          <Search />
          <button className="btn btn-add">
            +
          </button>
        </div>
        <div>
          test
        </div>
      </div>
    </div>
  );
}

export default index;
