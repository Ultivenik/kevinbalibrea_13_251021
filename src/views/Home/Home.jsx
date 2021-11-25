import React from 'react'
import HeroContent from "./HeroContent/HeroContent"
import MainContent from "./MainContent/MainContent"
import './../main.css'

export default function Home() {

    return (
        <React.Fragment>
            <HeroContent />
            <MainContent />
        </React.Fragment>
    )
}
