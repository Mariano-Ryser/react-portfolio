import React from 'react'
import "./proyects.css"
import Alienverde from "../../img/Alienverde.gif"
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Drag from "../../img/drag2.png"
import Cube from "../../img/cubegif.gif"
import Fo from "../../img/fo.gif"
import Google from "../../img/googleLogo.png"
import Pac from "../../img/PacYellow.png"
import Snake from "../../img/snake.png"
import Terminal from "../../img/terminal.png"
import Tic from "../../img/tic1.png"
import Twiter from "../../img/twiter.png"
import Vue from "../../img/vue.png"
import Bicho from "../../img/bichoWhite.png"
import Html from "../../img/html.gif"
import Css from "../../img/css.gif"
import Visual from "../../img/visual.gif"
import Js from "../../img/js.png"
import Reactt from "../../img/react.gif"
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

const  Proyects = () => {

  return (
    <div>
        <div className="title">
          <h1>
                Interactive Icons 
          </h1>
        </div>
        <div className="box-icons">
          <div className="icon" style={{backgroundImage: `url(${Github})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Linkedin})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Alienverde})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Drag})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Cube})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Fo})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Discord})`}}></div>
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
          <div className="icon" style={{backgroundImage: `url(${Vue})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Bicho})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Css})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Bootstrap})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Html})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Js})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Reactt})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Linux})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Paint})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Window})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Obs})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Pizza})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Champi})`}}></div>
          <div className="icon" style={{backgroundImage: `url(${Sandwich})`}}></div>
        </div>
    </div>
  )
}

export default  Proyects