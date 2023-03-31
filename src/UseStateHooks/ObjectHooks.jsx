import React, { useState } from 'react'

const ObjectHooks = () => {
  const user={name:"Raju",age:"27",city:"baruipur"}
  const [users,setUser]=useState(user)
// const UpdateCity=()=>{
//   setUser({
//     name:"Raju", age:"27",city:"kolkata"
//   })
// }
const UpdateCity=()=>{
  setUser({...users,name:"Abanti"})
}

  return (
    <div>
      <h1>Object jsx</h1>
      <h2>my name is {users.name}</h2>
      <h2>my age is {users.age}</h2>
      <h2>my city is {users.city}</h2>

      <button onClick={UpdateCity}>Update city</button>
    </div>
  )
}

export default ObjectHooks
