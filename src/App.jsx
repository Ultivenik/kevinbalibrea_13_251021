import React from 'react'
import  './App.css'
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import User from './views/User/User'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


export default function App() {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/user" component={User} />
                </Switch>
            </Router>
    )
}
