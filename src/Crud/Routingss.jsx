import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import AddUser from './Components/AddUser'
import Edit from './Components/Edit'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Routingss = () => {
  return (
    <>
<ToastContainer/>
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
