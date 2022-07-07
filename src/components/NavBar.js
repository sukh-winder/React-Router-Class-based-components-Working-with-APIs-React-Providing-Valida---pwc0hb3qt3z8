import React from 'react';
import { NavLink } from "react-router-dom";


export const NavBar = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/" class="index-link"></NavLink>
                </li>
                <li>
                    <NavLink to="/home"></NavLink>
                </li>
            </ul>
        </nav>
    )
}
