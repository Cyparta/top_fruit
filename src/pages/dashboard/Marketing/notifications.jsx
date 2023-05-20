import React from "react";
import Seo from "@/components/common/seo";
import Breadcrumbs from "@/components/products/Breadcrumb ";
import Search from "@/components/common/Search";
import { useRouter } from "next/router";
import ButtonPrint from "@/components/common/ButtonPrint";
// import InputData from "@/components/common/InputData";
import Select from "@/components/common/Select";
import Table from "@/components/products/Table";
import { productsNav } from "@/data/products";
import Inputdata from "@/components/common/Inputdata";
const Notifications = () => {
  let router = useRouter();
  let url = router.route.slice(10).replace("/products", "");
  let data = "";
  if (!url) {
    data = "";
  } else {
    data = url;
  }
  return (
    <div>
      <div className="m-4">
        <Seo pageTitle="users" />

        {/* test breadcrumb */}
        <Breadcrumbs data={data} />

        {/* search */}
        <Search />

        {/* box  */}
        <div style={{background: 'rgba(248, 249, 250, 1)', padding:"24px", borderRadius: "10px"}} className="mb-4">
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
              <p style={{fontSize:"16px", fontWeight:"500"}}>Offer notice</p>
              <textarea style={{width:"100%", background:"transparent", border:"1px solid rgba(230, 237, 255, 1)", height:"80%", padding:"10px"}}>
                Notification content
              </textarea>
            </div>
          </div>
        </div>

        <div>
           <ButtonPrint data="send" />
        </div>

        {/* table */}
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
        {/* print */}
        <ButtonPrint data="print" />
      </div>
    </div>
  );
};

export default Notifications;
