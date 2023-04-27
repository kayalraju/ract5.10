import axios from "axios";

const BaseURL = 'http://127.0.0.1:3004/users'

export const addUser = async (data) => {
    try {
        return await axios.post(BaseURL, data)
    }
    catch (error) {
        console.log('Error while calling addUser API', error.message)
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(BaseURL)
    }
    catch (error) {
        console.log('Error while calling getUsers API', error.message)
    }
}

export const Editdata = async data => {
    try {
        return await axios.get(`${BaseURL}/${data}`)
    }
    catch (error) {
        console.log('Error while calling getUser API', error.message)
    }
}

export const UpdateUser = async (data, id) => {
    try {
        return await axios.put(`${BaseURL}/${id}`, data)
    }
    catch (error) {
        console.log('Error while calling editUser API', error.message)
    }
}


export const deleteUser = async id => {
    try {
        return await axios.delete(`${BaseURL}/${id}`)
    }
    catch (error) {
        console.log('Error while calling deleteUser API', error.message)
    }
}