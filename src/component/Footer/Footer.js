import React from 'react';
import './Footer.css';
import footerLogo from '../images/logoFooter.png';

function Footer() {
    return (
        <div className='footerContainer' id='footerContainer'>
            <div className="webview">
                <div className="footerTop">
                    <div className="topLeft">
                        <h1>Write To Us</h1>
                        <h6>Questions? Please write us at : <span>revampsociety13@gmail.com</span></h6>
                        <div className="infoBox">
                            <div className="info1">
                                <h6>Contact Us : <span>9891198501, 7291071348</span></h6>
                            </div>
                        </div>
                        <h1>Follow Us</h1>
                        <div className="ractsLink">
                            <a href="https://www.linkedin.com/in/racts-core-b295b31b6/" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.facebook.com/RACTS-100650331797988/" target="_blank"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://www.instagram.com/racts_core/" target="_blank"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="topRight">
                        <div className="email">
                            <h6>Email Address</h6>
                            <input type="text" className='emailField' />
                        </div>
                        <div className="message">
                            <h6>Message</h6>
                            <textarea />
                        </div>
                        <div className="mailButton">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="footerBottom">
                    <div className="bottomLeft">
                        <img src={footerLogo} alt="footerLogo" />
                    </div>
                    <div className="bottomRight">
                        <p>Copyright &copy; {new Date().getFullYear()} RACTS Society Pvt. Ltd. All Rights Reserved &nbsp;<span>Privacy Policy</span> | <span>Terms of Services</span></p>
                    </div>
                </div>
            </div>
            {/* Mobile View */}
            <div className="mobileViewFooter">
                <div className="footerTopMobile">
                    <div className="topLeftMobile">
                        <h1>Write To Us</h1>
                        <h6>Questions? Please write us at </h6>
                        <p>revampsociety13@gmail.com</p>
                        <div className="infoBoxMobile">
                            <div className="info1MOBILE">
                                <h6>Contact Us :</h6>
                                <p>9891198501, 7291071348</p>
                            </div>
                        </div>
                        <h1>Follow Us</h1>
                        <div className="ractsLinkMobile">
                            <a href="https://www.linkedin.com/in/racts-core-b295b31b6/" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.facebook.com/RACTS-100650331797988/" target="_blank"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://www.instagram.com/racts_core/" target="_blank"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="topRightMobile">
                        <div className="emailMobile">
                            <h6>Email Address</h6>
                            <input type="text" className='emailFieldMobile' />
                        </div>
                        <div className="messageMobile">
                            <h6>Message</h6>
                            <textarea />
                        </div>
                        <div className="mailButtonMobile">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="footerBottomMobile">
                    <div className="bottomRightMobile">
                        <p>Copyright &copy; {new Date().getFullYear()} RACTS Society Pvt. Ltd. All Rights Reserved &nbsp;<span>Privacy Policy</span> | <span>Terms of Services</span></p>
                    </div>
                    <div className="bottomLeftMobile">
                        <img src={footerLogo} alt="footerLogo" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;