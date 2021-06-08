import React from 'react';
import style from './style.css'



const Dropdown = (props) => {
    return (
        <ul className="dropdown-menu">
            <li>{props.children}</li>
        </ul>
    );
}

export default Dropdown;
