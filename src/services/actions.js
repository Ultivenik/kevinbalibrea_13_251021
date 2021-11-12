import { postUserLogin, postUserProfile } from "./api"

export const AUTHENTIFICATION_USER = {
    type: "AUTHENTIFICATION_USER",
    payload:"authentified"
}
export const FIRST_NAME = {
    type: "FIRST_NAME",
    payload:"first name"
}
export const LAST_NAME = {
    type: "LAST_NAME",
    payload:"last name"
}
export const DECONECT = {
    type: "DECONECT",
    payload:"disconected"
}

export const login = ({email, password}) => {
    return async (dispatch, getState) => {
        try {
            const { token } = await postUserLogin({email, password})
            localStorage.setItem('JWT', token)
            const profil = await postUserProfile()
            dispatch({type: "login/success", payload: profil})
        } catch(error) {
            if (localStorage.getItem('JWT')) {
                dispatch({type: "login/error", payload: error.message})
            }
        }
    }
}