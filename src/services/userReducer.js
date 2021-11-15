import {AUTHENTIFICATION_USER, DECONECT, FIRST_NAME} from './actions'

const initialState = {
        firstName: "",
        lastName: "",
        email:"",
        token:"",
        isLogged: false,
        isOpen: false
}
export const userReducer = (state = initialState, action) => {
    const profil = action.payload
    switch(action.type) {
        case "login/success":
            return {
                ...state,
                firstName: profil.firstName,
                lastName: profil.lastName,
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
        case "login/disconected":
            localStorage.clear()
            return {
                isLogged: false,
                // ..........
            }
        case "edit/profile":
            return{
                ...state,
                isOpen: true,
            }
        case "edit/closeButton":
            return {
                ...state,
                isOpen:false
            }

        default:
            return state
    }
}
