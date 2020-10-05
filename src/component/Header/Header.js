import React from 'react'
import './Header.css'
import FirstImage from '../images/Firstimage.png';
import Arrow from '../images/arrow.png';
import ArrowMobile from '../images/arrowMobile.png';

function Header() {
    return (
        <div className="firstsection" id='HomeContainer'>
            <div className="webView">
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
                <div className="arrow">
                    {/*<i class="far fa-arrow-alt-circle-down"></i>*/}
                    <img src={Arrow} alt="Arrow" />
                </div>
            </div>
            <div className="mobileView">
                <div className="bottompartMobile">
                    <div className="imagesideMobile">
                        <img src={FirstImage} alt="image" />
                    </div>
                    <div className="contentMobile">
                        <div className="subcontentMobile">
                            <h1>Introducing You to the <span>Digital World</span></h1>
                            <p>Contributing to Society, Helping Business Grow</p>
                        </div>
                    </div>

                </div>
                <div className="arrowMobile">
                    <img src={ArrowMobile} alt="Arrow" />
                </div>
            </div>
        </div>
    )
}

export default Header;
