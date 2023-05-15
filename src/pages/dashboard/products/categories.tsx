import Breadcrumbs from "@/components/products/Breadcrumb ";
import { useRouter } from "next/router";
import React from "react";

function categories() {
  let router = useRouter();
  let url = router.route.slice(10).replace("/products", "");
  let data = "";
  if (!url) {
    data = "addproducts";
  } else {
    url = url.replace("/", "");
    data = url;
  }
  return <Breadcrumbs data={data} />;
}

export default categories;
