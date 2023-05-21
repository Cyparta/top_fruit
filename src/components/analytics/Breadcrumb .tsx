import Link from "next/link";
// import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Breadcrumb } from "react-bootstrap";
interface breadcrumbsprops {
  data: string;
}
function Breadcrumbs({ data }: breadcrumbsprops) {
  // let router = useRouter();
  //   let dispatch=useDispatch()
  //   useEffect(()=>{
  // dispatch()
  //   })

  return (
    <ul className="breadcrumbs">
      <Link href="/dashboard/analytics" className="">
        analytics
      </Link>
      {data === "" ? (
        <Link href="/dashboard/analytics">/products</Link>
      ) : (
        <Link href={`/dashboard/analytics/${data}`}>/{data}</Link>
      )}
    </ul>
  );
}
export default Breadcrumbs;
