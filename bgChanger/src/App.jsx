import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className="w-100" style={{ backgroundColor: color, height: '100vh' }}></div>
      
      <div className="position-fixed d-flex flex-wrap justify-content-center p-5" style={{ bottom: '3rem' }}>
        <div className="d-flex flex-wrap justify-content-center p-3 badge rounded-pill ">
        <button className="btn p-2" style={{backgroundColor: 'red' , color:'white'}} onClick={()=>setColor("red")}>Red</button>
        <button className="btn p-2" style={{backgroundColor: 'Blue' , color:'white'}} onClick={()=>setColor("blue")}>Blue</button>
        <button className="btn p-2" style={{backgroundColor: 'pink' , color:'white'}} onClick={()=>setColor("pink")}>Pink</button>
        <button className="btn p-2" style={{backgroundColor: 'black' , color:'white'}} onClick={()=>setColor("black")}>Black</button>

        </div>
      </div>
    </>
  )
}

export default App
