import React from 'react'
import './Header.css'
import FirstImage from '../images/Firstimage.png';
import Arrow from '../images/arrow.png';

function Header() {
        return (
            <div className="firstsection" id='HomeContainer'>
                <div className="bottompart">
                    <div className="content">
                        <div className="subcontent">
                            <h1>Introducing You to the <span>Digital World</span></h1>
                            <p>Contributing to Society, Helping Business Grow</p>
                        </div>
                    </div>
                    <div className="imageside">
                        <img src={FirstImage} alt="image" />
                    </div>
                </div>
                <div className="arrow" id='AboutContainer'>
                    {/*<i class="far fa-arrow-alt-circle-down"></i>*/}
                    <img src={Arrow} alt="Arrow" />
                </div>
            </div>
        )
}

export default Header;
