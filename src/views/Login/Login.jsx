import React from 'react'
import { Redirect } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Login.css'
import { login } from '../../services/actions'
import { useDispatch, useSelector } from 'react-redux'


export default function Login() {
    const dispatch = useDispatch()
    const error = useSelector(state => state.error)
    const isLogged = useSelector(state => state.isLogged)

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(login( {
            email: e.target[0].value,
            password: e.target[1].value
        })
        .then(() => {
            dispatch({type: "AUTHENTIFICATION_USER"})
            postUserProfile()
            .then(postUser =>{
                const state = store.getState()
               console.log(postUser.data.body);
            })
            redirect("/user")
        })
        .catch(err => console.error(err))
        )
    }

    return isLogged ? <Redirect
            to={{
            pathname: "/user",
            }}
        /> : (
        <React.Fragment>
            <Header />
            <main className="main bg-dark">
                { error && <div>{error}</div>}
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
