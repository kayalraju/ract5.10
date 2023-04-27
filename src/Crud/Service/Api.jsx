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