import ButtonPrint from "@/components/ButtonPrint";
import Cards from "@/components/overview/Cards";
import Netsales from "@/components/overview/Netsales";
import Search from "@/components/overview/Search";
import Totalsales from "@/components/overview/Totalsales";
import React from "react";
import { CgSearch } from "react-icons/cg";
function overview() {
  function handlePrintClick() {
    window.print();
  }
  return (
    <>
      <div className="m-4">
        <Search/>
        <Cards />
        <Totalsales />
        <Netsales />
        <ButtonPrint/>
        {/* </div> */}
      </div>
    </>
  );
}

export default overview;
