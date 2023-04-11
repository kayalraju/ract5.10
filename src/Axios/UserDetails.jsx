import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const[single,setSingle]=useState({})
    const {id}=useParams()
    const BaseUrl='https://jsonplaceholder.typicode.com/users'
    const getSingledata=async()=>{
        const response=await axios.get(`${BaseUrl}/${id}`)
        setSingle(response?.data)

    }
    useEffect(()=>{
        getSingledata()
    },[])
    console.log(single);
  return (
    <div>
      <h1>User Details</h1>
      <h1>NAme : {single.name}</h1>
    </div>
  )
}

export default UserDetails
