// import { columsinterface } from "@/data/colums";
import { Product } from "@/data/products";
import React, { useState } from "react";
import { CgArrowsExchangeAltV, CgSearch } from "react-icons/cg";
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

  return (
    <div className="col-12 col-md-6 col-lg-6 row">
      <div className="col-12 col-md-6 col-lg-6">
        <div className="input-group mb-3  ">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <CgSearch id="button-addon2" className=" p-2" />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="search"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={filter || ""}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
      {selectvalue ? (
        <div className="col-12 col-md-6 col-lg-6">
          <select
            className="form-select p-2"
            aria-label="Default select example"
            onChange={(e) => setFilter(e.target.value)}
            value={filter || ""}
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
  );
}

export default GlobalFilter;
