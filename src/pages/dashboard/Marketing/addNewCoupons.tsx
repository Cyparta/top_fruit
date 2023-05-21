import React from 'react'
import Breadcrumbs from '@/components/common/BreadCrumb'
import InputControl from '@/components/common/inputControl';
import Tabs from '@/components/marketing/tabs';
import { Crumbs } from '@/data/crumbs';


const data: Crumbs[] = [{ title: "marketing", to: "marketing", active: false }, { title: "coupons", to: "marketing/coupons", active: false }, { title: "addNewCoupons", to: "/marketing/addNewCoupons", active: true }]

const AddNewCoupons = () => {
    return (
        <div className='marketing'>
            <div className='m-4'>
                <Breadcrumbs data={data} />
                <div className='stylerow'>
                    <div className='mb-3'>
                        <InputControl text="coupon code" width="327px" placeholder='Please enter coupon code' />
                    </div>
                    <div className='line'></div>

                    <div className='mt-4'>
                        <Tabs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewCoupons