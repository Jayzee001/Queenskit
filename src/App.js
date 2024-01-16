import React from 'react'
import Nav from './QueenKit/Nav'
import Home from './QueenKit/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './QueenKit/About';
import Contact from './QueenKit/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foot from './QueenKit/footer';
import './App.css';






const App = () => {

  


  return (
    <div className ='foodie' style={{gap:'1rem'}}> 
    <Router>
        <Nav />
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          
        </Routes>
        <Foot />
      </Router>
      </div>

  )
}

export default App








