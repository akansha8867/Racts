import React from 'react';
import './Footer.css';

function Footer() {
        return (
            <div className='footerContainer'>
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
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className="topRight">
                        <div className="email">
                            <h6>Email</h6>
                            <input type="text" className='emailField' />
                        </div>
                        <div className="message">
                            <h6>Message</h6>
                            <textarea />
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Footer;