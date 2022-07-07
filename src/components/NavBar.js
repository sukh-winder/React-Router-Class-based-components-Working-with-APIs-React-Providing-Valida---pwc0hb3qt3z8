import React from 'react';


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
