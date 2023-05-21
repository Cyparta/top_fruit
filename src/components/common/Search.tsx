import React from "react";
import { CgSearch } from "react-icons/cg";

function Search() {
  return (
    <div className="input-group mb-3  w-50">
      <input type="text" className="form-control" placeholder="search" />
      <div className="input-group-prepend">
        <span className="styleinputtext">
          <CgSearch id="button-addon2" />
        </span>
      </div>
    </div>
  );
}

export default Search;
