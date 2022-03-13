import React, { useState } from 'react'
import "./s1.css"



const  S1 = () => {
  const [size, setSize] = useState(400)
  
  function changeSize() {
    setSize(size === 300 ? 600 : 300)
  }
  
  return (
    <div className='s1'
        style={{height: size + "px"}} 
    //    onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}
         >
        
    
        <div onClick={changeSize}> <h1>. . .</h1></div>
    </div>
  )
}

export default S1