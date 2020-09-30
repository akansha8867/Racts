import React from 'react';
import './Footer.css';
import footerLogo from '../images/logoFooter.png';

function Footer() {
        return (
            <div className='footerContainer' id='footerContainer'>
                <div className="footerTop">
                    <div className="topLeft">
                        <h1>Write To Us</h1>
                        <h6>Questions? Please write us at : <span>revampsociety13@gmail.com</span></h6>
                        <div className="infoBox">
                            <div className="info1">
                                <h6>Contact Us : <span>9891198501</span></h6>
                            </div>
                            <div className="info2"><h6><span>7291071348</span></h6></div>
                        </div>
                        <h1>Follow Us</h1>
                        <div className="ractsLink">
                            <a href="https://www.linkedin.com/in/racts-core-b295b31b6/"><i className="fab fa-linkedin"></i></a>
                            <a href="https://www.facebook.com/RACTS-100650331797988/"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://www.instagram.com/racts_core/"><i className="fab fa-instagram"></i></a>
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
        );
}

export default Footer;