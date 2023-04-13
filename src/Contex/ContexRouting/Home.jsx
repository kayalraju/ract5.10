import React,{useContext} from 'react'
import NoteContex from '../Notes/NoteContex';

const Home = () => {
 const data=useContext(NoteContex)
 const {name,email,phone}=data
  return (
    <div style={{marginTop:"100px"}}>
      <h1>Home Page</h1>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{phone}</h1>
    </div>
  )
}

export default Home
