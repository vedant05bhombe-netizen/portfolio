import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Homepage from './Homepage'
import About from './About'
import { Routes, Route } from "react-router-dom"; 
import Project from './Project'
import Contact from './Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
       <Route path="/project" element={<Project />} />
       <Route path="/contact" element={<Contact />} />
      
    </Routes>
    </>
  )
}

export default App
