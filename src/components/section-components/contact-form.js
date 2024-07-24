import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
// import { toast } from 'react-toastify';

const ContactForm =({siteInfoData})=> {
  const language = useSelector((state) => state.language.lang);

  const [contactData,setContactData]=useState({
    name:'',
    email:'',
    message:'',
  })
  const [contactLoading,setContactLoading]=useState(false)
  const contact=()=>{
    const data_send={
      ...contactData
    }
    setContactLoading(true)
    axios.post("https://alskafisteel.com/alskafi/api/messages/add_message",data_send,{
      headers:{
        lang:language
      }
    })
    .then((res)=>{
      if(res.data.status=='success'){
        // toast.s
        toast.success(res.data.message)
        setContactData({
          name:'',
          email:'',
          message:'',
        })
      }
      else if(res.data.status=='faild'){
        toast.error(res.data.message)
      }
      else {
        toast.error(language=='ar'?'حدث خطأ ما':'Something Went Error')
      }
    })
    .catch(e=>console.log(e))
    .finally(()=>{
      setContactLoading(false)
    })
  }

	let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__contact-message-area mb-120 mb--100">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="ltn__form-box contact-form-box box-shadow white-bg">
						<h4 className="title-2">{language=='ar'?siteInfoData?.contact_title_ar:siteInfoData?.contact_title_en}</h4>
						<h4 className="title-2">{language=='ar'?siteInfoData?.contact_text_ar:siteInfoData?.contact_text_en}</h4>
						<form onSubmit={(e)=>{
              e.preventDefault()
              contact()
            }} id="contact-form" action={publicUrl+"mail.php"} method="post">
						<div className="row">
							<div className="col-md-6">
							<div className="input-item input-item-name ltn__custom-icon">
								<input value={contactData?.name} onChange={(e)=>{
                  setContactData({...contactData,name:e.target.value})
                }} type="text" name="name" placeholder={language=='ar'?"ادخل إسمك":"Enter your name"} />
							</div>
							</div>
							<div className="col-md-6">
							<div className="input-item input-item-email ltn__custom-icon">
								<input value={contactData?.email} onChange={(e)=>{
                  setContactData({...contactData,email:e.target.value})
                }} type="email" name="email" placeholder={language=='ar'?'أدخل البريد الإلكترونى':"Enter email address"} />
							</div>
							</div>
						</div>
						<div className="input-item input-item-textarea ltn__custom-icon">
							<textarea value={contactData?.message} onChange={(e)=>{
                  setContactData({...contactData,message:e.target.value})
                }} name="message" placeholder={language=='ar'?"أدخل الرساله":"Enter message"} defaultValue={""} />
						</div>
						<div className="btn-wrapper mt-0">
							<button  disabled={contactLoading} style={{
                background:contactLoading?'#000':'',
                cursor:contactLoading?'no-drop':'pointer',
              }} className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">{language=='ar'?'إرسال':'Send'}</button>
						</div>
						<p className="form-messege mb-0 mt-20" />
						</form>
					</div>
					</div>
				</div>
				</div>
			</div>

}

export default ContactForm
