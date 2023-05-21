import ButtonPrint from '@/components/common/ButtonPrint';
import Search from '@/components/common/Search';
import Seo from '@/components/common/seo'
// import Breadcrumbs from '@/components/products/Breadcrumb ';
import Breadcrumbs from '@/components/common/BreadCrumb';
import InputControl from '@/components/common/inputControl';
import { useRouter } from 'next/router';
import React from 'react'
import { Crumbs } from '@/data/crumbs';

const data: Crumbs[] = [{ title: "users", to: "/dashboard/users", active: false },
     { title: "profile", to: "/dashboard/profile", active: true },
]

const Profile = () => {
    return (
        <div className='profile'>

            <div className="m-5">

                <Seo pageTitle="profile" />

                
                <Breadcrumbs data={data}/>
                {/* ------ Bread Crumb -------*/}
                {/* <Breadcrumbs data={data} /> */}

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
                            <InputControl text="Password" placeholder="Password" fullWidth={false} />
                        </div>
                    </div>

                </div>

                <ButtonPrint data="Edit" />
            </div>

        </div>
    )
}

export default Profile