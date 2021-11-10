import React from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Login.css'
import { postUserLogin, postUserProfile } from '../../services/api'
import { useDispatch } from 'react-redux'
import {store} from "./../../services/store"


export default function Login() {
    const dispatch = useDispatch()
    const history = useHistory()
    const redirect = (URL) =>{
        let url = URL
        history.push(url)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
         postUserLogin({
            email: e.target[0].value,
            password: e.target[1].value
        })
        .then(response => {
            dispatch({type: "AUTHENTIFICATION_USER"})
            postUserProfile()
            .then(response =>{
                store.
            })
            redirect("/user")
            console.log(store.getState());
        })
        .catch(err => console.error(err))
    }

    return (
        <React.Fragment>
            <Header />
            <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>

                <form onSubmit={ handleSubmit }>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign in </button>
                </form>


            </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}
