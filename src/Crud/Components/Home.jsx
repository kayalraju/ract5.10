import React, { useEffect, useState } from 'react'
import {Link}from 'react-router-dom'
import { getUsers } from '../Service/Api'


const Home = () => {
  const [users, setUsers] = useState([])

  const getUsersDetails = async () => {
      let response = await getUsers()
      // console.log(response)
      setUsers(response.data)
  }

  useEffect(() => {
      getUsersDetails()
  }, [])
  return (
    <>

    <div className='container mt-5'>
    <Link to='/adduser' className='btn btn-info'>AddUser</Link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">Phone</th>
      <th colSpan={2}>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((d)=>{
        return(
          <>
          <tr>
      <th scope="row">{d.id}</th>
      <td>{d.name}</td>
      <td>{d.email}</td>
      <td>{d.phone}</td>
      <td><Link to='/update' className='btn btn-success'>Update</Link></td>
      <td><Link to='/delete' className='btn btn-danger'>Delete</Link></td>
    </tr>
          </>
        )

      })
    }
    
    
   
  </tbody>
</table>

    </div>
      
    </>
  )
}

export default Home