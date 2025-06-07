import { useState } from 'react'
import {Nav1} from './components/nav.jsx'
import './App.css'
import Mycard from './components/mycard.jsx'
import About from './components/about.jsx'
import Work from './components/work.jsx'
import Projects from './components/projects.jsx'
import Contact from './components/contact.jsx'


function App() {
  

  return (
    <>
    <Nav1 />
    <Mycard />
    <Work />  
    <Projects />
    <Contact />
    

    </>
    
  )
}

export default App
