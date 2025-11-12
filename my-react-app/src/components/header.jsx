import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import '../style/header.css'
import logo from'./Ndidzulafhi_Logo.png'


function Header(){
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return(
        <> 
            <div className="navbar">
                <img className='logoImage' src={logo} alt="Vituoso Logo" />
                <ul className="links">
                    {/* 2. Change <li className='choice'><Link...to <li><NavLink...
                    3. Add the 'end' prop to the Home link.
                    */}
                    <li><NavLink to="/" className='a choice' end>Home</NavLink></li>
                    <li><NavLink to="/about" className='a choice'>About Us</NavLink></li>
                    <li><NavLink to="/divisions" className='a choice'>Divisions</NavLink></li>
                    <li><NavLink to="/investor" className='a choice'>Investor Relations</NavLink></li>
                    <li><NavLink to="/services" className='a choice'>Services</NavLink></li>
                    <li className='choice'><a href="https://www.pnet.co.za/" target='_blank' className='a'>Careers</a></li>
                </ul>
                <a href="https://za.linkedin.com/" target='_blank' className="action_btn">Get In Touch</a>
                <div className="toggle_btn" onClick={toggleMenu}>
                    <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </div>
            </div>

        <div className={`dropdown_menu ${menuOpen ? 'open' : ''}`}>
            <li><NavLink to="/" className='a choice'>Home</NavLink></li>
            <li><NavLink to="/about" className='a choice'>About Us</NavLink></li>
            <li><NavLink to="/divisions" className='a choice'>Divisions</NavLink></li>
            <li><NavLink to="/investor" className='a choice'>Investor Relations</NavLink></li>
            <li><NavLink to="/services" className='a choice'>Services</NavLink></li>
            <li><a href="#careers" className='a choice'>Careers</a></li>
            <li><a href="#" className="a action_btn2">Get In Touch</a></li>
        </div>
        </>
        
    )
}

export default Header