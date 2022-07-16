import React from 'react';
import { NavLink } from "react-router-dom";


export const NavBar = () =>{
    return(
        <>
        <nav>
                    <NavLink to="/" class="index-link">Index</NavLink>
                    <NavLink to="/home" class="home-link">Home</NavLink>
        </nav>
        </>
    )

}
