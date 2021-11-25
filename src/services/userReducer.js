import { closeButton, disconected, editError, loginError, loginSuccess, openButton, profile } from "./actions"

const initialState = {
        firstName: "",
        lastName: "",
        email:"",
        token:"",
        isLogged: false,
        isOpen: false,
        isUpdated: false,
        error: null
    }
export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case loginSuccess:
            const profil = action.payload
            return {
                ...state,
                firstName: profil.firstName,
                lastName: profil.lastName,
                isLogged: true,
            }
        case loginError:
            return {
                ...state,
                isLogged: false,
                error: action.payload,
            }
        case disconected:
            localStorage.clear()
            return {
                ...state,
                isLogged: false,
                isOpen:false,
                error: null
            }
        case profile:
            return{
                ...state,
                isUpdated: true,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            }
            case editError:
            return{
                ...state,
                isUpdated: false,
                error: action.payload
            }
        case openButton:
            return{
                ...state,
                isOpen: true,
            }
        case closeButton:
            return {
                ...state,
                isOpen:false
            }
        default:
            return state
    }
}
