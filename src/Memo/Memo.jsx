import React, { useState } from 'react'
import User from './User'

const Memo = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
      <h1>Memo in react    {count}</h1>
      <User data="raju"/>

      <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
  )
}

export default Memo
