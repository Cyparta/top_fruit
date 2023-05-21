import ButtonPrint from '@/components/common/ButtonPrint';
import Search from '@/components/common/Search';
import Seo from '@/components/common/seo'
// import Breadcrumbs from '@/components/common/BreadCrumb';
import InputControl from '@/components/common/inputControl';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Crumbs } from '@/data/crumbs';
import Breadcrumbs from '@/components/common/BreadCrumb';
import { useDispatch } from 'react-redux';
import { mainnav } from '@/features/analytics/analyticsSlice';

const data: Crumbs[] = [{ title: "users", to: "/dashboard/users", active: false },
     { title: "All Members", to: "/dashboard/users", active: false },
     { title: "add Member", to: "/dashboard/users/addNewMember", active: true }
]

const AddNewMember = () => {
    let dispatch = useDispatch()
    useEffect(() => {
      dispatch(mainnav("users"));
    }, []);
    return (
        <div className='profile'>

            <div className="m-5">

                <Seo pageTitle="profile" />

                {/* ------ Bread Crumb -------*/}
                {/* <Breadcrumbs data={data} /> */}
                <Breadcrumbs data={data}/>

                {/*------- Search ------*/}
                <Search />

                {/*------- main Section ------*/}
                <div className='stylerow'>
                    <h3 className="colorblue">Personal settings</h3>
                    <div className="line mb-4"></div>

                    <div className='d-flex flex flex-column gap-4'>
                        <div className='d-flex flex-wrap justify-content-between gapx-2'>
                            <InputControl text="User Name" placeholder="Enter user name" fullWidth={true} />
                            <InputControl text="First Name" placeholder="Enter first name" fullWidth={true} />
                        </div>

                        <div className='d-flex flex-wrap justify-content-between gapx-2'>
                            <InputControl text="Last name" placeholder="Enter last name" fullWidth={true} />
                            <InputControl text="Email address" placeholder="Member email addess" fullWidth={true} />
                        </div>

                        <div className='d-flex flex-wrap justify-content-between gapx-2'>
                            <InputControl text="Password" placeholder="Password" fullWidth={true} />
                            <InputControl text="Role" placeholder="Choose Role" fullWidth={true} />
                        </div>

                        <InputControl text="Region" placeholder="Choose Region" />
                    </div>

                </div>

                <ButtonPrint data="Add" />
            </div>

        </div>
    )
}

export default AddNewMember