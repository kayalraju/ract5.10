import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import AddUser from './Components/AddUser'
import Edit from './Components/Edit'

const Routingss = () => {
  return (
    <>

    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
    </Router>
      
    </>
  )
}

export default Routingss
