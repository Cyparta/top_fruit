import Search from '@/components/common/Search';
import Seo from '@/components/common/seo';
import Breadcrumbs from '@/components/products/Breadcrumb ';
import Tabs from '@/components/settings/tabs';
import { useRouter } from 'next/router';
import React from 'react'

function settings() {
  let router = useRouter();
  let url = router.route.slice(10).replace("/products", "");
  let data = "";
  if (!url) {
    data = "";
  } else {
    data = url;
  }
  return (
    <>
      <div className='settings'>
        <Seo pageTitle="Products" />
        <div className='m-5'>
          {/* ------ Bread Crumb -------*/}
          <Breadcrumbs data={data} />
          {/*------- Search ------*/}
          <Search />
          {/*------- main Section ------*/}
          <div>
            <h3 className="colorblue">Settings</h3>
            <div className="line mb-4"></div>
            <Tabs />
          </div>
        </div>
      </div>
    </>
  )
}

export default settings
