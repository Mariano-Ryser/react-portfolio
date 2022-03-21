import React, { useState } from 'react'
import "./presentation.css"
import Foto from "../../img/Yo.png"
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Email from "../../img/email.png"
import Twiter from "../../img/twiter.png"
import emailjs from '@emailjs/browser';


const Presentation = () => {

  const [show, setShow] = useState(false);

  return (
    <div className='presentation'>
        {/* <div className="p-name"><h1>Mariano Ryser</h1></div> */}



      {/*CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, CONTACTO, */}
        <div className='contact'>
            <div className="mobil">
                <a href="https://github.com/Mariano-Ryser"><div className="github"></div></a>
                <a href="https://www.linkedin.com/in/mariano-ryser-073731221/"><div className="linkedin"></div></a>
                <a href=""><div className="twiter"></div></a>
            </div>
        </div>

       



        {/* FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, FOTO, */}
        <div>
            {/* <div className="foto"> </div> */}
            <div className="bg-foto"></div>
        </div>

        
    </div>
  )
}

export default Presentation