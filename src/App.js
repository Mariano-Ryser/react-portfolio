import React, { useState, useEffect} from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About"
import Proyects from "./components/proyects/Proyects";
import Contact from "./components/contact/Contact"
import Intro2 from "./components/intro2/Intro";
import Presentation from "./components2/presentation/Presentation";


function App() {
  console.log("!!!!!----No es solo esto, hay mucho trabajo atras que no se puede ver, pero esto es solo lo que deje por el momento..Gracias por vivistar!")
  console.log("Puedes visitar Descargar el proyecto de github y verlo completo =D")
  return (
    

    <div className="App">
      <Presentation />


















          {/* { <Intro2 /> 
          <About />    */}
         {/* <Intro />       */}
          <Proyects />  
         {/* <Contact />        */}
    </div>
    
  );
}

export default App;
