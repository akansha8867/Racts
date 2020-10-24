import React, { useState } from 'react';
import './Footer.css';
import footerLogo from '../images/logoFooter.png';
import emailjs from 'emailjs-com'
import Modal from "../Modal/Modal";

function Footer() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [modal, modalValue] = useState(false);
    const [modalNum, setModalNum] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email !== '' && message !== '') {
            emailjs.send('revampsociety13', 'template_ie6hhir', { email, message }, 'user_V9ZHKSCqhWIESLX6WowCw').then(result => {
                alert('Your Email has been sent');
                setEmail('');
                setMessage('');
            }, error => {
                console.log(error.text);
            });
        }
    }
    const showModal = () => {
        return <Modal modalValue={modalValue} modalNumber={modalNum} />;
    }
    const handleClick = (num) => {
        modalValue(true);
        setModalNum(num);
    }
    return (
        <div className='footerContainer' id='footerContainer'>
            {
                modal && showModal()
            }
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
                        <a href="https://www.linkedin.com/in/racts-core-b295b31b6/" target="_blank"><i
                            className="fab fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/RACTS-100650331797988/" target="_blank"><i
                            className="fab fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/racts_core/" target="_blank"><i
                            className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="topRight">
                    <form onSubmit={handleSubmit}>
                        <div className="email">
                            <h6>Email Address</h6>
                            <input type="text" className='emailField' onChange={e => setEmail(e.target.value)} value={email} />
                        </div>
                        <div className="message">
                            <h6>Message</h6>
                            <textarea onChange={e => setMessage(e.target.value)} value={message} />
                        </div>
                        <div className="mailButton">
                            <button onClick={() => { handleClick(3) }}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footerBottom">
                <div className="bottomLeft">
                    <img src={footerLogo} alt="footerLogo" />
                </div>
                <div className="bottomRight">
                    <p>Copyright &copy; {new Date().getFullYear()} RACTS Society Pvt. Ltd. All Rights Reserved &nbsp;
                        <span onClick={() => { handleClick(1) }}>Privacy Policy</span> | <span onClick={() => { handleClick(2) }}>Terms of Services</span></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;