import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import "./nav.css"



function  Nav () {
  

  const [show, setShow] = useState(false)

 function showme() {
   setShow(show === !true)
  }
 

  return (
  <div>
     
    <div className="s1">
      <nav>
        <div className="toggle"
              onClick={showme}
              
        ></div>
        {
              show && (
                  <div className="toggle-box"
                       >
                  <ul>
                    <Link to="Link1">
                        <li>Link1</li>
                    </Link>
                    <Link to="Link2">
                        <li>Link2</li>
                    </Link>
             
                
                  </ul>
              </div>
          )
        }
        
      </nav>
    
    </div>
      
  </div>
  
  )
}

export default Nav