import { useRouter } from "next/router";
import React from "react";
import { Breadcrumb } from "react-bootstrap";
interface breadcrumbsprops {
  data: string;
}
function Breadcrumbs({ data }: breadcrumbsprops) {
  let router = useRouter();
  function onclickofproduct(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    let href = e.target as HTMLAnchorElement;
    router.push(href);
    console.log(href);
  }
  return (
    <Breadcrumb>
      <Breadcrumb.Item
        onClick={(e) => onclickofproduct(e)}
        id="/dashboard/products"
      >
        products
      </Breadcrumb.Item>
      {data === "" ? (
        <Breadcrumb.Item
          id="/dashboard/products"
          onClick={(e) => onclickofproduct(e)}
        >
          All products
        </Breadcrumb.Item>
      ) : (
        <Breadcrumb.Item
          id={`/dashboard/products/${data}`}
          className="active"
          onClick={(e) => onclickofproduct(e)}
        >
          {data.replace("/", "")}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
export default Breadcrumbs;
