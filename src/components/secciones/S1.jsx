import React, { useState } from 'react'
import "./s1.css"



const  S1 = () => {
  const [size, setSize] = useState(100)
  
  function changeSize() {
    setSize(size === 100 ? 400 : 100)
  }
  
  return (
    <div className='s1'
        style={{height: size + "px"}} 
    //    onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}
         >
        
    
        <div onClick={changeSize} style={{display:"flex", justifyContent:'center'}}> <h1 className='verPlus'>. . .</h1></div>
    </div>
  )
}

export default S1