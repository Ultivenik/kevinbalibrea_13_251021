import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import HeroContent from "./HeroContent/HeroContent"
import MainContent from "./MainContent/MainContent"
import './Home'

export default function Home() {
    localStorage.clear()
    return (
        <React.Fragment>
            <Header />
            <HeroContent />
            <MainContent />
            <Footer/>
        </React.Fragment>
    )
}
