import React, { useEffect, useState } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ShogGrid from './shop-components/shop-right-sidebar';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

const Shop_V1 = () => {
  const language = useSelector((state) => state.language.lang);

  const [category,setCategory]=useState({})
  let { id } = useParams();
  console.log(id)
  const [products,setProducts]=useState([])

  const [pageLoading,setPageLoading]=useState(false)

  const getCategoryDetails=()=>{
    axios.get(`https://alskafisteel.com/alskafi/api/categories/category_details/${id}`)
    .then((res)=>{
      console.log(res)
      if(res.data.status=='success'){
        setCategory(res.data.result)
      }
    })
    .catch((e)=>{console.log(e)})
  }
  const getProducts=()=>{
    setPageLoading(true)
    axios.get(`https://alskafisteel.com/alskafi/api/categories/category_products/${id}`)
    .then((res)=>{
    console.log(res)
      if(Array.isArray(res.data.result)){
        setProducts(res.data.result)
      }
    })
    .catch(e=>console.log(e))
    .finally(()=>{
      setPageLoading(false)
    })
  }
  useEffect(()=>{
    getProducts()
    getCategoryDetails()
  },[id])
    return <div>
        <Navbar />
        <PageHeader headertitle={language=='ar'?category?.name_ar:category?.name_en} />
        <ShogGrid />
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default Shop_V1

