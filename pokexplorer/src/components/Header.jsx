import React from 'react'
import logo from '../assets/pokemon-logo.png'
import '../styles/header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="logo" />
            </nav>
        </header>
    )
}

export default Header