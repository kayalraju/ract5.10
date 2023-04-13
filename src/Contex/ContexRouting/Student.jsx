import React, { useContext } from 'react'
import NoteContex from '../Notes/NoteContex'

const Student = () => {
    const data=useContext(NoteContex)
  return (
    <div style={{marginTop:"100px"}}>
      <h1>Student Component</h1>
      <h1>{data.name}</h1>
    </div>
  )
}

export default Student
