import React, { Component } from 'react';
import './About.css';
import WhatWeDo from '../images/WhatWeDo.png';
import Process from '../images/Process.png';
import Objective from '../images/Objective.png';

function About() {
    return (
        <div>
            <div className='aboutContainer' id='AboutContainer'>
                <div className='aboutHeading'>
                    <h1>About Us</h1>
                    <p>Be Digital ready with our Fast and Cost-effective Services.</p>
                </div>
                <div className="aboutObjective">
                    <div className="objectiveLeft">
                        <h1>What's Our Objective?</h1>
                        <p>We understand the need of getting digital in today’s world. We as a team are willing to give a boost up to businesses as well as start-ups on digital platform. RACTS prefer giving equal importance to all our clients regardless of type. All our work is customised to the needs of our clients and we do our best to fulfil client’s requirement. We are available 24/7 to answer all your queries.</p>
                    </div>
                    <div className="objectiveRight">
                        <img src={Objective} alt="WhatWeDo" />
                    </div>
                </div>
                <div className="aboutWeDo">
                    <div className="aboutLeft">
                        <img src={WhatWeDo} alt="WhatWeDo" />
                    </div>
                    <div className="aboutRight">
                        <h1>What do we do?</h1>
                        <p>RACTS helps you to grow your business by providing you a website, mobile application or revamp your existing one at power with the advancements in digital world. We provide our clients the best solutions as early as possible.</p>
                    </div>
                </div>
                <div className="aboutProcess">
                    <div className="processLeft">
                        <h1>What's our Process?</h1>
                        <p>We here understand that IT services are changing and are willing to provide our clients with the best ones. We proceed by understanding client’s idea and work with proper planning and precision. Visual representation of the client’s imagination helps them to see their idea clearly. RACTS believes that the product delivered to the client should be genuine and we run full testing of the products to ensure the same.</p>
                    </div>
                    <div className="processRight">
                        <img src={Process} alt="Process" />
                    </div>
                </div>
            </div>

            <div className='mobile-aboutContainer'>
                <div className='mobile-aboutHeading'>
                    <h1>About Us</h1>
                    <p>Be Digital ready with our Fast and Cost-effective Services.</p>
                </div>
                <div className="mobile-aboutObjective">
                    <div className="mobile-objectiveLeft">
                        <h1>What's Our Objective?</h1>
                        <div className="mobile-objectiveRight">
                            <img src={Objective} alt="WhatWeDo" />
                        </div>
                        <p>We understand the need of getting digital in today’s world. We as a team are willing to give a boost up to businesses as well as start-ups on digital platform. RACTS prefer giving equal importance to all our clients regardless of type. All our work is customised to the needs of our clients and we do our best to fulfil client’s requirement. We are available 24/7 to answer all your queries.</p>
                    </div>
                </div>
                <div className="mobile-aboutWeDo">
                    <div className="mobile-aboutRight">
                        <h1>What do we do?</h1>
                        <div className="mobile-aboutLeft">
                            <img src={WhatWeDo} alt="WhatWeDo" />
                        </div>
                        <p>RACTS helps you to grow your business by providing you a website, mobile application or revamp your existing one at power with the advancements in digital world. We provide our clients the best solutions as early as possible.</p>
                    </div>
                </div>
                <div className="mobile-aboutProcess">
                    <div className="mobile-processLeft">
                        <h1>What's our Process?</h1>
                        <div className="mobile-processRight">
                            <img src={Process} alt="Process" />
                        </div>
                        <p>We here understand that IT services are changing and are willing to provide our clients with the best ones. We proceed by understanding client’s idea and work with proper planning and precision. Visual representation of the client’s imagination helps them to see their idea clearly. RACTS believes that the product delivered to the client should be genuine and we run full testing of the products to ensure the same.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;
