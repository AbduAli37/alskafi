import React, { useEffect, useState } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Product_Details = () => {
  const language = useSelector((state) => state.language.lang);

  const {id}=useParams()
    console.log(id)
    const [product,setProducts]=useState({})
    const [pageLoading,setPageLoading]=useState(false)
    const getProductDetails=()=>{
      setPageLoading(true)
      axios.get(`https://alskafisteel.com/alskafi/api/products/product_details/${id}`)
      .then((res)=>{
        console.log(res.data.result)
        if(res.data.status=='success'){
          setProducts(res.data.result)
        }
      })
      .catch(e=>console.log(e))
      .finally(()=>{
        setPageLoading(false)
      })
    }
    useEffect(()=>{
      getProductDetails()
    },[
      id
    ])
    return <div>
        <Navbar />
        <PageHeader headertitle={language=='ar'?'تفاصيل المنتج':"Product Details"} customclass="mb-0" />
        <div className="product_det">
          <img  src={product?.image} alt="" />
          <div className="dets">
            <h5>{language=='ar'?product?.name_ar:product?.name_en}</h5>
            <p>{language=='ar'?'الفئه ':'Category '} : {language=='ar'?product?.category?.name_ar:product?.category?.name_en}</p>
            <h6>{language=='ar'?'الصور:':'Images:'}</h6>
            <div className="images">
              {
                product?.images&&product?.images.length>0?product?.images.map((item)=>{
                  return(
                    <img src={item.image} alt="" />
                  )
                })
                :
                (
                  <div style={{display:'flex',alignItems:'center',flexDirection:'column',gap:'10px',width:'100%'}}>
                    <img src={require("../assets/empty-box.png")} alt="" />
                    <h6>{language=='ar'?'فارغ':'Empty'}</h6>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        {/* <ProductSlider product={product}/> */}
        {/* <ProductDetails /> */}
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default Product_Details

