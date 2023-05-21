import ButtonPrint from "@/components/common/ButtonPrint";
import Inputdata from "@/components/common/Inputdata";
import Search from "@/components/common/Search";
import Select from "@/components/common/Select";
import Seo from "@/components/common/seo";
// import Breadcrumbs from "@/components/products/Breadcrumb ";
import Breadcrumbs from "@/components/common/BreadCrumb";
import Table from "@/components/products/Table";
import { productsNav } from "@/data/products";
import { useRouter } from "next/router";
import React from "react";
import { Crumbs } from "@/data/crumbs";
import Link from "next/link";

const data: Crumbs[] = [{ title: "users", to: "/dashboard/users", active: false },
{ title: "All Members", to: "/dashboard/users", active: true },
]

function index() {

  return (
    <div className="user">
      <Seo pageTitle="users" />
      {/* ------ seatch -------*/}
      <div className="m-5">
        <Breadcrumbs data={data} />
        <div className="d-flex justify-content-between gap-10 mt-2">
          <Search />
          <div>
            <Link href='/dashboard/users/addNewMember'>
              <button className="btn btn-add" style={{ background: "rgba(64, 170, 84, 1)", color: "rgba(44, 48, 102, 1)", padding: "16px", fontSize: "30px" }}>
                +
              </button>
            </Link>
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

        <ButtonPrint data="print" />
      </div>
    </div>
  );
}

export default index;
