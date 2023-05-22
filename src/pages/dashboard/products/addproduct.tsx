import Inputdata from "@/components/common/Inputdata";
import Seo from "@/components/common/seo";
import Search from "@/components/common/Search";
// import Breadcrumbs from "@/components/products/Breadcrumb ";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AddImage from "@/components/products/AddImage";
import Breadcrumbs from "@/components/analytics/Breadcrumb ";

function addproduct() {
  let router = useRouter();
  // const [imageSrc, setImageSrc] = useState(imagecamer as unknown as string);
  let url = router.route.slice(10).replace("/products", "");
  let data = "";
  if (!url) {
    data = "";
  } else {
    url = url.replace("/", "");
    data = url;
  }
  return (
    <>
      <div className="add_product">
        <Seo pageTitle="add product" />

        <div className="m-5">
          {/* <Breadcrumbs data={data} /> */}
          <Breadcrumbs data={data} mainnav="products" />

          <Search />
          <div className="row align-items-start">
            <div className="col-12 col-md-8 col-lg-8">
              <div className="stylerow">
                <h3 className="colorblue mb-5">Add new product</h3>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6">
                    <Inputdata
                      title="Product Name"
                      name="productname"
                      desc="Please Enter product name"
                    />

                    <Inputdata
                      title="country of origin"
                      name="country_of_origin"
                      desc="Please Enter country of origin"
                    />
                    <Inputdata name="price" desc="Please enter" title="Price" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <Inputdata
                      title="Calories"
                      name="calories"
                      desc="Please Enter calories"
                    />
                    <Inputdata
                      title="Categorty"
                      name="categorty"
                      desc="Please select"
                    />
                    <Inputdata
                      title="Discount"
                      name="discount"
                      desc="Please enter"
                    />
                  </div>
                  <div className="col-12 col-md-12 col-lg-12">
                    <div className="mb-5">
                      <h6>Description 1</h6>
                      <textarea
                        placeholder={"Please enter"}
                        className="form-control"
                        name="description1"
                      />
                    </div>
                    <div className="mb-5">
                      <h6>Description 2</h6>
                      <textarea
                        placeholder={"Please enter"}
                        className="form-control"
                        name="description2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="iconstyle iconstylebackgroundgreen w-25 ml-auto p-2 mt-4 d-flex justify-content-center align-items-center colorblue"
                // onClick={handlePrintClick}
              >
                Add
              </button>
            </div>
            <div className="col-12 col-md-4 col-lg-4  styletoaddphoto">
              <AddImage />

              <Inputdata
                title="Product Number"
                name="product_number"
                desc="Please Enter product number"
              />

              <Inputdata
                name="amount"
                desc="Please Enter amount"
                title="Amount"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default addproduct;
