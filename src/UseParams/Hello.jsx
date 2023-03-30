import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = () => {
    const {id,name}=useParams()
  return (
    <div>
      <h1>Hello  {id} / {name}</h1>
    </div>
  )
}

export default Hello
