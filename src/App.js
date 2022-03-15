import React, { useState, useEffect} from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About"
import Proyects from "./components/proyects/Proyects";
import Contact from "./components/contact/Contact"

import Post from "./post/Post"
import S1 from "./components/secciones/S1";



function App() {
 
  
  return (
    <div className="App">
          <Intro />   
         {/* <S1 />    */}
         <Proyects /> 
        <About />
        <Contact />  
     
        
    </div>
  );
}

export default App;
