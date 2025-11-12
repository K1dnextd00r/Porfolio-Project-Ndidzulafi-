import React from "react";
import '../style/investor.css'

const reports =[
    {
        id: 1,
        title: "Anual Reports 2023",
        description: "Comprehensive overview of our financial performance and strategic initiatives.",
        category: "Annual Report", 
        date: "March 2024",
        file: "../../public/reports/Annual Report 2023 for Ndidzulfhi Property Group.pdf"
    },
    {
        id: 2,
        title: "Q4 2023 Financial Results",
        description: "Quarterly financial performance and business updates for the final quarter of 2023.",
        category: "Quarterly Report", 
        date: "February 2024",
        file: "../../public/reports/Q4 Results 2023 for Ndidzulfhi Property Group.pdf"
    },
    {
        id: 3,
        title: "Investor Presentation 2024",
        description: "Presentation highlighting growth strategies, key initiatives, and future outlook.",
        category: "Presentation", 
        date: "April 2024",
        file: "../../public/reports/Investor Presentation 2024 for Ndidzulfhi Property Group.pdf"
    },
    {
        id: 4,
        title: "Sustainability Report 2023",
        description: "Detailed report on our sustainability initiatives, impact, and commitments. Detailed report on our sustainability initiatives.",
        category: "Sustainability", 
        date: "January 2024",
        file: "../../public/reports/Sustainability Report 2023 for Ndidzulfhi Property Group.pdf"
    }
];

function ReportCard({ title, description, category, date, file }) {

    return (
        <article className="reportCard" aria-label={`${title}: ${description}`}>
            <h2 className="reportCardHeading">{title}</h2>
            <p className="reportCardText">{description}</p>
            <div className="reportCardBottom">
                <p className="reportCardCategory">
                    <em>
                    {category} • {date}
                    </em>
                </p>
                <a href={file} download className="reportCardButton">Download</a>
            </div>
            
            
        </article>
    );
};

export default function ReportsAndDocs({ items }){
    const data = items ?? reports;

    return(
        <section className="repAndDoc">
            <div className="documentSections">
                <h1 className="highlightHeading">Reports & Documents</h1>
                <p className="highlightText">Access our latest financial reports, presentations, and corporate governance documents</p>

                <div className="reportBox">
                    {data.map(item => (
                        <ReportCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};