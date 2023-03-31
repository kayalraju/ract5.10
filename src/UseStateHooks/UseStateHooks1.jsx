import React, { useState } from 'react'

const UseStateHooks1 = () => {

    const [user,setUser]=useState("Raju kayal");
    
    const ChangeName=()=>{
        setUser('Pritam Saha')
    }
  return (
    <div>
      <h1>hello Raect</h1>
      <h1>{user}</h1>
      <button onClick={ChangeName}>ClickMe</button>
    </div>
  )
}

export default UseStateHooks1
