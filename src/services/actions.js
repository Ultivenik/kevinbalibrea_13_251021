import { postUserLogin, postUserProfile, putUserProfile } from "./api"

// export const AUTHENTIFICATION_USER = {
//     type: "AUTHENTIFICATION_USER",
//     payload:"authentified"
// }
// export const FIRST_NAME = {
//     type: "FIRST_NAME",
//     payload:"first name"
// }
// export const LAST_NAME = {
//     type: "LAST_NAME",
//     payload:"last name"
// }
// export const DECONECT = {
//     type: "DECONECT",
//     payload:"disconected"
// }

export const login = ({email, password}) => {
    return async (dispatch, getState) => {
        const response = await postUserLogin({email, password})
        try {
            localStorage.setItem('JWT', response.body.token)
            const profilResponse = await postUserProfile()
            dispatch({type: "login/success", payload: profilResponse.body})
        } catch(error) {
            dispatch({type: "login/error", payload: error.message})
        }
    }
}

export const edit = ({firstName, lastName}) => {
    return async (dispatch) => {
        const response = await putUserProfile({firstName, lastName})
        try {
            dispatch({type: "edit/profile", payload: response.data.body})
            console.log(dispatch({type: "edit/profile", payload: response.data.body}));
        } catch (error) {
            dispatch({type: "edit/error", payload: error.message})
        }
    }
}