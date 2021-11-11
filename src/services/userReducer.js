import {AUTHENTIFICATION_USER, DECONECT, FIRST_NAME} from './actions'

const initialState = {
        firstName: "",
        lastName: "",
        password: "",
        email:"",
        token:"",
        isLogged: false,
}
export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "login/success":
            const profil = action.payload
            return {
                ...state,
                firstName: profil.firstName,
                isLogged: true,
                // ..........
            }
        case "login/error":
            return {
                ...state,
                isLogged: false,
                error: action.payload,
                // ..........
            }
        default:
            return state
    }
}
