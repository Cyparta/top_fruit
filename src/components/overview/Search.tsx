import React from "react";
import { CgSearch } from "react-icons/cg";

function Search() {
  return (
    <div className="input-group mb-3 ">
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
      />
    </div>
  );
}

export default Search;
