import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Editdata, UpdateUser } from '../Service/Api'

const initialValues = {
    name: '',
    email: '',
    phone: '',
  
}

const Edit = () => {
    const [user, setUser] = useState(initialValues)
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    const validation = () => {
        let error = {}

        if (!user.name) {
            error.name = "Name is Required"
        }

        if (!user.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
        ) {
            error.email = "Enter a valid Email"
        }

        if (!user.phone) {
            error.phone = "Phone is Required"
        }

        return error
    }

    let name ,value
    const postUserData = (e) => {
        name = e.target.name
        value = e.target.value

        setUser({ ...user, [name]: value })

        if (name === "name") {
            if (value.length === 0) {
                setError({ ...error, name: "@Name is Required" })
                setUser({ ...user, name: "" })
            } else {
                setError({ ...error, name: "" })
                setUser({ ...user, name: value })
            }
        }

        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "@Email is Required" })
                setUser({ ...user, email: "" })
            } else {
                setError({ ...error, email: "" })
                setUser({ ...user, email: value })
            }
        }

        if (name === "phone") {
            if (value.length === 0) {
                setError({ ...error, phone: "@Phone is Required" })
                setUser({ ...user, phone: "" })
            } else {
                setError({ ...error, phone: "" })
                setUser({ ...user, phone: value })
            }
        }

    }

    const SubmitInfo =async (e) => {
        e.preventDefault()
        let ErrorList = validation()
        setError(validation())
        if (Object.keys(ErrorList).length === 0) {
            let reg = {
                name: user.name,
                email: user.email,
                phone: user.phone,
            }
           
        }   

    }

    //update data 
    const UpdateUserData = async () => {
        await UpdateUser(user, id)
        navigate('/')
    }

    //edit
    const getUserData = async () => {
        let response = await Editdata(id)
        setUser(response.data)
    }

useEffect(()=>{
    getUserData()
},[])
  return (
    <>

<form onSubmit={SubmitInfo} className="container mt-5">
                <h4> Edit User </h4>
                <div>
                    <label> Name </label>
                    <input type="text" className="form-control"
                        name="name" value={user.name}
                        onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}>
                        {error.name}
                    </span>
                </div>
                <div>
                    <label> Email </label>
                    <input type="email" className="form-control" name="email" value={user.email} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.email} </span>
                </div>
                <div>
                    <label> Phone </label>
                    <input type="number" className="form-control" name="phone" value={user.phone} onChange={e => postUserData(e)} />
                    <span style={{ color: "red", marginLeft: "24px" }}> {error.phone} </span>
                </div>

                <div>
                    <button type="submit" className="btn btn-success px-4 py-2" onClick={() => UpdateUserData()}> Edit User </button>
                </div>
            </form>
      
    </>
  )
}

export default Edit
