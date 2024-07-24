import React, { useEffect, useState } from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import SearchForm from './section-components/search-form';
import Aboutv1 from './section-components/about-v1';
import Counter from './section-components/counter-v1';
import AboutV2 from './section-components/about-v2';
import Featuresv1 from './section-components/features-v1';
import ProSlider from './section-components/product-slider-v1';
import Apartment from './section-components/apartment-v1';
import VideoV1 from './section-components/video-v1';
import Category from './section-components/category-v1';
import Testimonial from './section-components/testimonial-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import './home.css'
import axios from 'axios';
import { useSelector } from 'react-redux';

const Home_V1 = () => {
  const language = useSelector((state) => state.language.lang);

  const [pageLoading,setPageLoading]=useState(false)
  const [banners,setBanners]=useState([])
  const getBanners=()=>{
    setPageLoading(true)
    axios.get("https://alskafisteel.com/alskafi/api/banners/get_all_for_user")
    .then((res)=>{
    console.log(res.data.result)
      if(Array.isArray(res.data.result)){
        setBanners(res.data.result)
      }
    })
    .finally(()=>{
      setPageLoading(true)
    })
    .catch(e=>console.log(e))
  }
  useEffect(()=>{
    getBanners()
  },[])
    return <div className={language=='ar'?'ar_sty':''}>
        <Navbar />
        <Banner banners={banners}/>
        {/* <VideoV1 /> */}
        <Category />
        {/* <SearchForm /> */}
        {/* <Aboutv1 /> */}
        {/* <Counter /> */}
        {/* <AboutV2 /> */}
        {/* <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/> */}
        {/* <ProSlider /> */}
        {/* <Apartment /> */}
        {/* <Testimonial /> */}
        {/* <BlogSlider customClass="section-subtitle-2"/> */}
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default Home_V1

