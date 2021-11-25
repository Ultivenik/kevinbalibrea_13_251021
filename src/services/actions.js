import { postUserLogin, postUserProfile, putUserProfile } from "./api"

export const loginSuccess = "login/success"
export const loginError = "login/error"
export const profile = "edit/profile"
export const editError = "edit/error"
export const closeButton = "edit/closeButton"
export const openButton = "edit/openButton"
export const disconected = "login/disconected"

export const login = ({email, password}) => {
    return async (dispatch) => {
        try {
            const response = await postUserLogin({email, password})
            localStorage.setItem('JWT', response.body.token)
            const profilResponse = await postUserProfile()
            dispatch({type: loginSuccess, payload: profilResponse.body})
        } catch(error) {
            dispatch({type: loginError, payload: error.message})
        }
    }
}

export const edit = ({firstName, lastName}) => {
    return async (dispatch) => {
        try {
            const response = await putUserProfile({firstName, lastName})
            dispatch({type: profile, payload: response.data.body})
        } catch (error) {
            dispatch({type: editError, payload: error.message})
        }
    }
}