import React, { useEffect, useState ,CSSProperties } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import ContactForm from './section-components/contact-form';
import Map from './section-components/map';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { Loader } from 'rsuite';

const ContactV1 = () => {
  const [pageLoading,setPageLoading]=useState(false)
  const [siteInfoData,setSiteInfoData]=useState({})
  const language = useSelector((state) => state.language.lang);
  const siteInfo=()=>{
    setPageLoading(true)
    axios.get("https://alskafisteel.com/alskafi/api/site_infos/get_all_for_user")
    .then((res)=>{
      console.log(res.data)
      if(res.data.status=='success'){
        setSiteInfoData(res.data.result)
      }
    })
    .catch(e=>console.log(e))
    .finally(()=>{
      setPageLoading(false)
    })
  }
  useEffect(()=>{
    siteInfo()
  },[])
    return <div>
      {
        pageLoading?
        (
          <div style={{height:'100vh'}}>
            <Loader/>
          </div>
        ):(
          <div>
            <Navbar />
            <PageHeader headertitle={language=='ar'?"تواصل معنا":"Contact Us"} subheader="Contact" />
            <ContactInfo siteInfoData={siteInfoData}/>
            <ContactForm siteInfoData={siteInfoData}/>
            <Map siteInfoData={siteInfoData}/>
            {/* <CallToActionV1 /> */}
            <Footer />
          </div>
        )
      }

    </div>
}

export default ContactV1

