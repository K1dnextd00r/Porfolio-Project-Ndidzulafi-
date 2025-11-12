import { useState, useEffect } from "react";
import Footer from '../components/footer';
import '../style/services.css'

function Service(){
    return(
        <>
        <section className="servicePage">
            <div className="serviceIntro">
                <h1 className='serviceIntroHeading'>Our Investor Relations</h1>
                <p className='serviceIntroParagraph'>At Ndidzulafhi property group, our services are built on a foundation of 
                    skill, precision, and integrity. We take pride in combining technical expertise with hands-on experience to 
                    deliver projects that meet the highest standards of quality and safety. From engineering and project management 
                    to civil works and building operations, our teams are equipped with the knowledge, equipment, and commitment 
                    needed to execute every project efficiently and sustainably. Through our continuous investment in training, safety, 
                    and quality systems, we don't just construct. We empower communities, enhance value, and build a future defined by excellence.
                </p>
            </div>

            <div className="coreServices">
                <h1 className="coreServicesHeader">Our Core Services</h1>
                <p className="coreServicesText">From initial planning to final delivery, we provide comprehensive services across all phases of construction</p>
                <div className="coreService-box">
                    <div className="coreService-card">
                        <h3 className="coreServicesCard-Heading">Project Management</h3>
                        <p className="coreServicesCard-Text">End-to-end project coordination and management services</p>
                        <ul className="coreServicesCard-List">
                            <li>Timeline management</li>
                            <li>Budget control</li>
                            <li>Quality assurance</li>
                            <li>Risk mitigation</li>
                        </ul>
                    </div>

                    <div className="coreService-card">
                        <h3 className="coreServicesCard-Heading">Design & Engineering</h3>
                        <p className="coreServicesCard-Text">Comprehensive design and engineering solutions</p>
                        <ul className="coreServicesCard-List">
                            <li>Structural design</li>
                            <li>MEP engineering</li>
                            <li>3D modeling</li>
                            <li>Technical drawings</li>
                        </ul>
                    </div>

                    <div className="coreService-card">
                        <h3 className="coreServicesCard-Heading">Construction Management</h3>
                        <p className="coreServicesCard-Text">Professional construction oversight and coordination</p>
                        <ul className="coreServicesCard-List">
                            <li>Site supervision</li>
                            <li>Progress monitoring</li>
                            <li>Safety compliance</li>
                            <li>Quality control</li>
                        </ul>
                    </div>

                    <div className="coreService-card">
                        <h3 className="coreServicesCard-Heading">Maintenance & Support</h3>
                        <p className="coreServicesCard-Text">Ongoing maintenance and post-construction support</p>
                        <ul className="coreServicesCard-List">
                            <li>Preventive maintenance</li>
                            <li>Emergency repairs</li>
                            <li>Warranty services</li>
                            <li>Facility management</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="coreServices">
                <h1 className="coreServicesHeader">Our Quality Promise</h1>
                <p className="coreServicesText">We stand behind every project with our comprehensive quality commitments and performance guarantees.</p>
                <div className="quality-Section">
                    <div className="qualityCard">
                        <div className="quality-Symbol"><i class="fa-solid fa-bolt"></i></div>
                        <div className="quality-Text">
                            <h3 className="qualitycard-Heading">Excellence in Delivery</h3>
                            <p className="qualitycard-Text">
                                At Ndidzulafhi property group, we uphold the highest standards of craftsmanship and precision. Every project is 
                                approached with meticulous attention to detail, ensuring we exceed client expectations in both design and execution. 
                                From planning to completion, our integrated quality control system ensures seamless coordination and superior delivery.
                            </p>
                        </div>
                        
                    </div>
                    <div className="qualityCard">
                        <div className="quality-Symbol"><i class="fa-solid fa-arrow-up-right-dots"></i></div>
                        <div className="quality-Text">
                            <h3 className="qualitycard-Heading">Continuous Improvement & Client Confidence</h3>
                            <p className="qualitycard-Text">
                                Our commitment doesn't end at completion, we continually review and enhance our quality systems. 
                                By setting new benchmarks for standardisation and testing, we ensure every industrial-grade component meets our 
                                strict criteria. Clients receive ongoing proof of performance through well-documented reports, reflecting our dedication 
                                to lasting partnerships built on trust and transparency.
                            </p>
                        </div>
                        
                    </div>
                    <div className="qualityCard">
                        <div className="quality-Symbol"><i class="fa-solid fa-calendar-days"></i></div>
                        <div className="quality-Text">
                            <h3 className="qualitycard-Heading">On-Time Progress & Documentation</h3>
                            <p className="qualitycard-Text">
                                We prioritise precise scheduling and proactive monitoring to keep every project on track. As work progresses, 
                                we compile as-built documentation and data packs, ensuring clients have ongoing access to verified proof of quality 
                                at each stage of development. Our transparent documentation practices strengthen accountability and client confidence.
                            </p>
                        </div>
                        
                    </div>
                    <div className="qualityCard">
                        <div className="quality-Symbol"><i class="fa-solid fa-briefcase"></i></div>
                        <div className="quality-Text">
                            <h3 className="qualitycard-Heading">Comprehensive Quality Assurance</h3>
                            <p className="qualitycard-Text">
                                Our quality assurance process is built around a complete and integrated control system. This includes project-specific quality plans, 
                                method statements, inspection checklists, and detailed QCPs for fabrication and construction. We maintain rigorous testing and 
                                validation standards to guarantee compliance, safety, and long-term durability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="coreServices">
                <h1 className="coreServicesHeader">Health & Safety Excellence</h1>
                <p className="coreServicesText">Safety is our top priority. We maintain the highest safety standards to protect our workers, clients, and communities.</p>
                <div className="healthCareBox">
                    <div className="healthCare-Card">
                        <h1 className='healthCareHeading'>99.9%</h1>
                        <p className='whyInvestText'>Safety Record</p>
                    </div>
                    <div className="healthCare-Card">
                        <h1 className='healthCareHeading'>0</h1>
                        <p className='whyInvestText'>Major Incidents</p>
                    </div>
                    <div className="healthCare-Card">
                        <h1 className='healthCareHeading'>100%</h1>
                        <p className='whyInvestText'>Compliance Rate</p>
                    </div>
                    <div className="healthCare-Card">
                        <h1 className='healthCareHeading'>24/7</h1>
                        <p className='whyInvestText'>Safety Monitoring</p>
                    </div>
                </div>

                <div className="quality-Section">
                    <div className="healthCareCard">
                        <div className="healthCare-Symbol"><i class="fa-solid fa-user-shield"></i></div>
                        <div className="health-Text">
                            <h3 className="healthCare-MainHeading">Safety System & Compliance</h3>
                            <h4 className="healthCare-subHeading">Commitment:</h4>
                            <p className="healthCare-Text">
                                The company complies with the Occupational Health and Safety Act, the Minerals Act, 
                                and the Mine Health and Safety Act. The safety plan and policy of Viruoso Construction aims to create a safe 
                                environment for all employees and the community.
                            </p>
                            <h4 className="healthCare-subHeading">Active Management:</h4>
                            <p className="healthCare-Text">
                                We are committed to an active Safety, Health & Environmental Management System 
                                and will continue to provide leadership, support, and the means to maintain the highest standards.
                            </p>
                            <h4 className="healthCare-subHeading">Objective</h4>
                            <p className="healthCare-Text">Our system is aimed at eliminating the following factors:</p>
                            <ul className="healthCare-List">
                                <li className="healthCare-Item">Personal injury</li>
                                <li className="healthCare-Item">Property damage and wastage</li>
                                <li className="healthCare-Item">Occupational health hazards</li>
                                <li className="healthCare-Item">Fires and explosions</li>
                                <li className="healthCare-Item">Unplanned interruptions to operations or processes</li>
                                <li className="healthCare-Item">Security risk to company assets</li>
                                <li className="healthCare-Item">Non-conformance to legislation, codes and standards</li>
                                <li className="healthCare-Item">Risk to people, equipment, materials and environment</li>
                            </ul>
                        </div>
                    </div>
                    <div className="healthCareCard">
                        <div className="healthCare-Symbol"><i class="fa-solid fa-notes-medical"></i></div>
                        <div className="health-Text">
                            <h3 className="healthCare-MainHeading">Implementation & Training</h3>
                            <h4 className="healthCare-subHeading">Effective Systems:</h4>
                            <p className="healthCare-Text">
                                <b>"Management operates effective systems to supply correct personal protective equipment (PPE)." </b>
                                <br/>This point is about the practical, logistical side of safety. It's not enough to just have PPE; there must be a robust system to manage it.
                            </p>
                            <p className="healthCare-Text">An effective system typically includes:</p>
                            <h4 className="healthCare-subHeading">Comprehensive Training</h4>
                            <p className="healthCare-Text">This highlights that safety is a shared responsibility, and everyone on-site, regardless of their employment status, must be competent and aware.</p>
                            <p className="healthCare-Text">"Appropriate training" covers several areas:</p>
                            <ul className="healthCare-List">
                                <li className="healthCare-Item"><strong>Legal Rights & Responsibilities:</strong> Ensuring all workers understand their right to a safe workplace and their responsibility to follow safety rules.</li>
                            </ul>
                            <h4 className="healthCare-subHeading">Guiding Principle: Zero Tolerance</h4>
                            <p className="healthCare-Text">This is the cultural foundation of the safety program. "Zero tolerance" is not just about punishment; it's about creating a non-negotiable standard where safety is paramount.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="coreServices">
                <h1 className="coreServicesHeader">Operations & Skills</h1>
                <p className="coreServicesText">Our operational excellence is built on skilled professionals, advanced technology, and proven methodologies.</p>
                <div className="operationsBox">
                    <div className="operations-Card">
                        <div className="operationSymbol"><i class="fa-solid fa-helmet-safety"></i></div>
                        <h1 className='operationsHeading'>Skilled Workforce & Community Development</h1>
                        <p className='operationsText'>
                            The Ndidzulafhi property group has qualified core personnel running and managing 
                            the day-to-day operations. This is the result of tireless sourcing of skilled and unskilled 
                            personnel from the local communities and providing the opportunity to up-skill and earn critical experience.
                        </p>
                    </div>
                    <div className="operations-Card">
                        <div className="operationSymbol"><i class="fa-solid fa-hammer"></i></div>
                        <h1 className='operationsHeading'>Operational Capabilities & Equipment</h1>
                        <p className='operationsText'>
                            We are fully-equipped with all the plant and equipment essentials necessary to fulfill the requirements of our contracts. 
                            If and where necessary, we also have access to major and highly-specialised plants countrywide.
                        </p>
                    </div>
                    <div className="operations-Card">
                        <div className="operationSymbol"><i class="fa-solid fa-book-open-reader"></i></div>
                        <h1 className='operationsHeading'>Key Skills & Expertise</h1>
                        <p className='operationsText'>
                            General management, Project management, Engineering (Earthworks, Civil and building), 
                            Financial and administrations. Along with Skilled line managers, supervisors, operators, steel fixers, 
                            shutter hands, bricklayers, plasterers, scaffolding inspectors and erectors
                        </p>
                    </div>
                </div>
            </div>

            <Footer/>
        </section>
        </>
)
}

export default Service

