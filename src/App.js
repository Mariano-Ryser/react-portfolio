import React, { useState, useEffect} from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";

function App() {
  
  return (
    <div className="App">
        <Intro />
        <About />
    </div>
  );
}

export default App;
