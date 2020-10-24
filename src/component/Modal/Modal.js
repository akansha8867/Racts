import React, { Component } from 'react';
import './Modal.css';
import Mailbox from '../images/mailbox.png';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initDiv: ''
        };
    }
    componentDidMount() {
        this.setState({
            ...this.state,
            initDiv: this.props.modalNumber
        });
    }

    handleDiv = () => {
        if (this.state.initDiv === 1) {
            return (
                <div>
                    <h1>First Modal</h1>
                </div>
            )
        }
        else if (this.state.initDiv === 2) {
            return (
                <div>
                    <h1>Second Modal</h1>
                </div>
            )
        }
        else {
            return (
                <div className="submitmodal">
                    <div className="outerbox">
                        <div className="Imageside"><img src={Mailbox} alt="loading" /></div>
                        <div className="textside">
                            <h1>SUCCESS</h1>
                            <h6>Your message has been successfully sent to us. Our Team will get in touch with you soon.</h6>
                            <button className="Btn">OK</button>
                        </div>
                    </div>

                </div>
            )
        }
    }
    render() {
        return (
            <div className='modalContainer' onClick={() => { this.props.modalValue(false) }}>
                {
                    this.handleDiv()
                }
            </div>
        );
    }
}

export default Modal;