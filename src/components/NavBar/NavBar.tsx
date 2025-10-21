import React from 'react';
import { NavBarLinks } from '../../Utilities/utility';
import "./NavBar.css";
import {  NavLink } from 'react-router-dom';


export const NavBar = () => {
    return (
        <>
            <nav className='nav_container'>
            <ul className='nav'>
                {NavBarLinks.map((item, index) => {
                    return (
                        <li key={index}><NavLink to={item.to}>{item.link_label}</NavLink></li>
                    )
                })}
                </ul>
                </nav>
        </>
    )
}