import React, { useState } from 'react'

const ArrayOfObject = () => {

    const Student=[
        {
            name:"Raju",
            city:"kolkata",
            phone:"9988969865"
        },
        {
            name:"Abanti",
            city:"jadavpur",
            phone:"9988969865"
        },
        {
            name:"Atanu",
            city:"kolkata",
            phone:"9988969812"
        }
    ]
const [students,setStudent]=useState(Student);

const ClearData=()=>{
    setStudent([])
}
  return (
    <>
      <h1>Array of Object</h1>
      {
        students.map((data,index)=>{
            return(
                <>
                <h1>Name : {data.name}, City: {data.city}, phone {data.phone}</h1>
                </>
            )
        })
      }
      <button onClick={ClearData}>ClearData</button>

    </>
  )
}

export default ArrayOfObject
