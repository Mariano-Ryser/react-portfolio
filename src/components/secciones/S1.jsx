import React, { useState } from 'react'
import "./s1.css"



const  S1 = () => {
  
  const [size, setSize] = useState(150)
  
  function changeSize() {
    setSize(size <= 150 ? 400 : 1)
  }

 
  return (
  <div>
    <div className="s1"
        style={{height: size + "px"}} 
      >

        
          
    </div>
          <div className='vermass' onClick={changeSize}><h1 className='trespuntoss'>. . .</h1></div>

         
  </div>
  )
}

export default S1