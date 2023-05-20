import ButtonPrint from '@/components/common/ButtonPrint'
import Search from '@/components/common/Search'
// import Cards from '@/components/overview/Cards'
import Netsales from '@/components/overview/Netsales'
import Totalsales from '@/components/overview/Totalsales'
import { overviewNumber } from "@/data/overviewnumber";
import CardCharts from '@/components/common/cardCharts'
import React from 'react'
import Cards from "@/components/analytics/Cards";

const Coupons = () => {
  return (
    <div className='m-4'>
        <Search />
        {/* <CardCharts overviewNumber={overviewNumber}/> */}
        <Cards />
        {/* <Cards overviewNumber={overviewNumber}/> */}
        <Totalsales />
        <Netsales />
        <ButtonPrint data="Add" />
    </div>
  )
}

export default Coupons