// import { columsinterface } from "@/data/colums";
import { Product } from "@/data/products";
import React, { useState, useEffect } from "react";
import { CgArrowsExchangeAltV, CgSearch } from "react-icons/cg";
import { useSelector } from "react-redux";
interface GlobalFilterprops {
  filter: string;
  setFilter: (filter: string) => void;
  // column?: columsinterface;
  data?: Product[];
  selectvalue?: string;
}

function GlobalFilter({
  filter,
  setFilter,
  data,
  selectvalue,
}: GlobalFilterprops) {
  // const { filterselect, setfilterselect } = column;
  // const [selectvalue, setselectvalue] = useState();
  let { name, mainnav } = useSelector((state) => state.analytics);
  console.log(name, mainnav);
  return (
    <>
      {mainnav !== "users" &&
      mainnav !== "marketing" &&
      mainnav == "analytics" &&
      name == "analytics" ? (
        <div className="col-12 col-md-6 col-lg-6 row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="search"
              />
              <div className="input-group-prepend">
                <span className="styleinputtext">
                  <CgSearch id="button-addon2" />
                </span>
              </div>
            </div>
          </div>
          {selectvalue ? (
            <div className="col-12 col-md-6 col-lg-6">
              <select
                className="form-select p-2"
                aria-label="Default select example"
                onChange={(e) => setFilter(e.target.value)}
                value={filter || "client type"}
              >
                {[...new Set(data?.map((ele) => ele[selectvalue]))]
                  .filter((val) => val)
                  .map((val, index) => (
                    <option key={index}>{val}</option>
                  ))}
              </select>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="col-12 col-md-6 col-lg-6 row">
          <div className="col-12 col-md-4 col-lg-4">
            <select placeholder="Month" className="form-control " value="Month">
              <option value="Month">Month</option>
            </select>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="search"
              />
              <div className="input-group-prepend">
                <span className="left65">
                  <CgSearch id="button-addon2" />
                </span>
              </div>
            </div>
          </div>
          {selectvalue ? (
            <div className="col-12 col-md-4 col-lg-4">
              <select
                className="form-select p-2"
                aria-label="Default select example"
                placeholder="client type"
                onChange={(e) => setFilter(e.target.value)}
                value={filter || "client type"}
              >
                {[...new Set(data?.map((ele) => ele[selectvalue]))]
                  .filter((val) => val)
                  .map((val, index) => (
                    <option key={index}>{val}</option>
                  ))}
              </select>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default GlobalFilter;
