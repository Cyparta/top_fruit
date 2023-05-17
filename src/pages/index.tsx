import ButtonPrint from "@/components/common/ButtonPrint";
import Cards from "@/components/overview/Cards";
import Netsales from "@/components/overview/Netsales";
import Search from "@/components/common/Search";
import Totalsales from "@/components/overview/Totalsales";
import React from "react";
import { CgSearch } from "react-icons/cg";
import { data } from "@/data/overviewnumber";
import Chart from "@/components/common/Chart";
function overview() {
  return (
    <>
      <div className="overview m-4">
        <Search />
        <Cards />
        <Chart title="Total Sales" data={data} />
        <Chart title="Net Sales" data={data} />

        <ButtonPrint data="Add" />
      </div>
    </>
  );
}

export default overview;
