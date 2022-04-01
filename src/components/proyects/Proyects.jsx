import React, { useState } from 'react'
import "./proyects.css"
import Alienverde from "../../img/Alienverde.gif"
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Drag from "../../img/drag2.png"
import Cube from "../../img/cubegif.gif"
// import Fo from "../../img/fo.gif"
import Google from "../../img/googleLogo.png"
import Pac from "../../img/PacYellow.png"
import Snake from "../../img/snake.png"
import Terminal from "../../img/terminal.png"
import Tic from "../../img/tic1.png"
import Twiter from "../../img/twiter.png"
import Watsap from "../../img/watsap.png"
import Vue from "../../img/vue.png"
import Bicho from "../../img/bichoWhite.png"
import Html from "../../img/html.gif"
import Css from "../../img/css.gif"
import Visual from "../../img/visual.gif"
import Js from "../../img/js.png"
// import Reactt from "../../img/react.gif"
import Linux from "../../img/linux.png"
import Paint from "../../img/paint3d.png"
import Window from "../../img/window.png"
import Discord from "../../img/discord.png"
import Git from "../../img/git.png"
import Docker from "../../img/docker.png"
import Php from "../../img/php.png"
import Obs from "../../img/obs.png"
import Pizza from "../../img/pizza.png"
import Champi from "../../img/champi.png"
import Bootstrap from "../../img/bootstrap.gif"
import Sandwich from "../../img/sandwich.png"
import Earth from "../../img/earth.png"
import Moon from "../../img/mooon.gif"
import Neptune from "../../img/neptune.png"
import Pluto from "../../img/pluto.png"
import Jupiter from "../../img/jupiter.gif"
import Venus from "../../img/venus.gif"
import Mercurio from "../../img/mercurio.gif"
import Saturn from "../../img/saturn.png"
import Uranus from "../../img/uranus.png"
import Mars from "../../img/mars.png"

const  Proyects = () => {


  const [size, setSize] = useState("280px");
 
  
function changeSize (){
  setSize(size === "280px" ? "100%" : "280px");
}


  return (
    <div>
        {/* <div className="title">
          <h1> Icons </h1>
        </div> */}
        <div className="box-icons"
         style={{height: size}}

         >
           
          <div className="icon" style={{backgroundImage: `url(${Github})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Linkedin})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Discord})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Alienverde})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Bootstrap})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Cube})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Html})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Css})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Js})`}}></div>
          {/* <div className="icon" style={{backgroundImage: `url(${Fo})`}}></div> */}
          <div className="icon" style={{backgroundImage: `url(${Google})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Pac})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Visual})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Docker})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Php})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Git})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Snake})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Terminal})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Tic})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Twiter})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Watsap})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Vue})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Bicho})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Drag})`}}></div>
          {/* <div className="icon" style={{backgroundImage: `url(${Reactt})`}}></div> */}
          <div className="icon" style={{backgroundImage: `url(${Linux})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Paint})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Window})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Obs})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Pizza})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Champi})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Sandwich})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Earth})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Pluto})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Mercurio})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Uranus})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Moon})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Jupiter})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Venus})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Neptune})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Mars})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Saturn})`}}></div>
        </div>

       
        <div className='vermas'  onClick={changeSize}><h1 className='trespuntos'>. . .</h1>
        </div> 
      
  
       
    </div>
  )
}

export default  Proyects