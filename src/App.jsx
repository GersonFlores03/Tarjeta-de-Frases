import { useState } from 'react'
import reactLogo from './assets/react.svg'
import quotes from "./quotes.json"
import './App.css'

function App() {
  console.log(quotes)
  const random = Math.floor(Math.random()* quotes.length)
  const [index, setIndex] = useState(random)
  
  const Siguiente = () => {
    const newRamdon = Math.floor(Math.random()* quotes.length)
    setIndex(newRamdon)
  }
  const colorsAleatory= ["#845EC2","#936C00","#2C73D2","#FF6F91","#00D2FC","#008D82","#FF334C"]
  const randomColors = Math.floor(Math.random()* colorsAleatory.length)
  document.body.style=`background : ${colorsAleatory[randomColors]}`

  return (
     <div className="QuoteBox" style={{color: colorsAleatory[randomColors]}}>
     <div className='Contenido'>
     <i  className="fa-solid fa-quote-left"></i>
     <p> {quotes[index].quote} </p>
     <div className='Conter'>
     <h1> {quotes[index].author} </h1>
     <button onClick={Siguiente} style={{background: colorsAleatory[randomColors]}}><i className="fa-solid fa-angle-right"></i></button>
     </div>
    </div>
    </div>
  )
}

export default App
