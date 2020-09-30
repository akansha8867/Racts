import React from 'react';
import Adopto from '../images/Templates/1.png';
import Medico from '../images/Templates/2.png';
import Barbara from '../images/Templates/3.png';
import './Project.css';

function Project() {
        return (
            <div className='projectContainer'>
                <div className='projectHeading'>
                    <h1>Our Work</h1>
                    <p>Be Digital ready with our Fast and Cost-effective Services.</p>
                </div>
                <div className="projectCards">
                    <div className="card1">
                        <div className="cardImg">
                            <img src={Adopto} alt="FoodDelight" />
                        </div>
                        <div className="cardDetails">
                            <h1>Adopto</h1>
                            <p>Info about project</p>
                        </div>
                    </div>
                    <div className="card2">
                        <div className="cardImg">
                            <img src={Medico} alt="Lolios" />
                        </div>
                        <div className="cardDetails">
                            <h1>Medico</h1>
                            <p>Info about project</p>
                        </div>
                    </div>
                    <div className="card3">
                        <div className="cardImg">
                            <img src={Barbara} alt="Covid" />
                        </div>
                        <div className="cardDetails">
                            <h1>Barbara</h1>
                            <p>Info about project</p>
                        </div>
                    </div>
                </div>
                <div className="projectsMore">
                    <button className='SeeMoreBtn'>See More</button>
                </div>
            </div>
        );
}

export default Project;