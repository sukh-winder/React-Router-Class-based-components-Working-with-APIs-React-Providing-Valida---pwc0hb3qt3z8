import React from 'react';
import { NavLink } from "react-router-dom";


export const NavBar = () =>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" class="index-link">Index</NavLink>
                </li>
                <li>
                    <NavLink to="/home" class="home-link">Home</NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}
