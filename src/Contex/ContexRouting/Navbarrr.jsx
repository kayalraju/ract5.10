import React from 'react'
import { Link } from 'react-router-dom'

const Navbarrr = () => {
  return (
    <>

<header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo mr-auto"><a href="index.html"><img class="hello" src="./assets/img/logo.png" /></a></h1>
      

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><Link to="/">Home</Link></li>
          <li class="active"><Link to="/student">Student</Link></li>

          <li class="drop-down"><Link to="/about">About</Link>
           
          </li>

         

        </ul>
      </nav>

    </div>
  </header>
      
    </>
  )
}

export default Navbarrr
