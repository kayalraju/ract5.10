import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import User from './User'
import UserDetails from './UserDetails'

const AxiosRouting = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<User/>}/>
            <Route path='/userdetails/:id' element={<UserDetails/>}/>
        </Routes>
    </Router>
      
    </>
  )
}

export default AxiosRouting
