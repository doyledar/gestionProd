import React from 'react'
import { Link } from 'react-router-dom'
import styles from './layout.module.css'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navbar = () => {
    return (
        <nav className="nav-wrapper indigo lighten-2">
            <div className="container">
                {/* <img src={logo} alt="logo ATI" /> */}
                <Link to='/' className="brand-logo">Gesprod</Link>
                <SignedInLinks />
                {/* <SignedOutLinks /> */}
            </div>    
        </nav>   
    )
}

export default Navbar