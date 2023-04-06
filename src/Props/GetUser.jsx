import React from 'react'

const GetUser = ({user}) => {
  return (
    <div>
      
      {
        user.map((d,index)=>{
            return(
                <>
                <h1>{index}   {d.name}</h1>
                
                </>
            )
        })
      }
    </div>
  )
}

export default GetUser
