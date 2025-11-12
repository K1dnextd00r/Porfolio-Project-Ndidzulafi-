import React, { useEffect } from 'react';
import '../style/footer.css';
import {Link} from 'react-router-dom'

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Ndidzulafhi property group</h3>
          <p className='footerText'>
            At Ndidzulafhi, we bring together unmatched experience and technical know-how to deliver top-tier civil construction services. 
            Born from the union of two powerhouse companies, we now offer wider capabilities and a stronger client focus. 
            Our mission goes beyond building, we aim to uplift local communities and grow the economy. Want to work with us or explore our services? 
            Take a look around our site or get in touch directly!
          </p>
        </div>

        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li><Link to="/" className='choice'>Home</Link></li>
            <li><Link to="/about" className='choice'>About Us</Link></li>
            <li><Link to="/divisions" className='choice'>Divisions</Link></li>
            <li><Link to="/investor" className='choice'>Investor Relations</Link></li>
            <li><Link to="/services" className='choice'>Services</Link></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p><i className="fas fa-home"></i> 6 Yskor Street, Lephalale 0555, RSA</p>
          <p href="norman@virtuosoconstruction.co.za"><i className="fas fa-envelope"></i> norman@virtuosoconstruction.co.za</p>
          <p><i className="fas fa-phone"></i> +27 14 763 6182</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://x.com/"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
            <a href="https://za.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Copyright: Ndidzulafhi property group </p>
      </div>
    </footer>
  );
};

export default Footer;
