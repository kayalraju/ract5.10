import React from 'react'

function Student(props){
    return (
        <>
        <h1>I am a Student ,my name is {props.name} </h1>
        </>
    )
}

const User = () => {
  return (
    <div>
      <h1>User</h1>
      <Student name="Raju kayal"/>
    </div>
  )
}

export default User
