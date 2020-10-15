import React, {Component} from 'react';
import './Modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initDiv : ''
        };
    }
    componentDidMount() {
        this.setState({
            ...this.state,
            initDiv : this.props.modalNumber
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
                <div>
                    <h1>Third Modal</h1>
                </div>
            )
        }
    }
    render() {
        return (
            <div className='modalContainer' onClick={() => {this.props.modalValue(false)}}>
                {
                    this.handleDiv()
                }
            </div>
        );
    }
}

export default Modal;