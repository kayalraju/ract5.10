import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import AddUser from './Components/AddUser'

const Routingss = () => {
  return (
    <>

    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
        </Routes>
    </Router>
      
    </>
  )
}

export default Routingss
