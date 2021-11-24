import { postUserLogin, postUserProfile, putUserProfile } from "./api"

export const login = ({email, password}) => {
    return async (dispatch) => {
        const response = await postUserLogin({email, password})
        try {
            localStorage.setItem('JWT', response.body.token)
            const profilResponse = await postUserProfile()
            dispatch({type: "login/success", payload: profilResponse.body})
        } catch(error) {
            console.log(dispatch({type: "login/error", payload: error.message}));
            dispatch({type: "login/error", payload: error.message})
        }
    }
}

export const edit = ({firstName, lastName}) => {
    return async (dispatch) => {
        const response = await putUserProfile({firstName, lastName})
        try {
            dispatch({type: "edit/profile", payload: response.data.body})
        } catch (error) {
            dispatch({type: "edit/error", payload: error.message})
        }
    }
}