import React, { useState, useEffect }from 'react'
import "./act1.css"
import Spiner from "./Spiner"


const initialSentences = {
  quote:"hola texto",
  author:"hola author",
}
const  About = () => {

  const [quote, setQuote] = useState(initialSentences)
  const [loading, setLoading] = useState(false)

const updateQuote = async () => {
  setLoading(true);
  const url = "https://breakingbadapi.com/api/quote/random";
  const res = await fetch(url);
  const [newQuote] = await res.json();
  console.log(newQuote);

  // const{ quoute: text, author} = newQuote;

  setQuote({
    text: newQuote.quote,
    author: newQuote.author,
  })
  setLoading(false);
}

  useEffect(()=>{
    updateQuote();
  },[]);
  return (
    
    <div className='a1' >

      
        <div className="aLeft">

        <div className="card">
            
          </div>
          {
            loading ? <h1><Spiner/></h1> : <div>
            <h1 className='text'>{quote.text}</h1>
            <h3 className='author'>{quote.author}</h3>
            </div>
            
          }
          <button 
          onClick={()=> updateQuote()}
          className='button'
          >Get Another sentence</button>
          
        </div>







        <div className="aRight">
        <h1>Aqui tambien</h1>

          </div>
        
    </div>
  )
}

export default  About