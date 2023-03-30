import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Hello from './Hello'
import Menu from './Menu'
import PageNotFound from './PageNotFound'

const Routing = () => {
  return (
    <>
      <Router>
     
      <Routes>
       <Route  path='/' element={<Menu/>}/>
       <Route  path='/hello/:id/:name' element={<Hello/>}/>
       <Route path='*' element={<PageNotFound/>}/>
       
      </Routes>
     
    </Router>
    </>
  )
}

export default Routing
