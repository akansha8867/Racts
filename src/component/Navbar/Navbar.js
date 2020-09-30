import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../images/Logoweb.png";
import './Navbar.css';

function Navbar() {
        return (
            <div className="navbar">
                <img src={Logo} alt="logo" />
                <ul className="navlinks" type="none">
                    <a href='#HomeContainer' className="homeli">Home</a>
                    <a href='#AboutContainer' className="homeli">About</a>
                    <a href='#ProjectsContainer' className="homeli">Projects</a>
                    <a href='#' className="homeli">Contact Us</a>
                </ul>
            </div>
        );
}

export default Navbar;