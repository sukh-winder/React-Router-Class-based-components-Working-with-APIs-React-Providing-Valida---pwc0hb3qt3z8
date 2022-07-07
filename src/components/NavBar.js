import React from 'react';
import { NavLink } from "react-router-dom";


export const NavBar = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/" class="index-link">Index</NavLink>
                </li>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
            </ul>
        </nav>
    )
}
