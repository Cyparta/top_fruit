// import { columsinterface } from "@/data/colums";
import { Product } from "@/data/products";
import React, { useState } from "react";
import { CgArrowsExchangeAltV, CgSearch } from "react-icons/cg";
interface GlobalFilterprops {
  filter: string;
  setFilter: (filter: string) => void;
  // column?: columsinterface;
  data?: Product[];
}

function ColumnFilter({ filter, setFilter, data }: GlobalFilterprops) {
  return (
    <div className="col-12 col-md-6 col-lg-6 row">
      <div className="col-12 col-md-6 col-lg-6">
        <select
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
          className="form-control"
        >
          {data
            ?.filter((ele) => ele.category)
            .map((elem) => {
              return <option> {elem.category}</option>;
            })}
        </select>
      </div>
    </div>
  );
}

export default ColumnFilter;
