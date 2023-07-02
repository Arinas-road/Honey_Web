import React from "react";

const ProductsInfo = (title, price, description, img) => {
   
   return(
      <div>
         <div>
            <div>
               <img src={img}></img>
            </div>
            <div>
               <p>{title}</p>
               <p>{price}</p>
            </div>
         </div>
         <div>
            <p>{description}</p>
         </div>
      </div>
   )
}