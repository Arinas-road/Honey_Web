import React from "react";
import img from '../../../Img/man.png'
const MainTitle = () => {

   return(
      <div className="first-main">
         <div className="first-img">
            <img src={img}></img>
         </div>
         <div className="first-text">
            <h1>Who Are We</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </div>
      </div>
   )
}

export default MainTitle;