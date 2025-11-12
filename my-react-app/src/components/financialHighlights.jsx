import React from "react";
import '../style/investor.css'

const defaultItems = [
    {
        id: 'rev',
        value: 'R125K',
        label: 'Annual revenue',
        change: '+15%', 
        icon: 'fa-solid fa-chart-line'
    },
    {
        id: 'project',
        value: '200+',
        label: 'Projects completed',
        change: '+25%', 
        icon: 'fa-solid fa-chart-line'
    },
    {
        id: 'mcap',
        value: 'R1.2M',
        label: 'Market Cap',
        change: '+12%', 
        icon: 'fa-solid fa-chart-line'
    },
    {
        id: 'div',
        value: 'R125K',
        label: 'Annual revenue',
        change: '+0.5%', 
        icon: 'fa-solid fa-chart-line'
    }
];

function HighlightCard({value, label, change, icon }) {
    const positive = String(change).trim().startsWith('+');

    return (
        <article className="highlightCard" aria-label={`${label}: ${value}`}>
            <h2 className="highlightCardHeading">{value}</h2>
            <p className="highlightCardText">{label}</p>
            <p className={`highlightCardNum ${positive ? 'positive' : 'negative'}`}>
                <i className={icon} aria-hidden="true"/>{' '}
                {change}
            </p>
        </article>
    );
};

export default function FinancialHighlights({ items }){
    const data = items ?? defaultItems; 

    return( 
        <section className="investorInfo">
            <div className="financialHighlights">
                <h1 className='highlightHeading'>Our Financial Highlights</h1>
                <p className='highlightText'>Strong financial performance demonstrating consistent growth and value creation</p>

                <div className="highlightBox">
                    {data.map(item => (
                        <HighlightCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}