import axios from 'axios'

const baseURL = "http://localhost:3001/api/v1/user/"

export const postUserLogin = async (credentials) => {
   const response =  await axios.post(baseURL + "login", credentials)
   localStorage.setItem("JWT", response.data.body.token)

    return true
}

export const postUserSignup = async (state) =>{
    return axios.post(baseURL + "signup", {
        email: state.email,
        password: state.password
    })
}

export const postUserProfile = async () =>{
    return axios.post(baseURL + "profile", {
        headers : {
            Authorization : "Bearer " + localStorage.getItem("JWT")
        }
    })
}

export const putUserProfile = async () => {
    return axios.put(baseURL + "profile")
}
