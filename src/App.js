import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navabar'
import Home from './components/home/Home'
import Education from './components/education/Education'
import Project from './components/projects/Project'
import Footer from './components/footer/Footer'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
