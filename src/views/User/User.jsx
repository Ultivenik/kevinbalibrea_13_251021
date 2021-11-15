import React from 'react'
import './User.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import FormEditProfile from '../FormEditProfile/FormEditProfile'
import { useDispatch } from 'react-redux'

export default function User() {
    const dispatch = useDispatch()
    const name = useSelector(state => state.firstName)
    const lastName = useSelector(state => state.lastName)
    const isOpen = useSelector(state => state.isOpen)

    const formOpen = () =>{
        dispatch({type:"edit/profile"})
    }

    return (
        localStorage.getItem("JWT") === null ? <Redirect to={{pathname: "/login"}} /> :
        <React.Fragment>
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br /> {name} {lastName}!</h1>
                    { isOpen ? <FormEditProfile /> : <button onClick={formOpen} className="edit-button">Edit Name</button> }
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}
