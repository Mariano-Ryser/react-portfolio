import React, { useEffect, useState } from 'react'
import "./s1.css"



const  S1 = () => {
  
  useEffect(()=>{


   var s = document.querySelector(".s1");
    s.style.color ="red";

    window.onscroll = function(){
      let Y = window.scrollY;

      s.style.transform = "translateY(" + Y/1.5 + "px)";
    }

 },[])
 
  return (
  <div>
    <div className="s1">

        Hola

        
          
    </div>
        

         
  </div>
  )
}

export default S1