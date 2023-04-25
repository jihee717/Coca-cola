import React from "react";
import { Link } from 'react-router-dom'
import logo2 from "../../assets/images/logo2.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer section">
      <div className="footer-heading">
        <h1 className="footer-text">
        Sign up for 15% off your next Coca-Cola Store order.
        </h1>
        <Link to='/login'>
        <button>SIGN IN</button>
        </Link>
      </div>

      <div className="footer-links">
        <div className="footer-links_div">
          <h4>SHOP & VISIT</h4>
          <p>Coca-Cola Store Online</p>
          <p>Coca-Cola Int'l Store Online</p>
          <p>Coca-Cola Store Atlanta</p>
          <p>Coca-Cola Store Orlando</p>
          <p>Coca-Cola Store Las Vegas</p>
          <p>World of Coca-Cola Attraction</p>
        </div>
        <div className="footer-links_div">
          <h4>HELP</h4>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>Order Status</p>
          <p>Shipping</p>
          <p>Sitemap</p>
        </div>
        <div className="footer-links_div">
          <h4>EXPLORE</h4>
          <p>Android App</p>
          <p>Apple App</p>
          <p>Coca-Cola Give</p>
          <p>Coca-Cola Offers</p>
          <p>Insiders Club</p>
          <p>sip & scan®</p>
          <p>Vending</p>
        </div>
        <div className="footer-links_div">
          <h4>LEGAL</h4>
          <p>Company</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
          <p>California Notice at Collection</p>
          <p>Rules</p>
          <p>My Personal Information</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <div className="footer-links_footer">
        <div className="footer-links_logo">
        <img src={logo2} className="logo2"/>
        </div>
        <div className="sns">
        <a href="#"><img src={facebook}/></a>
        <a href="#"><img src={twitter}/></a>
        <a href="#"><img src={instagram}/></a>
        <a href="#"><img src={youtube}/></a>
        </div>
        <div className="footer-copyright">
        <p>© 2023 <span>The Coca-Cola Company</span> . All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
