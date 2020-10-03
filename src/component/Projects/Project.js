import React from 'react';
import Adopto from '../images/Templates/1.png';
import Medico from '../images/Templates/2.png';
import Barbara from '../images/Templates/3.png';
import './Project.css';

function Project() {
    return (
        <div>
            <div className='projectContainer' id='ProjectsContainer'>
                <div className='extraSpace'></div>
                <div className='projectHeading'>
                    <h1>Our Work</h1>
                    <p>Brief overview of our work</p>
                </div>
                <div className="projectCards">
                    <div className="card1">
                        <div className="cardImg">
                            <img src={Adopto} alt="FoodDelight" />
                        </div>
                        <div className="cardDetails">
                            <h1>Adopto</h1>
                            <p>A pet lover knows what pet adoption means and here's a look of our very own pet adoption website.</p>
                        </div>
                    </div>
                    <div className="card2">
                        <div className="cardImg">
                            <img src={Medico} alt="Lolios" />
                        </div>
                        <div className="cardDetails">
                            <h1>Medico</h1>
                            <p>Medico app allows video consultation with india's top doctors connect from anywhere anytime from ayurveda to child care.</p>
                        </div>
                    </div>
                    <div className="card3">
                        <div className="cardImg">
                            <img src={Barbara} alt="Covid" />
                        </div>
                        <div className="cardDetails">
                            <h1>Barbara</h1>
                            <p>We here know hair can be a tough thing to understand  and different products, Barbara offers a variety of styles that'd match your personality.</p>
                        </div>
                    </div>
                </div>
                <div className="projectsMore">
                    <button className='SeeMoreBtn'>See More</button>
                </div>
            </div>

            <div className='mobile-projectContainer' id='ProjectsContainer'>
                <div className='extraSpace'></div>
                <div className='mobile-projectHeading'>
                    <h1>Our Work</h1>
                    <p>Brief overview of our work</p>
                </div>
                <div className="mobile-projectCards">
                    <div className="mobile-card1">
                        <div className="mobile-cardImg">
                            <img src={Adopto} alt="FoodDelight" />
                        </div>
                        <div className="mobile-cardDetails">
                            <h1>Adopto</h1>
                            <p>A pet lover knows what pet adoption means and here's a look of our very own pet adoption website.</p>
                        </div>
                    </div>
                    <div className="mobile-card2">
                        <div className="mobile-cardImg">
                            <img src={Medico} alt="Lolios" />
                        </div>
                        <div className="mobile-cardDetails">
                            <h1>Medico</h1>
                            <p>Medico app allows video consultation with india's top doctors connect from anywhere anytime from ayurveda to child care.</p>
                        </div>
                    </div>
                    <div className="mobile-card3">
                        <div className="mobile-cardImg">
                            <img src={Barbara} alt="Covid" />
                        </div>
                        <div className="mobile-cardDetails">
                            <h1>Barbara</h1>
                            <p>We here know hair can be a tough thing to understand  and different products, Barbara offers a variety of styles that'd match your personality.</p>
                        </div>
                    </div>
                </div>
                <div className="projectsMore">
                    <button className='SeeMoreBtn'>See More</button>
                </div>
            </div>


        </div>
    );
}

export default Project;