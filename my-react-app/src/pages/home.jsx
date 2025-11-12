import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Footer from '../components/footer'
import '../style/home.css'
// my-react-app\public\style\home.css
import worker from '../images/Workers.jpg'
import CivilWorksIMG from '../images/CivilWorksIMG.webp';
import BulkEarthworksIMG from '../images/Bulk Earthworks.webp';
import BuildingConstructionIMG from '../images/BuildingConstruction.webp';
import RoadConstructionIMG from '../images/RoadConstruction.webp';
import SewerageConstructionIMG from '../images/SewerageConstruction.webp';
import InfrastructureConstructionIMG from '../images/InfrastructureConstruction.webp';

function Home(){

    return(
        <>
        <section className='homePage'>
            <div className="firstThingYouSee">
                
                <div className="textAndButtons">
                    <h1 className="textAndButtons-Heading">Crafting Tomorrow, Today</h1>
                    <p className="textAndButtons-Text">Our designs and builds reflect tomorrow's innovation, brought to life with today's precision</p>
                    <div className="buttons">
                        <a><NavLink to="/divisions" className="homeBtn">View our devisions</NavLink></a>
                        <a><NavLink to="/about" className="homeBtn">Learn more about us</NavLink></a>
                    </div>
                </div>
            </div>

            <div className="home">
                <div className="basicInfo">
                    <div className="infoText">
                        <h3 className='actualInfo'>The Ndidzulafhi property group offers professional civil construction solutions that are unparalleled in 
                            terms of skill and experience. We deliver our services on time, within budget and according to the 
                            required quality standards. However, our focus is twofold: our clients are given exceptional service 
                            and the local communities are uplifted through sustainable job opportunities. Ndidzulafhi 
                            builds the economy in every sense.
                        </h3>
                        <Link to="/about" className='learnMore'>read more <i className="fa-solid fa-arrow-right"></i></Link>
                        
                    </div>
                    <img className="infoImg" src={worker} alt='Image of workers'/>
                </div>
                <div className="divisionSection">
                        <h1 className='divisionHeading'>Our Business Divisions</h1>
                        <p className='divisionText'>Specialized expertise across all sectors of construction and engineering</p>
                    
                    <div><NavLink to="/divisions">
                        <a href="#divisions" className="Divisions" >
                        <div class="wrapper">
                            <div class="image-wrapper">
                                <img class="card-image" src={CivilWorksIMG} loading="lazy"/>
                            </div>
                            <div class="header-wrapper">
                                <h1>RC Civil works</h1>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="image-wrapper">
                                <img class="card-image" src={BulkEarthworksIMG} loading="lazy"/>
                            </div>
                            <div class="header-wrapper">
                                <h1>Bulk Earthworks</h1>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="image-wrapper">
                                <img class="card-image" src={BuildingConstructionIMG} loading="lazy"/>
                            </div>
                            <div class="header-wrapper">
                                <h1>Building</h1>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="image-wrapper">
                                <img class="card-image" src={RoadConstructionIMG} loading="lazy"/>
                            </div>
                            <div class="header-wrapper">
                                <h1>Roads</h1>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="image-wrapper">
                                <img class="card-image" src={SewerageConstructionIMG} loading="lazy"/>
                            </div>
                            <div class="header-wrapper">
                                <h1>Sewerage</h1>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="image-wrapper">
                                <img class="card-image" src={InfrastructureConstructionIMG} loading="lazy"/>
                            </div>
                            <div class="header-wrapper">
                                <h1>Infrastructure Development</h1>
                            </div>
                        </div>
                    </a>
                    </NavLink>
                </div>


                </div>
                <div className="ourServices">
                    <h1 className="serviceHeader">Our Business Services</h1>
                    <p className='serviceText'>We build and manage construction projects with experienced teams and proper tools.</p>
                    <div className="servicesBox">
                        <div className="serviceCard">
                            <h1 className='cardHeading'>Powered by People, Backed by Gear</h1>
                            <p className='cardText'>
                                Our experienced team handles everything from planning to plastering, 
                                combining skilled locals and top-tier equipment to get the job done right.
                            </p>
                            <NavLink to="/services" className="moreInfoBtn">Click me<i className="fa-solid fa-arrow-right"></i></NavLink>
                        </div>
                        <div className="serviceCard">
                            <h1 className='cardHeading'>Built Right. Proven Right.</h1>
                            <p className='cardText'>
                                We follow a full quality control process which consists of planning, testing, 
                                and documenting each phase to meet top standards. From start to finish.
                            </p>
                            <NavLink to="/services" className="moreInfoBtn">Click me<i className="fa-solid fa-arrow-right"></i></NavLink>
                        </div>
                        <div className="serviceCard">
                            <h1 className='cardHeading'>Prioritising Safety in Every Project</h1>
                            <p className='cardText'>
                                Here, at the Ndidzulafhi property group, we follow a strict safety laws and runs a strong health 
                                and environmental system to protect people, property, and the planet.
                            </p>
                            <NavLink to="/services" className="moreInfoBtn">Click me<i className="fa-solid fa-arrow-right"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </section>
        </>
    )
}

export default Home