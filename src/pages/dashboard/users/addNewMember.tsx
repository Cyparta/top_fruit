import ButtonPrint from "@/components/common/ButtonPrint";
import Search from "@/components/common/Search";
import Seo from "@/components/common/seo";

import InputControl from "@/components/common/inputControl";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Crumbs } from "@/data/crumbs";

import { useDispatch } from "react-redux";
import { mainnav } from "@/features/analytics/analyticsSlice";
import Breadcrumbs from "@/components/common/Breadcrumb";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";
import Breadcrumbsthrid from "@/components/common/Breadcrumbthird";

const data: Crumbs[] = [
  { title: "users", to: "/dashboard/users", active: false },
  { title: "All Members", to: "/dashboard/users", active: false },
  { title: "add Member", to: "/dashboard/users/addNewMember", active: true },
];

const AddNewMember = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(mainnav("users"));
  }, []);
  let router = useRouter();
  let url = router.route.slice(10).replace("/users", "");
  let dataurl = "";
  if (!url) {
    dataurl = "";
  } else {
    url = url.replace("/", "");

    dataurl = url;
  }
  return (
    <div className="profile">
      <div className="m-5">
        <Seo pageTitle="profile" />

        {/* ------ Bread Crumb -------*/}
        {/* <Breadcrumbs data={data} /> */}
        {/* <Breadcrumbs data={dataurl} mainnav="marketing" /> */}
        <Breadcrumbsthrid
          data={dataurl}
          mainnav="users"
          maintwo="All Members"
        />
        {/*------- Search ------*/}
        <Search />
        <Link href="/dashboard/users/">
          <HiArrowLeft className="styletoarrow" />
        </Link>
        {/*------- main Section ------*/}
        <div className="stylerow">
          <h3 className="colorblue">Add New member</h3>
          <div className="line mb-4"></div>

          <div className="d-flex flex flex-column gap-4">
            <div className="d-flex flex-wrap justify-content-between gapx-2">
              <InputControl
                text="User Name"
                placeholder="Enter user name"
                fullWidth={true}
              />
              <InputControl
                text="First Name"
                placeholder="Enter first name"
                fullWidth={true}
              />
            </div>

            <div className="d-flex flex-wrap justify-content-between gapx-2">
              <InputControl
                text="Last name"
                placeholder="Enter last name"
                fullWidth={true}
              />
              <InputControl
                text="Email address"
                placeholder="Member email addess"
                fullWidth={true}
              />
            </div>

            <div className="d-flex flex-wrap justify-content-between gapx-2">
              <InputControl
                text="Password"
                placeholder="Password"
                fullWidth={true}
              />
              <InputControl
                text="Role"
                placeholder="Choose Role"
                fullWidth={true}
              />
            </div>

            <InputControl text="Region" placeholder="Choose Region" />
          </div>
        </div>

        <ButtonPrint data="Add" />
      </div>
    </div>
  );
};

export default AddNewMember;
