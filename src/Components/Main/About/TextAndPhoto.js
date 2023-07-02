import React from "react";
import img from '../../../Img/HoneyTee.jpg'
const TextAndPhoto = () => {
   return(
      <div className="text-photo-main">
         <div className="text-photo-text">
            <h1>Honey</h1>
            <p> - it's very good for your health and also just tasty! Good to drink tee with it!
            Honey is one of those pantry items that you can always benefit from just having around at any given moment. Just throw it on anything—fruit, toast, oatmeal, cheese boards, homemade salad dressings, marinades, hot tea, coffees, and cocktails. 
            </p>
         </div>
         <div className="text-photo-img">
            <img src={img}></img>
         </div>
      </div>
   )
}

export default TextAndPhoto;