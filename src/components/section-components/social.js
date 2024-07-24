import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
const Social=({socials})=>{


        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__social-media">
			<ul>
        {
          socials&&socials.map((item)=>{
            return(
              <li>
                <img onClick={()=>{
                  window.open(item.link,'_blank')
                }} src={item.image} style={{width:'30px'}} alt="" />
              </li>
            )
          })
        }
				{/* <li><a href="https://www.facebook.com/tuna-theme" title="Facebook"><i className="fab fa-facebook-f" /></a></li> */}
				{/* <li><a href="https://www.twitter.com/tuna-theme" title="Twitter"><i className="fab fa-twitter" /></a></li> */}
				{/* <li><a href="https://www.instagram.com/tuna-theme" title="Instagram"><i className="fab fa-instagram" /></a></li> */}
				{/* <li><a href="https://www.dribble.com/tuna-theme" title="Dribbble"><i className="fab fa-dribbble" /></a></li> */}
			</ul>
		</div>

}

export default Social
