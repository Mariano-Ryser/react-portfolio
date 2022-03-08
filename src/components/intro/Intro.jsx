import React from 'react'
import "./intro.css"
import Yo from "../../img/Yo.png"
const Intro = () => {
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
                    
                    <h4> I am a web designer, I like to create animations, learn language and always willing to learn new things.</h4>
                </div>

                <div className="welcome">
                  <div className="cuadrado"></div>
                  <div className="triangulo"></div>
                  <div className="luna"></div>
                </div>
            </div>

        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Yo} alt='photp' className='i-img'/>
        </div>
    </div>
  )
}

export default Intro