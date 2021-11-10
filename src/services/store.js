// import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userReducer'

export const store = configureStore({reducer: userReducer})
// export const store = createStore({reducer: userReducer})
