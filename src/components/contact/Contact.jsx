import React, { useRef, useState } from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Adress from "../../img/adress.png"

import Email from "../../img/email.png"
import emailjs from '@emailjs/browser';

const Contact = () => {

    
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
    e.preventDefault();
  
      emailjs.sendForm(
          'service_vl2ehmc',
           'template_wapk55q',
            form.current,
             'user_Gr1dS043bX0VxH5XOVORw')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    

  return (
    <div className='c-box'>
        <div className="c-bg"></div>
            <div div className="c-wrapper">

                <div className="c-left">
                        <h1 className='c-title'>Contact</h1>
                        <div className="c-info">
                            <div className="c-info-items">
                                <img className='c-icon'
                                 src={Phone}
                                  alt="" />
                                  +41 788 747974
                            </div>
                        </div>
                        <div className="c-info">
                            <div className="c-info-items">
                                <img className='c-icon'
                                 src={Email}
                                  alt="" />
                                  rysermariano@gmail.com
                            </div>
                        </div>
                        <div className="c-info">
                            <div className="c-info-items">
                                <img className='c-icon'
                                 src={Adress}
                                  alt="" />
                                  Riedhofstrasse 252, 8049 Zürich
                            </div>
                        </div>
                    </div>


                <div className="c-right">
                    <p className='c-desc'>
                        Gerne beantworte ich Ihre Fragen.
                        </p>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder='Name' name="user_name"/>
                        <input type="text" placeholder='Subject' name="user_subject"/>
                        <input type="text" placeholder='Email' name="user_email"/>
                        <textarea name="message" id="" cols="5" rows="5" placeholder='Message'></textarea>
                        <br />
                        <button type='submit'>Submit</button>
                    </form>
                    {
                        done && <div className='c-msj'><h3>"Thank you!"</h3></div>
                    }
                    

                </div>
            </div>

    </div>
  )
}

export default Contact