import { columsinterface } from "@/data/colums";
import { Product } from "@/data/products";
import React, { useState } from "react";
import { CgArrowsExchangeAltV, CgSearch } from "react-icons/cg";
interface ColumnFilterprops {
  column?: columsinterface;
  data?: Product[];
}

function ColumnFilter({ column, data }: ColumnFilterprops) {
  const { filter, setFilter } = column;

  return (
    <div className="col-12 col-md-6 col-lg-6">
      {column ? (
        <select
          className="form-select p-2"
          aria-label="Default select example"
          onChange={(e) => setFilter(e.target.value)}
          value={filter || ""}
        >
          {data
            ?.filter((ele) => ele.category)
            .map((elem) => {
              return <option>{elem.category}</option>;
            })}
        </select>
      ) : (
        ""
      )}
    </div>
  );
}

export default ColumnFilter;
