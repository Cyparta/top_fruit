import React from 'react'
import Table from '../products/Table'
import { productsNav } from "@/data/products";

const PaymentMethods = () => {
  return (
    <div className='stylerow'>
        {/* <Table /> */}
        <Table data={productsNav} />
    </div>
  )
}

export default PaymentMethods

