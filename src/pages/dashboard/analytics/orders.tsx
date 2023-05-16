import Breadcrumbs from "@/components/analytics/Breadcrumb ";
import Seo from "@/components/common/seo";
import { useRouter } from "next/router";
import React from "react";

function orders() {
  let router = useRouter();
  let url = router.route.slice(10).replace("/analytics", "");
  let data = "";
  if (!url) {
    data = "";
  } else {
    data = url;
  }
  return (
    <>
      <Seo pageTitle="analytics" />
      <div className="m-5">
        <Breadcrumbs data={data} />
      </div>
    </>
  );
}

export default orders;
