import React, { useEffect } from 'react'
import "./intro.css"
import Yo from "../../img/Yo.png"
import Back from "../../img/back.jpg"
import Mars from "../../img/mars.png"

const Intro = () => {

    useEffect(()=>{
        let mars = document.querySelector(".mars")

        window.onscroll = function(){
            let Y = window.scrollY;
            mars.style.transform = "translateY(" + Y/1.6 + "px)";
          }
    },[])
    
  return (
    <div className='i'>
        
        <div className="i-left">
            
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h2 className='i-name'>Mariano Ryser</h2>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item"><p> Web Developer</p></div>
                        <div className="i-title-item"><p> Animation</p></div>
                        <div className="i-title-item"><p> Css</p></div>
                        <div className="i-title-item"><p> JavaScript</p></div>
                        <div className="i-title-item"><p> Musiker =D</p></div>
                    </div>
                </div>
                <div className="i-desc">
                    <h4>I am a web designer, I like to create animations, learn languages ​​and I am always willing to learn new technologies.</h4>
                </div>
                <div className="i-desc2">
                    <h2>HTML5 - CSS - BOOTSTRAP - WORDPRESS - JAVA SCRIPT - REACT - MYSQL - PHP - LINUX - GIT - GITHUB - DOCKER </h2>
                </div>

            </div>

        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Yo} alt='photp' className='i-img'/>
        </div>

        <img className='mars' src={Mars} alt="" />
    </div>
  )
}

export default Intro