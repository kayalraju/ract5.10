import React, { useEffect, useState } from 'react'
import GetUser from './GetUser';

const User = () => {
const[user,setUser]=useState([])

const getUser= async()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await response.json();
    setUser(data)

}
useEffect(()=>{
    getUser()
},[])


  return (
    <div>
      <h1>user page</h1>
      <GetUser user={user}/>
    </div>
  )
}

export default User
