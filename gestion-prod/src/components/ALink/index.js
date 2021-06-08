import React from 'react';
import {NavLink} from 'react-router-dom'

const ALink = (props) => {
    return (
        <li><NavLink to = {'/' + props.children} >{ props.children }</NavLink></li>
    );
}

export default ALink;
