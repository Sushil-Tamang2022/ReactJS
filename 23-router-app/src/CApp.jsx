import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CLayout from "./components/CLayout"
import Home from "./pages/portfolio/Home"
import About from "./pages/portfolio/About"
import Contact from "./pages/portfolio/Contact"
import Experience from "./pages/portfolio/Experience"
import Projects from "./pages/portfolio/Projects"
import Resume from "./pages/portfolio/Resume"
import Skills from "./pages/portfolio/Skills"

const CApp = () => {
  return (
    <div>
      <h1>Hey</h1>
      <Router>
        <Routes>
            <Route path='/' element={<CLayout />}>
                <Route index element={<Home />}/>
                <Route path='about' element={<About />}/>
                <Route path='contact' element={<Contact />}/>
                <Route path='experience' element={<Experience />}/>
                <Route path='projects' element={<Projects />}/>
                <Route path='resume' element={<Resume />}/>
                <Route path='skills' element={<Skills />}/>
            </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default CApp
