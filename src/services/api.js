import React from 'react'

const postUserLogin = () => {
    const post = axios.post("http://localhost:3001/api-docs/#/User%20Module/post_user_login")
}

const postUserSignup = () =>{
    const post = axios.post("http://localhost:3001/api-docs/#/User%20Module/post_user_signup")
}

const postUserProfile = () =>{
    const post = axios.post("http://localhost:3001/api-docs/#/User%20Module/post_user_profile")
}

const putUserProfile = () => {
    const putUser = axios.put("http://localhost:3001/api-docs/#/User%20Module/put_user_profile")
}