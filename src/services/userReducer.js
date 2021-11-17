// import {AUTHENTIFICATION_USER, DECONECT, FIRST_NAME} from './actions'

const initialState = {
        firstName: "",
        lastName: "",
        email:"",
        token:"",
        isLogged: false,
        isOpen: false,
        isUpdated: false
}
export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "login/success":
            const profil = action.payload
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
                ...state,
                isLogged: false,
                isOpen:false
                // ..........
            }
        case "edit/profile":
            return{
                ...state,
                isUpdated: true,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            }
            case "edit/error":
            return{
                ...state,
                isUpdated: false,
                error: action.payload
            }
        case "edit/openButton":
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
