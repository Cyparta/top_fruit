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
  let { name, mainnav } = useSelector((state: any) => state.analytics);
  console.log(name, mainnav);
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="search"
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="input-group-prepend">
          <span className="styleinputtext left80">
            <CgSearch id="button-addon2" />
          </span>
        </div>
      </div>
    </>
  );
}

export default GlobalFilter;
