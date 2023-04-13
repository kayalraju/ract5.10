import React,{useContext} from 'react'
import NoteContex from '../Notes/NoteContex';

const About = () => {
  const data=useContext(NoteContex)
  return (
    <div style={{marginTop:"100px"}}>
    <h1>About Page</h1>
    <h1>{data.name}</h1>
  </div>
  )
}

export default About
