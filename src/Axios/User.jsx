import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const User = () => {
    const[user,setUser]=useState([])
    const BaseUrl='https://jsonplaceholder.typicode.com'
    const getUser=async()=>{
        const response=await axios.get(`${BaseUrl}/users`)
        setUser(response?.data)
    }
    useEffect(()=>{
        getUser()
    },[])
    console.log(user);
  return (
    <div>
      <h1>user</h1>
      <div className="container">
                <div className="row">
                    {
                        user.map((datas,index)=>{
                            return(
                                <>
                                <div className="col-md-4">
                                        <div class="card" style={{ width: "18rem" }}>
                                            <div class="card-body">
                                                <h5 class="card-title">Name: {datas.name} </h5>
                                                
                                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                               
                                                <Link to={`/userdetails/${datas.id}`} class="card-link">Another link</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                   
                                    
                               

                </div>
            </div>
    </div>
  )
}

export default User
