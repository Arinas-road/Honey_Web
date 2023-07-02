import React from "react";
import honey from "../../vid/honey.mp4";
import { HashLink, HashLink as Link } from "react-router-hash-link";
import { Router } from "react-router-dom";
const HeaderMain = () => {
   
  return (
    <div id="header" className="header-vid">
      <video src={honey} type="video/mp4" autoPlay={true} loop={true}></video>
      <div className="overlay">
        <p>Nature is closer, than you think</p>
       
        <Link to="#contact" className="header-button"><p>Contact Us</p></Link>
        {/* <button as={HashLink} to="#contact">Home</button> */}
      </div>
    </div>
  );
};

export default HeaderMain;
