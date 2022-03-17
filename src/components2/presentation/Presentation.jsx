import React from 'react'
import "./presentation.css"
import Foto from "../../img/Yo.png"
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Email from "../../img/email.png"

const Presentation = () => {
  return (
    <div className='presentation'>
        {/* <div className="p-name"><h1>Mariano Ryser</h1></div> */}




        <div className='contact'>
            <div className="mobil">
                <a href="https://github.com/Mariano-Ryser"><div className="github"></div></a>
                <a href="https://www.linkedin.com/in/mariano-ryser-073731221/"><div className="linkedin"></div></a>
                <a href=""><div className="email"></div></a>
            </div>
            
        </div>

        <div>
            <div className="foto"></div>
            <div className="bg-foto"></div>
        </div>
    </div>
  )
}

export default Presentation