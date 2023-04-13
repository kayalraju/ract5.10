import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbarrr from './Navbarrr'
import NoteState from '../Notes/NoteState'
import Student from './Student'
const RoutingContex = () => {
  return (
    <>
    <NoteState>
    <Router>
        <Navbarrr/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/student' element={<Student/>}/>
        </Routes>
      </Router>
    </NoteState>
      
    </>
  )
}

export default RoutingContex
