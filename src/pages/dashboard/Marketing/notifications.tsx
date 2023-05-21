import React, { useEffect } from "react";
import Seo from "@/components/common/seo";

import Search from "@/components/common/Search";
import { useRouter } from "next/router";
import ButtonPrint from "@/components/common/ButtonPrint";

import Select from "@/components/common/Select";

import { productsNav } from "@/data/products";
import Inputdata from "@/components/common/Inputdata";
import Breadcrumbs from "@/components/common/BreadCrumb";
import { Crumbs } from "@/data/crumbs";
import { useDispatch } from "react-redux";
import { breadcrumdsname, mainnav } from "@/features/marketing/marketingSlice";
import Table from "@/components/common/Table";
import { notificationAnalysics, notificationdata } from "@/data/marketing";

const data: Crumbs[] = [
  { title: "marketing", to: "marketing", active: false },
  { title: "Notifications", to: "marketing/notifications", active: true },
];
const Notifications = () => {
  let dispatch = useDispatch();
  let router = useRouter();
  let url = router.route.slice(10).replace("/marketing", "");
  let dataurl = "";
  if (!url) {
    dispatch(breadcrumdsname("marketing"));
    dispatch(mainnav("marketing"));

    dataurl = "";
  } else {
    url = url.replace("/", "");

    dispatch(breadcrumdsname(url));
    dispatch(mainnav("marketing"));

    dataurl = url;
  }
  useEffect(() => {
    dispatch(mainnav("marketing"));
  }, []);
  return (
    <div>
      <div className="m-4">
        <Seo pageTitle="users" />

        {/* test breadcrumb */}
        <Breadcrumbs data={data} />

        {/* search */}
        <Search />

        {/* box  */}
        <div
          style={{
            background: "rgba(248, 249, 250, 1)",
            padding: "24px",
            borderRadius: "10px",
          }}
        >
          <div className="row">
            <div className="col-6">
              <Inputdata
                name=""
                desc="Please Enter Category number"
                title="notice time"
                bgColor="transparent"
                border="1px solid rgba(230, 237, 255, 1)"
              />
              <Inputdata
                name=""
                desc="Please Enter Category number"
                title="notice time"
                bgColor="transparent"
                border="1px solid rgba(230, 237, 255, 1)"
              />
              <Inputdata
                name=""
                desc="Please Enter Category number"
                title="notice time"
                bgColor="transparent"
                border="1px solid rgba(230, 237, 255, 1)"
              />
            </div>
            <div className="col-6">
              <p style={{ fontSize: "16px", fontWeight: "500" }}>
                Offer notice
              </p>
              <textarea
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "1px solid rgba(230, 237, 255, 1)",
                  height: "80%",
                  padding: "10px",
                }}
              >
                Notification content
              </textarea>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <ButtonPrint data="send" />
        </div>

        {/* table */}
        <div className="stylerow row">
          <Table
            data={notificationdata}
            columsresult={notificationAnalysics}
            selectvalue="time"
          />
        </div>
        <div className="spancolor p-2">
          Showing {notificationdata.length} of {notificationdata.length} Results
        </div>
        {/* print */}
        <ButtonPrint data="print" />
      </div>
    </div>
  );
};

export default Notifications;
