import React from 'react'
import NoteContex from './NoteContex'


const NoteState = ({children}) => {
    const state={
        name:"Ritam saha",
        email:"ritam@gmail.com",
        phone:"9966989856"
    }
  return (
    <>
      <NoteContex.Provider value={state}>
        {children}
      </NoteContex.Provider>
    </>
  )
}

export default NoteState
