import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import axios from 'axios';

// import React from 'react'

const CategoryV1 = () => {
  const language = useSelector((state) => state.language.lang);
  // console.log(language)
  const [features,setFeatures]=useState([])
  const getBanners=()=>{
    // setPageLoading(true)
    axios.get("https://alskafisteel.com/alskafi/api/features/get_all_for_user")
    .then((res)=>{
    console.log(res.data.result)
      if(Array.isArray(res.data.result)){
        setFeatures(res.data.result)
      }
    })

    .catch(e=>console.log(e))
  }
  useEffect(()=>{
    getBanners()
  },[])
  return (
    <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-90 go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">{language=='ar'?'الخصائص':'Featrues'}</h6>
			          {/* <h1 className="section-title">{language=='ar'?'الخصائص':'Featrues'}</h1> */}
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center">
            {
              features&&features.map((item,index)=>{
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                  <div className="ltn__category-item ltn__category-item-5 text-center">
                    <Link to="">
                    <span>
                      <img src={item.image} style={{width:'50px'}} alt="" />
                    </span>
                      {/* <span className="category-icon"><i className="flaticon-car" /></span> */}
                      <span className="category-title">{language=='ar'?item.title_ar:item.title_en}</span>
                      <span className="category-btn"><i className="flaticon-right-arrow" /></span>
                    </Link>
                  </div>
                </div>
                )
              })
            }
			    </div>
			  </div>
			</div>
  )
}

export default CategoryV1
