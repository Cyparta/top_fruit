import React from 'react'
import Breadcrumbs from '@/components/common/BreadCrumb'
import InputControl from '@/components/common/inputControl';
import Tabs from '@/components/marketing/tabs';
interface Data {
    title: string;
    to: string;
}

const data: Data[] = [{ title: "marketing", to: "margeting" }, { title: "marketing", to: "margeting" }]

const AddNewCoupons = () => {
    return (
        <div className='marketing'>
            <div className='m-4'>
                <Breadcrumbs data={data}/>
                <div className='stylerow'>
                    <div className='mb-3'>
                        <InputControl text="coupon code"  width="327px" placeholder='Please enter coupon code' />
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