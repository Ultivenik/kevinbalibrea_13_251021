import React from 'react'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import User from './views/User/User'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './views/Header/Header'
import Footer from './views/Footer/Footer'


export default function App() {
    return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/user" component={User} />
                </Switch>
                <Footer />
            </Router>
    )
}
