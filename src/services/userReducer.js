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
        case AUTHENTIFICATION_USER :
            return {
            ...state,
            email: action.email,
            password: action.password,
            token: action.token,
            isLogged: true,
        }
        case FIRST_NAME:
            return {
                ...state,
                firstName: action.firstName
            }
        case DECONECT:
            return {
                ...state,
                lastName: action.lastName
            }
        default:
            return state
    }
}
