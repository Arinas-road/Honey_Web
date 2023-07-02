import React from "react";
import Form from "./Form/Form";
import About from "./About/About";
import SlidingLine from "./SlidingLine";
import AllHoney from "./Honey/AllHoney";
const Main = () => {
   return(
      <div className="mainMain">
         <SlidingLine/>
         <AllHoney/>
         <About/>
         <Form/>
      </div>
   )
}

export default Main;