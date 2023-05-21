import ButtonPrint from '@/components/common/ButtonPrint'
import Search from '@/components/common/Search'
// import Cards from '@/components/overview/Cards'
import Netsales from '@/components/overview/Netsales'
import Totalsales from '@/components/overview/Totalsales'
import { overviewNumber } from "@/data/overviewnumber";
import CardCharts from '@/components/common/cardCharts'
import React from 'react'
import Cards from "@/components/analytics/Cards";
import Breadcrumbs from '@/components/common/BreadCrumb';
import { Crumbs } from '@/data/crumbs';
import Link from 'next/link';
const data: Crumbs[] = [{ title: "marketing", to: "marketing", active: false },
{ title: "coupons", to: "marketing/coupons", active: true }]

const Coupons = () => {
  return (
    <div className='m-4'>
      <Breadcrumbs data={data} />
      <div className='d-flex '>
        <Search />
        <div>
          <Link href='/dashboard/marketing/addNewCoupons'>
            <button className="btn btn-add" style={{ background: "rgba(64, 170, 84, 1)", color: "rgba(44, 48, 102, 1)", padding: "16px", fontSize: "30px" }}>
              +
            </button>
          </Link>
        </div>
      </div>
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