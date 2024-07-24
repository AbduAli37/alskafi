import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

const ContactInfo =({siteInfoData})=> {
  const language = useSelector((state) => state.language.lang);


        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__contact-address-area mb-90">
				<div className="container">
				<div className="row">
					<div className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/10.png"} alt="Icon Image" />
						</div>
						<h3>{language=='ar'?'البريد الإلكترونى':'Email Address'}</h3>
						<p>{siteInfoData?.email}</p>
					</div>
					</div>
					<div className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/11.png"} alt="Icon Image" />
						</div>
						<h3>{language=='ar'?'رقم الهاتف':'Phone Number'}</h3>
						<p>{siteInfoData?.phone} <br /> {siteInfoData?.phone2}</p>
					</div>
					</div>
					<div className="col-lg-4">
					<div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
						<div className="ltn__contact-address-icon">
						<img src={publicUrl+"assets/img/icons/12.png"} alt="Icon Image" />
						</div>
						<h3>{language!='ar'?'location':'الموقع'}</h3>
						<p>{siteInfoData?.location}</p>
					</div>
					</div>
				</div>
				</div>
			</div>

}

export default ContactInfo
