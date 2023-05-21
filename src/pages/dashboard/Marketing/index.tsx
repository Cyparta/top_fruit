import Search from '@/components/common/Search';
import Seo from '@/components/common/seo'
// import Breadcrumbs from '@/components/products/Breadcrumb ';
import Breadcrumbs from '@/components/common/BreadCrumb';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import markting from '../../../../public/assets/image/markting/1.png'
import markting2 from '../../../../public/assets/image/markting/2.png'
import Image from 'next/image';
import Select from '@/components/common/Select';
import Table from '@/components/products/Table';
import { productsNav } from "@/data/products";
import dashed from '../../../../public/assets/image/markting/dashed.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputControl from '@/components/common/inputControl';
import AddImage from '@/components/products/AddImage';
import Inputdata from '@/components/common/Inputdata';
// import {Swiper, SwiperSlide } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Crumbs } from '@/data/crumbs';

const data: Crumbs[] = [{ title: "marketing", to: "marketing", active: false }, { title: "Ads", to: "marketing", active: true }]

function index() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='marketing'>
      <div className='m-5'>
        <Seo pageTitle="marketing" />

        {/* ------ Bread Crumb -------*/}
        {/* <Breadcrumbs data={data} /> */}
        <Breadcrumbs data={data} />

        {/*------- Search ------*/}
        <Search />

        <div className=''>
          <h3 className='colorblue mb-3 mt-5'>Advertising spaces</h3>

          <div className='d-flex gapx-2'>
            <div className='add-image'>
              {/* <img src={dashed} alt="add"/> */}
              <Image src={dashed}
                width={200}
                height={200}
                alt="markting" />

              <div className="plus-image" onClick={handleShow}>
                <p style={{ fontSize: "50px", marginBottom: "0px", cursor: "pointer" }}>+</p>
                <p >Create New Ad</p>
              </div>

            </div>
            <div className=''>
              <Image
                src={markting}
                width={200}
                height={200}
                alt="markting"
              />
              <p className='text-center cursor-pointer delete-ad'>Delete Ad</p>
            </div>

            <div className=''>
              <Image
                src={markting2}
                width={200}
                height={200}
                alt="markting"
              />
              <p className='text-center cursor-pointer delete-ad'>Delete Ad</p>
            </div>

          </div>

          <h3 className='colorblue mt-5 mb-3'>Ad Overview</h3>
          <div className="stylerow row">
            <div className="col-12 col-md-6 col-lg-6">
              <h3 className="colorblue mb-5">All Products</h3>
            </div>
            <div className="col-12 col-md-6 col-lg-6 row">
              <div className="col-12 col-md-6 col-lg-6">
                <Search />
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <Select />
              </div>
            </div>
            <Table data={productsNav} />
          </div>

          <div className="spancolor p-2">
            Showing {productsNav.length} of {productsNav.length} Results
          </div>

          <Modal
            show={show}
            onHide={handleClose}
            keyboard={false}
            centered
            dialogClassName="custom-modal"
          >
            <div className='row align-items-center'>
              <div className="col-6">
                <div className='' style={{ fontSize: "20px" }}>
                  <h3 className='colorblue' style={{ marginBottom: "26px" }}>Add New Ad</h3>
                </div>

                <div className=''>
                  <Inputdata name="Ad-Title" desc="please Enter" title="Ad Title" />
                </div>
                <div className=''>
                  <Inputdata name="Ad-Title" desc="please Enter" title="Ad Title" />
                </div>

                <div className='mb-3'>
                  <p className='head mb-1'>Ad Category</p>

                  <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide><div className='ad-cate'>Cars</div></SwiperSlide>
                    <SwiperSlide><div className='ad-cate'>Electronics</div></SwiperSlide>
                    <SwiperSlide><div className='ad-cate'>Home & Garden</div></SwiperSlide>
                    <SwiperSlide><div className='ad-cate'>Fashion</div></SwiperSlide>
                    <SwiperSlide><div className='ad-cate'>Sporting Goods</div></SwiperSlide>
                    <SwiperSlide><div className='ad-cate'>Toys</div></SwiperSlide>
                    <SwiperSlide><div className='ad-cate'>Real Estate</div></SwiperSlide>
                    <SwiperSlide><div className='ad-cate'>Services</div></SwiperSlide>
                  </Swiper>
                </div>

              </div>
              <div className="col-6">
                <AddImage />
              </div>
            </div>

            <div className='line mt-5'></div>
            <div className="d-flex justify-content-around" style={{ padding: "27px" }}>
              <button onClick={handleClose} style={{ color: "#2C3066", fontSize: "18px", fontWeight: "500" }}>Save</button>
              <button onClick={handleClose}>cancel</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default index