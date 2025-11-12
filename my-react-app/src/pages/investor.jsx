import '../style/investor.css'
import { useState, useEffect } from "react";
import FinancialHighlights from 'src/components/financialHighlights';
import ReportsAndDocuments from 'src/components/reports&Docs';
import Footer from 'src/components/footer'

function Investor(){

    // Bootstraps injection
    useEffect(() => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css';
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);

            return () => {
                document.head.removeChild(link); // cleanup if component unmounts
            };
        }, []);

    return(
        <>
        <section className="investorPage">
            <div className="investirIntro">
                <h1 className='investirIntroHeading'>Our Investor Relations</h1>
                <p className='investirIntroParagraph'>At Ndidzulafhi property group, we believe in building more than just infrastructure,
                    we build long-term value for our investors, partners, and stakeholders. Our commitment to 
                    transparency, sound governance, and sustainable growth ensures that every project 
                    contributes to both financial performance and community development. With a proven track 
                    record across civil works, building, and infrastructure development, we continue to create 
                    opportunities that align with investor confidence and market resilience.
                </p>
            </div>

            <FinancialHighlights/>

            <div className="whyInvestInfo">
                <div className="whyInvest">
                    <h1 className='highlightHeading'>Why Invest in Ndidzulafhi?</h1>
                    <p className='highlightText'>A compelling investment opportunity backed by strong fundamentals and growth prospects</p>

                    <div className="whyInvestBox">
                        <div className="whyInvestCard">
                            <div className='whyInvestIcon'><i class="fa-solid fa-chart-simple"></i></div>
                            <h1 className='whyInvestHeading'>Market Leadership</h1>
                            <p className='whyInvestText'>
                                Leading market position in South African construction with diversified revenue streams 
                                across multiple sectors and regions.
                            </p>
                        </div>
                        <div className="whyInvestCard">
                            <div className='whyInvestIcon'><i class="fa-solid fa-chart-line"></i></div>
                            <h1 className='whyInvestHeading'>Sustainable Growth</h1>
                            <p className='whyInvestText'>
                                Consistent revenue growth driven by strategic expansion, operational excellence, 
                                and increasing demand for infrastructure development.
                            </p>
                        </div>
                        <div className="whyInvestCard">
                            <div className='whyInvestIcon'><i class="fa-solid fa-chart-pie"></i></div>
                            <h1 className='whyInvestHeading'>Strong Returns</h1>
                            <p className='whyInvestText'>
                                Attractive dividend yield and capital appreciation potential backed by robust 
                                cash flow generation and disciplined capital allocation.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>

            <ReportsAndDocuments/>

            <Footer/>
        </section>
        
        </>

        
    )
}

export default Investor