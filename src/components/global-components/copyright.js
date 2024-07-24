import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CopyRight =() =>{
  const language = useSelector((state) => state.language.lang);

  const [socials,setSocials]=useState([])
        let publicUrl = process.env.PUBLIC_URL+'/'
          const getSocials=()=>{
    axios.get("https://alskafisteel.com/alskafi/api/socials/get_all_for_user")
    .then((res)=>{
      if(Array.isArray(res.data.result)){
        setSocials(res.data.result)
      }
    })
    .catch(e=>console.log(e))
  }
  useEffect(()=>{
    getSocials()
  },[])

        return (
			<div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
			<div className="container-fluid ltn__border-top-2">
				<div className="row">
				<div className="col-md-6 col-12">
					<div className="ltn__copyright-design clearfix">
					<p>{language=='ar'?'كل الحقوق محفوظه لشركه':'All Rights Reserved @ Company '}<span className="current-year" /></p>
            <span>In2Pro</span>
          </div>
				</div>
				<div className="col-md-6 col-12 align-self-center">
					<div className="ltn__copyright-menu text-end">
					<ul className="go-top d-flex flex-wrap gap-2">
            {
              socials&&socials?.map((item,index)=>{
                return(
                  <img onClick={()=>{
                    window.open(item?.link,'_blank')
                  }} src={item.image} style={{width:'30px',cursor:'pointer'}} alt="" />
                )
              })
            }
					</ul>
					</div>
				</div>
				</div>
			</div>
			</div>
        )

}


export default CopyRight
