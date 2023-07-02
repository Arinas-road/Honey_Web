import React, { useEffect } from "react";
import Honey from "./Honey";
import { useState } from "react";
const AllHoney = () => {
   // const data = [
   //    {
   //       price: 19.99,
         
   //       title: 'Best Honey',
   //       src: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZXklMjBqYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
   //    },
   //    {
   //       price: 12.99,
         
   //       title: 'Good Honey',
   //       src: 'https://images.unsplash.com/photo-1627154424678-0d3909874daa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9uZXklMjBqYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
   //    },
   //    {
   //       price: 15.99,
         
   //       title: 'Tasty Honey',
   //       src: 'https://images.unsplash.com/photo-1587049352824-f7e128d4ebe5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9uZXklMjBqYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
   //    },
   //    {
   //       price: 10.99,
         
   //       title: 'Just Honey',
   //       src: 'https://images.unsplash.com/photo-1629240830845-e4a550a6bbde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmV5JTIwamFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
   //    },

   // ]
   const [data, setData] = useState(null);
   const GetData = async() => {
      const fetchedData = await fetch('https://react-course-6e3f9-default-rtdb.firebaseio.com/honey.json', {method: 'GET'});
      const data = await fetchedData.json();
      console.log(data);
      let newData = [];
      for(const key in data){
         newData.push(data[key]);
      }
      console.log();
      return newData;
   }
   useEffect(() => {
      const fetchData = async () => {
         const data = await GetData();
         setData(data);
      }
      fetchData();
   }, [])

   return (
      <div className="all-honey-main">
         <div className="all-honey-text">
            <p>Our Products:</p>
         </div>
         <div className="all-honey">
         {data && data.map(el => (
            <Honey price={el.price} description={el.description}  title={el.title} src={el.src}></Honey>
         ))}
         </div>
      </div>
   )
}

export default AllHoney;