import React from "react";

const Hamburger = ({isOpen}) => {
   return(
      <div className="hamburger" >
         <div className="burger burger1" style={{transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'}}></div>
         <div className="burger burger2" style={{opacity: isOpen ? 0 : 1}}></div>
         <div className="burger burger3" style={{transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)'}}></div>
      </div>
   )
}

export default Hamburger;