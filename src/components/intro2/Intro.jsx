import React from 'react'
import "./intro.css"
import Base from "../../img/8.png"
import Base9 from "../../img/9.png"
import Base10 from "../../img/10.png"
import Base11 from "../../img/11.png"
import { useEffect } from "react"

const Intro = () => {

  useEffect(()=>{
    let base1 = document.querySelector(".base1");
    let base2 = document.querySelector(".base2");
    let base3 = document.querySelector(".base3");
  
    // let wrapper = document.querySelector(".i-left-wrapper")

    window.onscroll = function(){
        let Y = window.scrollY;
        base1.style.transform = "translateY(" + Y/3 + "px)";
        base2.style.transform = "translateY(" + Y/2.6 + "px)";
        base3.style.transform = "translateY(" + Y/2 + "px)";
        // wrapper.style.transform = "translateY(" + Y/1 + "px)";
      }
},[])
    

  return (
    <div className='intro'>
      <nav className='nav'></nav>
      {/* Lienzo de 1448px x 443px */}
      <img className='base' src={Base} alt="" />
      <img className='base1' src={Base9} alt="" />
      <img className='base2' src={Base10} alt="" />
      <img className='base3' src={Base11} alt="" />
        
    </div>
  )
}

export default Intro