import React, { useState, useEffect} from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About"
import Proyects from "./components/proyects/Proyects";

function App() {
  
  return (
    <div className="App">
        <Intro />
        <About />
        <Proyects /> 
    </div>
  );
}

export default App;
