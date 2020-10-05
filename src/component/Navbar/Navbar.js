import React from 'react';
import {Link, animateScroll as scroll} from 'react-scroll';
import Logo from "../images/Logoweb.png";
import './Navbar.css';

function Navbar() {
        return (
            <div className="navbar">
                <img src={Logo} alt="logo" />
                <ul className="navlinks" type="none">
                    <Link to='HomeContainer' smooth={true} spy={true} duration={300} className="homeli">Home</Link>
                    <Link to='AboutContainer' smooth={true} spy={true} duration={300} className="homeli">About</Link>
                    <Link to='ProjectsContainer' smooth={true} spy={true} duration={300} className="homeli">Projects</Link>
                    <Link to='footerContainer' smooth={true} spy={true} duration={300} className="homeli">Contact Us</Link>
                </ul>
            </div>
        );
}

export default Navbar;