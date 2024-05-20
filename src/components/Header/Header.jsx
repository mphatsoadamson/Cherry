import React from "react";
import './Header.css'
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div className="header">
            <p className="logo">Cherry</p>
            <ul>
                <li><NavLink to="/" className='links'>Home</NavLink></li>
                <li><NavLink to="Products" className='links'>Products</NavLink></li>
                <li><NavLink to="Cart" className='links'>Cart</NavLink></li>
                <li><NavLink to="Contact" className='links'>Contact</NavLink></li>
                <li><NavLink to="Login" className='links'>Login</NavLink></li>
                
            </ul>
        </div>
    )
}