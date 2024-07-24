import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Footer_v1 =()=> {

  const [pageLoading,setPageLoading]=useState(false)
  const [siteInfoData,setSiteInfoData]=useState({})
  const [categories,setCategories]=useState([])
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
  const getProducts=()=>{
    axios.get("https://alskafisteel.com/alskafi/api/categories/get_all_for_user")
    .then((res)=>{
      console.log(res.data)
      if(Array.isArray(res.data.result)){
        setCategories(res.data.result)
      }
    })
    .catch(e=>console.log(e))
  }
  useEffect(()=>{
    getProducts()
    siteInfo()
  },[])

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
				<footer className="ltn__footer-area  ">
				  <div className="footer-top-area  section-bg-2 plr--5">
				    <div className="container-fluid">
				      <div className="row">
				        <div className="col-xl-6 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-about-widget">
				            <div className="footer-logo">
				              <div className="site-logo">
				                <img src={require("../../assets/logo.png")} alt="Logo" />
				              </div>
				            </div>
				            <p>{language=='ar'?siteInfoData?.about_text_ar:siteInfoData?.about_text_en}</p>
				            <div className="footer-address">
				              <ul>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-placeholder" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p>{language=='ar'?siteInfoData?.location:siteInfoData?.location}</p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-call" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="tel:+0123-456789">{siteInfoData?.phone}</a></p>
				                    <p><a href="tel:+0123-456789">{siteInfoData?.phone2}</a></p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-mail" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="mailto:example@example.com">{siteInfoData?.email}</a></p>
				                  </div>
				                </li>
				              </ul>
				            </div>
				            <div className="ltn__social-media mt-20">
						    	<Social />
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">{language=='ar'?'الصفحات':'Pages'}</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/">{language=='ar'?'الرئيسيه':'Main'}</Link></li>
				                <li><Link to="/contact">{language=='ar'?'تواصل معنا':'Contact Us'}</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">{language=='ar'?'المنتجات':'products'}</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                {
                          categories&&categories?.map((item)=>{
                            return<li><Link to={`/shop/${item.id}`}>{language=='ar'?item.name_ar:item.name_en}</Link></li>
                          })
                        }
				              </ul>
				            </div>
				          </div>
				        </div>
				        {/* <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Customer Care</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/login">Login</Link></li>
				                <li><Link to="/my-account">My account</Link></li>
				                <li><Link to="/wishlist">Wish List</Link></li>
				                <li><Link to="/add-listing">Add listing</Link></li>
				                <li><Link to="/faq">FAQ</Link></li>
				                <li><Link to="/contact">Contact us</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
				          <div className="footer-widget footer-newsletter-widget">
				            <h4 className="footer-title">Newsletter</h4>
				            <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
				            <div className="footer-newsletter">
				              <form action="#">
				                <input type="email" name="email" placeholder="Email*" />
				                <div className="btn-wrapper">
				                  <button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow" /></button>
				                </div>
				              </form>
				            </div>
				            <h5 className="mt-30">We Accept</h5>
				            <img src={publicUrl+"assets/img/icons/payment-4.png"} alt="Payment Image" />
				          </div>
				        </div> */}
				      </div>
				    </div>
				  </div>
				  <Copyright />
				</footer>
        )

}


export default Footer_v1
