import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = ({banners}) => {
  return (
    <div className='ltn__slider-area ltn__slider-3  section-bg-1 go-top'>
       <Carousel showArrows={true} onChange={()=>{}} onClickItem={()=>{}} onClickThumb={()=>{}}>
          {
            banners&&banners?.map((item,index)=>{
              return(
                <video width={"100%"} controls>
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              )
            })
          }
      </Carousel>
    </div>
  )
}

export default Banner
