import React from 'react'

const Product = (props) => {
  const {name,Student}=props
  return (
    <div>
      <h1>Product  {name} {Student.name}</h1>
    </div>
  )
}

export default Product
