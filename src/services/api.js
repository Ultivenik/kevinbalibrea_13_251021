import axios from 'axios'

const baseURL = "http://localhost:3001/api/v1/user/"

export const postUserLogin = async (credentials) => {
   const response =  await axios.post(baseURL + "login", credentials)
    return response.data
}

export const postUserSignup = async (state) => {
    return axios.post(baseURL + "signup", {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        password: state.password
    })
}

export const postUserProfile = async () =>{
    const response = await axios.post(baseURL + "profile", {}, {
        headers : {
            Authorization : "Bearer " + localStorage.getItem("JWT")
        }
    })

    return response.data
}

export const putUserProfile = async ({firstName,lastName}) => {
    return axios.put(baseURL + "profile", {firstName,lastName}, {
        headers : {
            Authorization : "Bearer " + localStorage.getItem("JWT")
        }
    })
}
