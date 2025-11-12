import '../style/aboutUs.css'
import Footer from '../components/footer'
import { useState, useEffect } from 'react'
import vision from '../images/AboutUsIMG_1.jpg'
import mission from '../images/missionIMG.jpg'

function About (){

    return(
        <>
        <section className='AboutUsPage'>
            <div className="aboutUsIntro">
                <h1 className='mainHeading'>About the Ndidzulafhi property group</h1>
                <p className='mainText'>Established from a strong industry partnership, Ndidzulafhi property group combines technical expertise and proven results 
                    to deliver projects that meet the highest standards. From building works to large-scale civil engineering, we pride 
                    ourselves on safety, trust, and excellence.</p>
            </div>

            <div className="aboutUsSection">
                <div className="aboutUsCard">
                    <div className="text-section">
                        <h1 className='textHeading'>Our Vision</h1>
                        <p>
                            Our vision is to establish Ndidzulafhi property group as a steadfast and reliable force in the construction industry, a company known not only for the quality 
                            of its work, but for its stability, resilience, and integrity. We are committed to consistently providing job security for our employees, creating an environment 
                            where talent is valued, growth is encouraged, and dedication is rewarded. True to the meaning of our name, we strive to be skillful in every task we undertake, 
                            experts in every field we operate, and brilliant in every execution. Each project is an opportunity to showcase our craftsmanship, attention to detail, and innovative
                            approach to problem-solving. We aim to forge long-term relationships with our clients, built on a foundation of trust, transparency, and mutual respect. By delivering 
                            on our promises, exceeding expectations, and maintaining open communication, we seek to become not just a service provider, but a trusted partner in every client's success story.
                        </p>
                        
                    </div>
                    <div className="icon-section">
                        <i class="fa-solid fa-eye-low-vision"></i>
                    </div>
                </div>
                <div className="aboutUsCard">
                    <div className="icon-section">
                        <i class="fa-solid fa-bullseye"></i>
                    </div>
                    <div className="text-section">
                        <h1 className='textHeading'>Our Mission</h1>
                        <p>
                            Our mission is to deliver the highest level of service excellence in the fields of building, civil works, and earthworks construction. We approach every project with 
                            precision, commitment, and a drive to set new standards in quality and reliability. By combining the expertise of our professional team with superior construction processes, 
                            we ensure that every stage of our work reflects efficiency, safety, and skill. We are deeply committed to creating a healthy and safe working environment for our employees,
                            one that not only protects their well-being but also fosters pride, motivation, and professional growth. This environment is built on the principles of quality, honesty, and 
                            reliability, ensuring that every member of our team contributes to the successful delivery of our projects. By consistently exceeding the expectations of our clients, we cultivate 
                            long-term partnerships based on trust and performance. For us, success is not only measured by the completion of a project but by the lasting relationships we build and the 
                            positive impact our work has on communities and industries.
                        </p>
                    </div>
                    
                </div>
                <div className="aboutUsCard">
                    <div className="text-section">
                        <h1 className='textHeading'>Our Core Values</h1>
                        <p>
                            At  the Ndidzulafhi property group, our work is guided by a set of values that define who we are and how we operate. These principles
                            are the foundation of our reputation and the driving force behind every project we undertake:
                        </p>
                        <ul>
                            <li className='textList'><b>Excellence in Craftsmanship</b>: We are committed to delivering work of the highest quality, where every detail reflects precision and pride.</li>
                            <li className='textList'><b>Integrity in Action</b>: Honesty, transparency, and ethical practices are at the heart of everything we do, ensuring trust between our team, clients, and partners.</li>
                            <li className='textList'><b>Safety First</b>:  We protect our people and our sites through rigorous safety standards and a culture of care.</li>
                            <li className='textList'><b>Collaboration and Respect</b>: We believe in strong teamwork, open communication, and respect for every individual involved in our projects.</li>
                        </ul>
                        <p>
                            Together, these values shape our identity and ensure that every structure we create is built on more than just concrete and steel... it's built on trust, responsibility, and excellence.
                        </p>
                        
                    </div>
                    <div className="icon-section">
                        <i class="fa-solid fa-check-double"></i>
                    </div>
                </div>
                
            </div>

            <div class="timelineSection">
                <h1 className='timelineHeading'>Timeline</h1>
                <div className="timeline">
                    <div class="container right">
                        <div class="date">Late 2014</div>
                        <i class="icon fa-solid fa-play"></i>
                        <div class="content">
                            <h2>Pre-establishment Collaboration</h2>
                            <p>
                                Before forming Ndidzulafhi property group, Makeshift 1009 (PTY) LTD and Wediop Construction & Projects CC 
                                successfully partner on multiple projects, demonstrating strong teamwork and delivering outstanding 
                                results across civil, building, and earthworks contracts.
                            </p>
                        </div>
                    </div>
                    <div class="container left">
                        <div class="date">Mid 2015</div>
                        <i class=" icon fa-solid fa-building-columns"></i>
                        <div class="content">
                            <h2>Pre-establishment Collaboration</h2>
                            <p>
                                Ndidzulafhi property group secures its first major joint contract, leveraging the combined expertise 
                                of its founders and previous partnerships to deliver high-quality civil and building projects in the Western Cape region.
                            </p>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="date">March 2017</div>
                        <i class=" icon fa-solid fa-money-bill"></i>
                        <div class="content">
                            <h2>Investments</h2>
                            <p>
                                The company invests in upgrading its project management systems and safety protocols, reflecting a growing 
                                commitment to workplace health and safety, client satisfaction, and operational efficiency.
                            </p>
                        </div>
                    </div>
                    <div class="container left">
                        <div class="date">October 2019</div>
                        <i class="icon fa fa-cog"></i>
                        <div class="content">
                            <h2>Service offers</h2>
                            <p>
                                Ndidzulafhi property group expands its service offerings to include infrastructure development and bulk earthworks,
                                broadening its portfolio and increasing its presence in commercial and municipal projects.
                            </p>
                        </div>
                    </div>
                    <div class="container right">
                        <div class="date">2024 onward</div>
                        <i class=" icon fa-solid fa-money-bill"></i>
                        <div class="content">
                            <h2>Investments</h2>
                            <p>
                                Ndidzulafhi property group continues to pursue innovative construction solutions, investing in employee 
                                development and sustainable building practices to maintain its reputation as a trusted leader in South Africa’s construction industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </section>
        </>
    )

}

export default About