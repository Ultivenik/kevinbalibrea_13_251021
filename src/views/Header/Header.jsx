import React from 'react'
import './Header.css'
import logo from "../../img/argentBankLogo.png"
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const location = useLocation()
    const firstName = useSelector(state => state.firstName)

    const logout = () =>{
        localStorage.clear()
    }
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            { location.pathname === "/user" ? <div>
                    <Link className="main-nav-item" to="/user" >
                        <i className="fa fa-user-circle"></i>
                        {firstName}
                    </Link>
                    <Link onClick={logout} className="main-nav-item" to="/">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div> :
                <Link to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            }
        </nav>
    )
}
