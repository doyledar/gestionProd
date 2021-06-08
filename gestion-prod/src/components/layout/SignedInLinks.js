import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './layout.module.css'
import Dropdown from '../Menus/Dropdown'


const SignedInLinks = () => {
    return (
        <div className='row'>
            <div className="col s10 right" >
                <ul>
              
                    <li><NavLink to='/articles'>Articles</NavLink></li>
                    <li><NavLink to='/'>Silos</NavLink></li>
                    <li><NavLink to='/'>Recettes</NavLink></li>
                    <li><NavLink to='/'>Cmd achats</NavLink></li>
                    <li><NavLink to='/'>Réception</NavLink></li>
                    <li className={styles.params}>
                        <NavLink to='/'>
                            Paramètres
                            <div className={styles.dropdown}>
                            <Dropdown>Définition des types</Dropdown>
                            
                            </div>
                            
                            
                        </NavLink></li>
                    <li className={styles.logout}><NavLink to='/'>Logout</NavLink></li>
                </ul>
            </div>
        </div>
        
    )
}

export default SignedInLinks