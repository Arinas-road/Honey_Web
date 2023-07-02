import React from "react";
import img1 from '../../../Img/main1.jpg';
import img2 from '../../../Img/main2.jpg';
import img3 from '../../../Img/main3.jpg';
const ThreePhotos = () => {

   return(
      <div className="three-photos-main">
         <div className="three-photos-text">
            <h1>How We Work</h1>
            <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
         </div>
         <div className="three-photos-img">
            <div className="three-photos-img-img">
               <img src={img1}></img>
            </div>
            <div className="three-photos-img-img">
               <img src={img2}></img>
            </div>
            <div className="three-photos-img-img">
               <img src={img3}></img>
            </div>
         </div>
      </div>
   )
}

export default ThreePhotos;