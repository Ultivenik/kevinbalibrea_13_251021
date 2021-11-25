import React from 'react'
import './../main.css'
import logo from "../../img/argentBankLogo.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { disconected } from '../../services/actions'

export default function Header() {
    const dispatch = useDispatch()
    const firstName = useSelector(state => state.firstName)
    const isLogged = useSelector(state => state.isLogged)

    const logout = () =>{
        dispatch({type: disconected})
    }

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank </h1>
            </Link>
            { isLogged ? <div className="user-status">
                    <Link className="main-nav-item" to="/user" >
                        <i className="fa fa-user-circle"></i>
                        {firstName}
                    </Link>
                    <Link onClick={ logout } className="main-nav-item" to="/">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div> :
                <div className="user-status">
                    <Link to="/login" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            }
        </nav>
    )
}
