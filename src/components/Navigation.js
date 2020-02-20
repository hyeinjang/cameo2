import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation(){
    return(
        <nav>
            <ul>
                <li><Link to="/" className="nav__list">Home</Link></li>
                <li><Link to={{
                    pathname: "/about"
                }} className="nav__list">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;