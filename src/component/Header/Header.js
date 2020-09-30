import React, { Component } from 'react'
import './Header.css'
import Logo from '../images/Logo.png';
import Firstimage from '../images/Firstimage.png';

class Header extends Component {
    render() {
        return (
            
            <div className="firstsection">
                <div className="navbar">
                    <img src={Logo} alt="logo" />
                    <ul className="navlinks" type="none">
                        <li className="homeli">Home</li>
                        <li className="homeli">About</li>
                        <li className="homeli">Projects</li>
                        <li className="homeli">Contact Us</li>
                    </ul>
                </div>
                <div className="bottompart">
                    <div className="content">
                        <div className="subcontent">
                            <h1>Introducing You to the <p> Digital World</p></h1>
                            <h5>Contributing to Society, Helping Business Grow</h5>
                        </div>
                    </div>
                    <div className="imageside">
                        <img src={Firstimage} alt="image" />
                    </div>
                </div>
                <div className="arrow">
                    <h2>Scroll Down</h2>
                    <i class="far fa-arrow-alt-circle-down"></i>
                </div>
            </div>

        )
    }
}

export default Header;
