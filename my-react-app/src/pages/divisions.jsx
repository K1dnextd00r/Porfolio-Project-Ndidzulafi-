import { useState, useEffect } from "react";
import '../style/divisions.css';
import Footer from '../components/footer';
import CivilWorksIMG from '../images/CivilWorksIMG.webp';
import BulkEarthworksIMG from '../images/Bulk Earthworks.webp';
import BuildingConstructionIMG from '../images/BuildingConstruction.webp';
import RoadConstructionIMG from '../images/RoadConstruction.webp';
import SewerageConstructionIMG from '../images/SewerageConstruction.webp';
import InfrastructureConstructionIMG from '../images/InfrastructureConstruction.webp';

const Divisions = () => {
  const [openDivisions, setOpenDivisions] = useState({});

  const toggleDivision = (divisionId) => {
    setOpenDivisions(prev => ({
      ...prev,
      [divisionId]: !prev[divisionId]
    }));
  };

  const divisions = [
    {
      id: "civilWorks",
      title: "RC Civil Works",
      image: CivilWorksIMG,
      description: "We deliver precision-engineered reinforced concrete structures that form the backbone of safe, long-lasting infrastructure. Our RC Civil Works division focuses on durability, structural integrity, and flawless execution.",
      services: [
        "Highway and Road Construction",
        "Bridge Engineering and Construction",
        "Water Treatment Facilities",
        "Utility Infrastructure",
        "Public Transportation Systems",
        "Airport and Seaport Development"
      ],
      projects: [
        { name: "Metro Bridge Project", status: "Completed", year: "2023" },
        { name: "Highway Expansion Phase II", status: "In Progress", year: "2024" },
        { name: "Water Treatment Plant Upgrade", status: "Planning", year: "2025" }
      ]
    },
    {
      id: "bulkEarthwork",
      title: "Bulk Earthworks",
      image: BulkEarthworksIMG,
      description: "We prepare construction sites with precision bulk earthmoving, shaping land for stable foundations and long-term development success.",
      services: [
        "Mass excavation and site clearance",
        "Platform preparation for industrial and residential projects",
        "Cut-and-fill operations and land contouring"
      ],
      projects: [
        { name: "Somerset West Industrial Park Platform Prep", status: "Completed", year: "2024" },
        { name: "Ceres Agricultural Processing Plant Site Clearance", status: "In Progress", year: "2025" },
        { name: "Cape Flats Residential Development Earthworks", status: "Completed", year: "2023" }
      ]
    },
    {
      id: "buildings",
      title: "Buildings",
      image: BuildingConstructionIMG,
      description: "From residential housing to large commercial structures, we bring design to life with precision, quality materials, and expert craftsmanship.",
      services: [
        "Turnkey commercial and residential construction",
        "Office and retail space developments",
        "Refurbishment and fit-outs"
      ],
      projects: [
        { name: "Sea Point Mixed-Use Complex", status: "Planning", year: "2025" },
        { name: "Paarl Business Hub Office Park", status: "In Progress", year: "2024" },
        { name: "Durbanville Luxury Housing Estate", status: "Completed", year: "2023" }
      ]
    },
    {
      id: "roads",
      title: "Roads",
      image: RoadConstructionIMG,
      description: "We construct durable, safe, and efficient roadways that improve connectivity and support regional development",
      services: [
        "Road construction and rehabilitation",
        "Asphalt surfacing and base layer preparation",
        "Road drainage and signage installation"
      ],
      projects: [
        { name: "West Coast Highway Shoulder Upgrade", status: "Completed", year: "2023" },
        { name: "Mitchells Plain Arterial Road Expansion", status: "Approved", year: "2024" },
        { name: "Franschhoek Tourism Route Resurfacing", status: "Completed", year: "2022" }
      ]
    },
    {
      id: "sewerage",
      title: "Sewerage",
      image: SewerageConstructionIMG,
      description: "We design and install efficient sewerage systems that meet environmental regulations and serve communities effectively.",
      services: [
        "Sewer pipeline installation and maintenance",
        "Wastewater treatment connections",
        "Pump station construction"
      ],
      projects: [
        { name: "Khayelitsha Residential Sewer Upgrade", status: "Completed", year: "2023" },
        { name: "Atlantis Industrial Sewer Network Expansion", status: "In Progress", year: "2022" },
        { name: "Hermanus Coastal Sewer Line Replacement", status: "Completed", year: "2024" }
      ]
    },
    {
      id: "infrastructure",
      title: "Infrastructure Development",
      image: InfrastructureConstructionIMG,
      description: "We deliver large-scale infrastructure solutions that enable economic growth, improve public services, and enhance quality of life.",
      services: [
        "Integrated infrastructure for housing developments",
        "Public facility and utility construction",
        "Urban and rural infrastructure upgrades"
      ],
      projects: [
        { name: "Cape Winelands Rural Development Infrastructure", status: "In Progress", year: "2023" },
        { name: "Bellville Public Transport Hub Upgrade", status: "Completed", year: "2023" },
        { name: "George Smart Utility Network Project ", status: "Planning", year: "2025" }
      ]
    }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed": return "status-completed";
      case "In Progress": return "status-progress";
      case "Planning": case "Design": return "status-planning";
      case "Bidding": case "Approved": return "status-approved";
      default: return "status-default";
    }
  };

  return (
    <>
    <div className="divisions-container">
      <div className="divisionIntro">
        <h1 className="topDivisionHeading">Our Divisions</h1>
        <p className="topDivisionText">
          At Ndidzulafhi property group, our divisions reflect our diverse expertise across the construction industry. We bring together skilled teams, 
          advanced techniques, and reliable project management to achieve outstanding results. Every division works seamlessly with the others, 
          ensuring an integrated service that adds lasting value to our clients and the communities we serve.
        </p>
      </div>

      <section className="ourdivisions-list">
        <h1 className='divisionsHeading'>Our Business Divisions</h1>
        <div className="divisionBlock">
          {divisions.map((division) => (
            <div key={division.id} className={`division-card ${openDivisions[division.id] ? "open" : ""}`}>
              <div className="division-header" style={{ backgroundImage: `url(${division.image})` }} onClick={() => toggleDivision(division.id)}>
                <div className="overlay">
                  <h2 className="divisionHeaderTitle">{division.title}</h2>
                  <p className="divisionHeaderText">{division.description}</p>
                </div>
                  <button className="toggle-btn" onClick={() => toggleDivision(division.id)}>
                      <i className={`fa-solid ${openDivisions[division.id] ? 'fa-chevron-up' : 'fa-chevron-down'}`} ></i>
                  </button>
              </div>

              {openDivisions[division.id] && (
                <div className="division-content">
                  <div className="services">
                    <h2 className="servicesHeading">Our Services</h2>
                    <ul className="serviceList">
                      {division.services.map((service, i) => (
                        <li className="serviceItems" key={i}>{service}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="division-projects">
                    <h3 className="projectHeader">Recent Projects</h3>
                    {division.projects.map((project, i) => (
                      <div key={i} className="project-item">
                        <div>
                          <strong>{project.name}</strong>
                          <p>{project.year}</p>
                        </div>
                        <span className={`status-badge ${getStatusClass(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <div className="discussBox">
        <div className="discussProject">
          <h1 className="discussHeading">Ready To Discuss Your Project?</h1>
          <p className="discussText">Our division experts are ready to help you with specialized solutions for your specific needs.</p>
          <a  href="https://za.linkedin.com/" target='_blank' className="discussBtn">Contact Our specialists</a>
        </div>
      </div>
    <Footer/>
    </div>
    </>
  );
};

export default Divisions;
