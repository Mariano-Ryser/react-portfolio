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
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Animation</div>
                        <div className="i-title-item">Css</div>
                        <div className="i-title-item">JavaScript</div>
                        <div className="i-title-item">Musiker XD</div>
                    </div>
                </div>
                <div className="i-desc">
                    
                    <h4> I am a designer, always updating myself and constantly learning something new.</h4>
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