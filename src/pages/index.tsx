import ButtonPrint from "@/components/common/ButtonPrint";
import Cards from "@/components/overview/Cards";
import Netsales from "@/components/overview/Netsales";
import Search from "@/components/common/Search";
import Totalsales from "@/components/overview/Totalsales";
import React from "react";
import { CgSearch } from "react-icons/cg";
function overview() {
  
  return (
    <>
      <div className="m-4">
        <Search />
        <Cards />
        <Totalsales />
        <Netsales />
        <ButtonPrint data="Add" />
        {/* </div> */}
      </div>
    </>
  );
}

export default overview;
