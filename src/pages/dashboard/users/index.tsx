import ButtonPrint from "@/components/common/ButtonPrint";
import Inputdata from "@/components/common/Inputdata";
import Search from "@/components/common/Search";
import Select from "@/components/common/Select";
import Seo from "@/components/common/seo";
// import Breadcrumbs from "@/components/products/Breadcrumb ";
import Breadcrumbs from "@/components/common/BreadCrumb";

import { productsNav } from "@/data/products";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Crumbs } from "@/data/crumbs";
import Link from "next/link";
import { mainnav } from "@/features/analytics/analyticsSlice";
import { useDispatch } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import Table from "@/components/common/Table";
import { usercolumns, userresult } from "@/data/user";

const data: Crumbs[] = [
  { title: "users", to: "/dashboard/users", active: false },
  { title: "All Members", to: "/dashboard/users", active: true },
];

function index() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(mainnav("users"));
  }, []);
  return (
    <div className="user">
      <Seo pageTitle="users" />
      {/* ------ seatch -------*/}
      <div className="m-5">
        <Breadcrumbs data={data} />

        <div className="d-flex align-items-center justify-content-between;">
          <Search />
        </div>
        <div className="d-flex justify-content-end">
          <Link href="/dashboard/users/addNewMember">
            <span className="iconaddtoads">
              <IoMdAdd />
            </span>
          </Link>
        </div>
        <div className="stylerow row mt-5">
          <div className="col-12 col-md-6 col-lg-6">
            <h3 className="colorblue mb-5">All Members</h3>
          </div>

          <Table
            data={userresult}
            columsresult={usercolumns}
            selectvalue="role"
          />
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
